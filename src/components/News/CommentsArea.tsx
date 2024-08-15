import '../../styles/Upvote.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Img as Image } from 'react-image'
import { useUser } from 'context/UserContext'
import { useAuth } from 'context/AuthContext'
import { ToastOptionsDefault } from 'utils/toastOptions'
import { toast } from 'react-toastify'
import { FaThumbsUp } from 'react-icons/fa6'

export type Comment = {
   id: number;
   userId: number;
   tutorialId: number;
   content: string;
   upvote: number;
   user: {
     nickname: string;
     avatar: string;
   }
   createdAt: Date;
   updatedAt: Date;
   deletedAt: Date | null;
}

const CommentsArea: React.FC = () => {
  const { id: tutorialId } = useParams<{ id: string }>()
  const { user } = useUser()
  const { token } = useAuth()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments/${tutorialId}`)
        const data = await response.json()
        setComments(data)
      } catch (error) {
        console.error('Failed to fetch comments:', error)
      }
    }
    
    fetchComments()
  }, [tutorialId])
  
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tutorialId,
          content: newComment,
        }),
      })
      
      if (response.ok) {
        const data = await response.json()
        toast.success('Commentaire ajouté avec succès !',
          ToastOptionsDefault
        )
        setComments([...comments, data])
        setNewComment('')
      } else {
        toast.error('Erreur lors de l\'ajout de votre commentaire.',
          ToastOptionsDefault
        )
      }
    } catch (error) {
      console.error('Failed to add comment:', error)
    }
  }
  
  const handleUpvote = async (commentId: number) => {
    try {
      const response = await fetch(`/api/comments/${commentId}/upvote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      
      if (!response.ok) {
        toast.error('Une erreur est survenue lors de l\'ajout de votre like.',
          ToastOptionsDefault
        )
      }
      
      const updatedComment = await response.json()
      
      const updatedComments = comments.map((comment) =>
        comment.id === commentId ? { ...comment, upvote: updatedComment.upvote } : comment
      )
      
      setComments(updatedComments)
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'ajout de votre like.',
        ToastOptionsDefault
      )
      console.error('Failed to upvote comment:', error)
    }
  }
  
  return (
    <div className="comments-area">
      <h3 className="comments-title">{ comments.length } Commentaires:</h3>
      { comments.length === 0 && <h5 className="mx-auto">Soyez les premier à laisser un commentaire !</h5> }
      <ol className="comment-list">
        { comments.map((comment) => (
          <li key={ comment.id } className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={ comment.user.avatar }
                    className="avatar"
                    alt="image"
                    width={ 70 }
                    height={ 70 }
                  />
                  <b className="fn">{ comment.user.nickname} </b>
                  <span className="says">says:</span>
                </div>
                <div className="comment-metadata">
                  <span>{ new Date(comment.createdAt).toLocaleString() }</span>
                </div>
              </footer>
              <div className="comment-content">
                <p>{ comment.content }</p>
              </div>
              <div className="comment-actions">
                <button onClick={ () => handleUpvote(comment.id) } className="upvote-button">
                  <FaThumbsUp/> { comment.upvote }
                </button>
                <div className="reply">
                  <Link to="#" className="comment-reply-link">
                    Reply
                  </Link>
                </div>
              </div>
            </div>
          </li>
        )) }
      </ol>
      { user && <div className="comment-respond">
        <h3 className="comment-reply-title">Laisser un commentaire</h3>
        <form className="comment-form" onSubmit={ handleAddComment }>
          <p className="comment-form-comment">
            <label>Commentaire</label>
            <textarea
              name="comment"
              id="comment"
              cols={ 30 }
              rows={ 5 }
              required
              value={ newComment }
              onChange={ e => setNewComment(e.target.value) }
            ></textarea>
          </p>
          <p className="form-submit text-center">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value="Commenter"
            />
          </p>
        </form>
      </div> }
    </div>
  )
}

export default CommentsArea
