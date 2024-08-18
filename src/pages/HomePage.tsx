import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainBanner from 'components/HomePage/MainBanner'
import Features from 'components/HomePage/Features'
import { useAuth } from 'context/AuthContext'
import { Dream } from 'pages/DreamDiary'
import { Tutorial } from 'pages/Tutorials'

const DashboardContainer = styled.div`
  padding: 2rem;
`

const WelcomeMessage = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const Section = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`

const JournalEntry = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const TutorialItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const CommunityPost = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const ProgressTracker = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const HomePage = () => {
  const { token } = useAuth()
  const [dream, setDream] = useState<Dream>()
  const [tutorials, setTutorials] = useState<Tutorial[]>([])

  useEffect(() => {
    const fetchDream = async () => {
      try {
        const response = await fetch('/api/dreams/my/last', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data: Dream = await response.json()
        setDream(data)
      } catch (err) {
        console.error('Failed to fetch dreams', err)
      }
    }

    const fetchTopTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials/top', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const tutorials: Tutorial[] = await response.json()
        setTutorials(tutorials)
      } catch (err) {
        console.error('Failed to fetch tutorials', err)
      }
    }

    fetchDream()
    fetchTopTutorials()
  }, [token])

  return (
    <>
      <MainBanner />
      <Features />
      <DashboardContainer>
        <WelcomeMessage id="dashboard">
          <h2>Explorez vos rêves d'aujourd'hui et connectez-vous avec la communauté.</h2>
        </WelcomeMessage>

        <GridContainer>
          <Section>
            <SectionTitle>Votre Journal de Rêves</SectionTitle>
            <JournalEntry>
              <p>Dernière entrée: {dream?.title || 'Aucune entrée'}</p>
            </JournalEntry>
            <JournalEntry>
              <p>Total: {dream?.total || '0'}</p>
            </JournalEntry>
            <Link to="/dream-diary" className="btn btn-outline-success">
              Voir tout le journal
            </Link>
          </Section>

          <Section>
            <SectionTitle>Tutoriels Recommandés</SectionTitle>
            {tutorials.map((tutorial: Tutorial, index) => (
              <TutorialItem key={index}>
                <Link to={`/tutorial/${tutorial.id}/${tutorial.slug}`}>
                  <p>{ tutorial.title }</p>
                </Link>

              </TutorialItem>
            ))}
            <Link to="/tutorials" className="btn btn-outline-primary">
              Voir tous les tutoriels
            </Link>
          </Section>

          <Section>
            <SectionTitle>Activité de la Communauté</SectionTitle>
            <CommunityPost>
              <p>[Utilisateur] a partagé un rêve incroyable</p>
            </CommunityPost>
            <CommunityPost>
              <p>[Utilisateur] a commenté votre rêve</p>
            </CommunityPost>
            <Link to="/dreams-diary" className="btn btn-outline-info">
              Voir toute l'activité
            </Link>
          </Section>

          <Section>
            <SectionTitle>Objectifs de Rêves Lucides</SectionTitle>
            <ProgressTracker>
              <p>Progrès: 3/7 rêves lucides cette semaine</p>
            </ProgressTracker>
            <Link to="/objectifs">Voir tous les objectifs</Link>
          </Section>
        </GridContainer>
      </DashboardContainer>
    </>
  )
}

export default HomePage
