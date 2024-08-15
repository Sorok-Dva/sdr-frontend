import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/AuthContext'
import PageBanner from 'components/Common/PageBanner'
import { toast } from 'react-toastify'
import { ToastOptionsDefault } from 'utils/toastOptions'

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px;
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

const AddCategory: React.FC = () => {
  const { token } = useAuth()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const categoryData = {
      title,
      description,
    }
    
    try {
      const response = await fetch('/api/tutorials/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(categoryData),
      })
      
      if (response.ok) {
        setTitle('')
        setDescription('')
        toast.success('Catégorie ajoutée avec succès !', ToastOptionsDefault)
      } else {
        toast.error('Erreur lors de l\'ajout de la catégorie.', ToastOptionsDefault)
      }
    } catch (error) {
      console.error('Erreur lors de la requête', error)
      toast.error('Erreur lors de la requête', ToastOptionsDefault)
    }
  }
  
  return (
    <>
      <PageBanner
        pageTitle="Ajouter une catégorie"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText="Ajouter une catégorie"
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <AdminContainer>
            <h2>Ajouter une Nouvelle Catégorie</h2>
            <form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label htmlFor="title">Titre de la Catégorie</Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="description">Description de la Catégorie</Label>
                <TextArea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </FormGroup>
              
              <Button type="submit">Ajouter la Catégorie</Button>
            </form>
          </AdminContainer>
        </div>
      </div>
    </>
  )
}

export default AddCategory
