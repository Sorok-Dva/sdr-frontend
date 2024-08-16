import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/AuthContext'
import PageBanner from 'components/Common/PageBanner'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
// import { useNavigate } from 'react-router-dom'

const ListContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const CategoryCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CategoryDetails = styled.div`
  flex: 1;
`

const CategoryTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`

const CategoryDescription = styled.p`
  color: #666;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
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

const DeleteButton = styled(Button)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`

/*
const EditButton = styled(Button)`
  background-color: #3498db;
  &:hover {
    background-color: #2980b9;
  }
`
*/

const CategoryList: React.FC = () => {
  const { token } = useAuth()
  const [categories, setCategories] = useState<{ id: number; title: string; description: string }[]>([])
  // const navigate = useNavigate()
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/tutorials/categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response.ok) {
          throw new Error('Failed to fetch categories')
        }
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        toast.error('Erreur lors de la récupération des catégories', ToastDefaultOptions)
      }
    }
    
    fetchCategories()
  }, [token])
  
  const handleDelete = async (categoryId: number) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette catégorie?')) {
      try {
        const response = await fetch(`/api/tutorials/categories/${categoryId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        
        if (response.ok) {
          setCategories(categories.filter(category => category.id !== categoryId))
          toast.success('Catégorie supprimée avec succès', ToastDefaultOptions)
        } else {
          toast.error('Erreur lors de la suppression de la catégorie', ToastDefaultOptions)
        }
      } catch (error) {
        console.error('Erreur lors de la requête', error)
        toast.error('Erreur lors de la requête', ToastDefaultOptions)
      }
    }
  }
  
  /*  const handleEdit = (categoryId: number) => {
    navigate(`/admin/categories/${categoryId}/edit`)
  }*/
  
  return (
    <>
      <PageBanner
        pageTitle="Liste des Catégories"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText="Catégories de tutos"
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <ListContainer>
            <h2>Catégories Disponibles</h2>
            {categories.length === 0 ? (
              <p>Aucune catégorie disponible pour le moment.</p>
            ) : (
              categories.map((category, index) => (
                <CategoryCard key={index}>
                  <CategoryDetails>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    <CategoryDescription>{category.description}</CategoryDescription>
                  </CategoryDetails>
                  <ButtonContainer>
                    {/*<EditButton onClick={() => handleEdit(category.id)}>Modifier</EditButton>*/}
                    <DeleteButton onClick={() => handleDelete(category.id)}>Supprimer</DeleteButton>
                  </ButtonContainer>
                </CategoryCard>
              ))
            )}
          </ListContainer>
        </div>
      </div>
    </>
  )
}

export default CategoryList
