import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/AuthContext'
import { Editor } from '@tinymce/tinymce-react'
import PageBanner from 'components/Common/PageBanner'
import { useNavigate, useParams } from 'react-router-dom'
import { Tutorial } from 'pages/Tutorials'
import { toast } from 'react-toastify'
import { ToastOptionsDefault } from 'utils/toastOptions'
import { slugify } from 'utils/slugify'

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`

const PreviewContainer = styled.div`
  margin-top: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f9f9f9;
`


const AddTutorial = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const [title, setTitle] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [content, setContent] = useState('')
  const [isPreview, setIsPreview] = useState(false)
  const [loading, setLoading] = useState(true)
  const { id } = useParams<{ id: string; }>()
  
  const API_KEY=process.env.REACT_APP_TINYMCE_API_KEY
  
  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`/api/tutorials/${id}`)
        const data: Tutorial = await response.json()
        setTitle(data.title)
        setContent(data.content)
        setCategoryId(data.categoryId)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching the tutorial:', error)
        setLoading(false)
      }
    }
    
    fetchTutorial()
  }, [id])
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const tutorialData = {
      title,
      categoryId: parseInt(categoryId),
      content,
    }
    
    try {
      const response = await fetch(`/api/admin/tutorials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tutorialData),
      })
      
      if (response.ok) {
        toast.success('Tutorial successfully updated.',
          ToastOptionsDefault
        )
        navigate(`/tutorial/${id}/${slugify(title)}`)
      } else {
        toast.error('Tutorial failed to be updated.',
          ToastOptionsDefault
        )
      }
    } catch (error) {
      toast.error('Error with request.',
        ToastOptionsDefault
      )
    }
  }
  
  return (
    <>
      <PageBanner
        pageTitle="Edit a tutorial"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText={`Edit [${title}]`}
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <AdminContainer>
            <h2>Edit a Tutorial</h2>
            <form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="category">Catégorie</Label>
                <Select
                  id="category"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                  <option value="">Choose category</option>
                  <option value="1">Catégorie 1</option> {/* Remplacez par vos catégories réelles */}
                  <option value="2">Catégorie 2</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="content">Content</Label>
                
                <Editor
                  apiKey={API_KEY}
                  value={content}
                  onEditorChange={(newContent: React.SetStateAction<string>) => setContent(newContent)}
                  init={{
                    plugins: [
                      'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                      'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                      'media', 'table', 'emoticons', 'help'
                    ],
                    toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist outdent indent | link image | code preview media fullscreen | ' +
                      'forecolor backcolor emoticons | help',
                    menubar: 'edit insert format tools table help',
                  }}
                />
              </FormGroup>
              
              <Button type="button" onClick={() => setIsPreview(!isPreview)}>
                {isPreview ? 'Back' : 'Preview'}
              </Button>
              {!isPreview && <Button type="submit">Update</Button>}
            </form>
            
            {isPreview && (
              <PreviewContainer>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </PreviewContainer>
            )}
          </AdminContainer>
        </div>
      </div>
    </>
  )
}

export default AddTutorial
