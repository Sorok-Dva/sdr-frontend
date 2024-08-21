import '../../../styles/Tutorial.css'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/AuthContext'
import { Editor } from '@tinymce/tinymce-react'
import PageBanner from 'components/Common/PageBanner'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import { slugify } from 'utils/slugify'
import { useNavigate } from 'react-router-dom'

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

export type Category = {
  id: number,
  title: string,
  description: string,
}

const AddTutorial = () => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [content, setContent] = useState('')
  const [isPreview, setIsPreview] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const tutorialData = {
      title,
      image,
      categoryId: parseInt(categoryId),
      content,
    }

    try {
      const response = await fetch('/api/admin/tutorials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tutorialData),
      })

      if (response.ok) {
        setTitle('')
        setCategoryId('')
        setContent('')
        toast.success('Tutoriel ajouté avec succès !',
          ToastDefaultOptions
        )
        const res = await response.json()
        navigate(`/tutorial/${res.id}/${slugify(title)}`)
      } else {
        toast.error('Erreur lors de l\'ajout du tutoriel.',
          ToastDefaultOptions
        )
      }
    } catch (error) {
      console.error('Erreur lors de la requête', error)
    }
  }

  return (
    <>
      <PageBanner
        pageTitle="Add a tutorial"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText="Add a tutorial"
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <AdminContainer>
            <h2>Ajouter un Tutoriel</h2>
            <form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label htmlFor="title">Titre du Tutoriel</Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="image">Image d'illustration</Label>
                <Input
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="content">Contenu du Tutoriel</Label>

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
                      'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                      'forecolor backcolor emoticons | help',
                    menubar: 'file edit view insert format tools table help',
                  }}
                />
              </FormGroup>

              <Button type="button" onClick={() => setIsPreview(!isPreview)}>
                {isPreview ? 'Retour à l\'édition' : 'Aperçu'}
              </Button>
              {!isPreview && <Button type="submit">Ajouter le Tutoriel</Button>}
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
