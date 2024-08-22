import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/AuthContext'
import { Editor } from '@tinymce/tinymce-react'
import PageBanner from 'components/Common/PageBanner'
import { Link, useNavigate, useParams } from 'react-router-dom'
import type { Tutorial } from 'types/tutorial'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import { slugify } from 'utils/slugify'
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from 'reactstrap'
import { FaTrash } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa6'
import { Img as Image } from 'react-image'
import { Category } from 'pages/admin/tutorials/AddTutorial'

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
  const [illustration, setIllustration] = useState<string | undefined>('')
  const [categories, setCategories] = useState<Category[]>([])

  const [categoryId, setCategoryId] = useState('')
  const [content, setContent] = useState('')
  const [isPreview, setIsPreview] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  const { id } = useParams<{ id: string; }>()

  const API_KEY= process.env.REACT_APP_TINYMCE_API_KEY

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/tutorials/categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        toast.error('Failed to fetch categories', ToastDefaultOptions)
      }
    }

    fetchCategories()
  }, [token])

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`/api/tutorials/${id}`)
        const data: Tutorial = await response.json()
        setTitle(data.title)
        setContent(data.content)
        setCategoryId(data.categoryId)
        setIllustration(data.image)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching the tutorial:', error)
        setLoading(false)
      }
    }

    fetchTutorial()
  }, [id])

  const handleDelete = async () => {
    try {
      await fetch(`/api/admin/tutorials/${ id }`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      })
      toast.success('Tutorial successfully deleted.',
        ToastDefaultOptions
      )
      navigate('/tutorials')
    } catch (err) {
      toast.error('Failed to delete tutorial.',
        ToastDefaultOptions
      )
      console.error('Failed to delete tutorial', err)
    }
  }

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
          ToastDefaultOptions
        )
        navigate(`/tutorial/${id}/${slugify(title)}`)
      } else {
        toast.error('Tutorial failed to be updated.',
          ToastDefaultOptions
        )
      }
    } catch (error) {
      toast.error('Error with request.',
        ToastDefaultOptions
      )
    }
  }

  if (loading) {
    return <Container className="loader-container">
      <div className="spinner-wrapper">
        <Spinner animation="border" role="status" className="custom-spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div className="loading-text">Loading</div>
      </div>
    </Container>
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
          <Button color="default" className="mb-3 p-5" href="/admin/tutorials/">
            <FaArrowLeft/> Back to Tutorials list
          </Button>
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
                <Label htmlFor="image">Image</Label>
                <Input
                  type="text"
                  id="image"
                  value={illustration}
                  onChange={(e) => setIllustration(e.target.value)}
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
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
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

              <Link to="#" className="btn btn-outline-secondary" type="button" onClick={() => setIsPreview(!isPreview)}>
                {isPreview ? 'Back' : 'Preview'}
              </Link>
              {!isPreview && <Link to="#" className="btn btn-outline-primary ml-30" onClick={handleFormSubmit}>Update</Link>}
              <Link to="#" className="btn btn-outline-danger ml-30" onClick={ () => setDeleteModalOpen(true) }>
                <FaTrash/> Delete
              </Link>
            </form>

            {isPreview && (
              <PreviewContainer>
                <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">
                    { illustration && (
                      <div className="d-flex justify-content-center">
                        <Image
                          src={ illustration }
                          alt="Image"
                          width={ 900 }
                          height={ 500 }
                          className="mx-auto d-block"
                        />
                      </div>
                    ) }
                  </div>
                </div>
                <h1 style={ { marginTop: '1rem' } }>{ title }</h1>

                <div className="pt-5"
                  dangerouslySetInnerHTML={ {
                    __html: content.replace(/(<? *script)/gi, 'illegalscript')
                  } }>
                </div>
              </PreviewContainer>
            ) }
          </AdminContainer>
          <Modal isOpen={ isDeleteModalOpen }
            toggle={ () => setDeleteModalOpen(!isDeleteModalOpen) }>
            <ModalHeader
              toggle={ () => setDeleteModalOpen(!isDeleteModalOpen) }>
              Confirm Delete
            </ModalHeader>
            <ModalBody>
              Are you sure you want to delete this tutorial ?
            </ModalBody>
            <ModalFooter>
              <Link to="#" className="btn btn-outline-danger"
                onClick={ handleDelete }>
                Delete
              </Link>{ ' ' }
              <Link to="#" className="btn btn-outline-warning"
                onClick={ () => setDeleteModalOpen(false) }>
                Cancel
              </Link>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default AddTutorial
