import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PageBanner from 'components/Common/PageBanner'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useAuth } from 'context/AuthContext'

export type Dream = {
  title: string;
  date: string;
  content: string;
  total?: number;
};

type DreamPrivacy = 'public' | 'private'

const JournalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const Book = styled.div`
  width: 90%;
  max-width: 60rem;
  height: 500px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`

const Page = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  &:first-child {
    border-right: 1px solid #ccc;
  }
`

const PageTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Georgia', serif;
`

const DreamEntry = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`

const EntryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`

const EntryDate = styled.p`
  font-size: 0.9rem;
  color: #666;
`

const EntryContent = styled.p`
  font-size: 1rem;
  color: #444;
`

const NewDreamForm = styled.form`
  display: flex;
  flex-direction: column;
`

const TextInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
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

const PaginationControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
`

const PageButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const Label = styled.label`
  margin-left: 0.5rem;
  font-size: 1rem;
`

const Journal = () => {
  const { token } = useAuth()
  const [dreams, setDreams] = useState<Dream[]>([])
  const [newDream, setNewDream] = useState({
    title: '',
    content: '',
    privacy: 'private' as DreamPrivacy,
  })
  
  const dreamsPerPage = 2
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    const fetchDreams = async () => {
      try {
        const response = await fetch('/api/dreams/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data: Dream[] = await response.json()
        setDreams(data)
      } catch (err) {
        console.error('Failed to fetch dreams', err)
      }
    }
    
    fetchDreams()
  }, [token])
  
  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setNewDream({
      ...newDream,
      [name]: value,
    })
  }
  
  const handlePrivacyChange = () => {
    setNewDream({
      ...newDream,
      privacy: newDream.privacy === 'private' ? 'public' : 'private',
    })
  }
  
  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    if (newDream.title && newDream.content) {
      try {
        const response = await fetch('/api/dreams/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newDream),
        })
        
        if (response.ok) {
          const newDreamFromServer = await response.json()
          
          const today = new Date()
          const formattedDate = today.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
          
          const updatedDreams = [...dreams, { ...newDreamFromServer, date: formattedDate }]
          setDreams(updatedDreams)
          setNewDream({ title: '', content: '', privacy: 'private' })
        } else {
          console.error('Erreur lors de la sauvegarde du rêve')
        }
      } catch (error) {
        console.error('Erreur lors de la requête', error)
      }
    }
  }
  
  const currentDreams = [...dreams].reverse().slice(currentPage * dreamsPerPage, (currentPage + 1) * dreamsPerPage)
  
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }
  
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <>
      <PageBanner
        pageTitle="Journal de rêves"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Votre journal de rêves"
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <JournalContainer>
            <Book>
              <Page>
                <PageTitle>Vos Rêves</PageTitle>
                {dreams.length === 0 ? (
                  <p>Vous n'avez enregistré aucun rêve pour le moment.</p>
                ) : (
                  currentDreams.map((dream, index) => (
                    <DreamEntry key={index}>
                      <EntryTitle>{dream.title}</EntryTitle>
                      <EntryDate>{dream.date}</EntryDate>
                      <EntryContent>{dream.content}</EntryContent>
                    </DreamEntry>
                  ))
                )}
                {dreams.length > 0 && (
                  <PaginationControls>
                    <PageButton onClick={prevPage} disabled={currentPage === 0}>
                      <FaLongArrowAltLeft />
                    </PageButton>
                    <PageButton onClick={nextPage} disabled={(currentPage + 1) * dreamsPerPage >= dreams.length}>
                      <FaLongArrowAltRight />
                    </PageButton>
                  </PaginationControls>
                )}
              </Page>
              <Page>
                <PageTitle>Écrire un Nouveau Rêve</PageTitle>
                <NewDreamForm onSubmit={handleFormSubmit}>
                  <TextInput
                    type="text"
                    name="title"
                    placeholder="Titre du rêve"
                    value={newDream.title}
                    onChange={handleInputChange}
                  />
                  <TextArea
                    name="content"
                    placeholder="Décrivez votre rêve..."
                    value={newDream.content}
                    onChange={handleInputChange}
                  />
                  <CheckboxContainer>
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={newDream.privacy === 'public'}
                      onChange={handlePrivacyChange}
                    />
                    <Label htmlFor="privacy">
                      Rendre ce rêve public
                    </Label>
                  </CheckboxContainer>
                  <Button type="submit">Enregistrer</Button>
                </NewDreamForm>
              </Page>
            </Book>
          </JournalContainer>
        </div>
      </div>
    </>
  )
}

export default Journal
