import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainBanner from 'components/HomePage/MainBanner'
import Features from 'components/HomePage/Features'

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

const ArticleItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const NotificationItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
`

const HomePage = () => {
  
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
              <p>Dernière entrée: Rêve du 13 août</p>
            </JournalEntry>
            <Link to="/dream-diary" className="btn btn-outline-success">
              Voir tout le journal
            </Link>
          </Section>
          
          <Section>
            <SectionTitle>Tutoriels Recommandés</SectionTitle>
            <TutorialItem>
              <p>Maîtriser le rêve lucide en 7 jours</p>
            </TutorialItem>
            <TutorialItem>
              <p>Comprendre les symboles oniriques</p>
            </TutorialItem>
            <Link to="/dreams-diary" className="btn btn-outline-primary">
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
          
          <Section>
            <SectionTitle>Articles Récents</SectionTitle>
            <ArticleItem>
              <p>Interpréter vos rêves: Guide complet</p>
            </ArticleItem>
            <ArticleItem>
              <p>Comment se souvenir de ses rêves</p>
            </ArticleItem>
            <Link to="/articles">Voir tous les articles</Link>
          </Section>
          
          <Section>
            <SectionTitle>Notifications</SectionTitle>
            <NotificationItem>
              <p>Vous avez un nouveau commentaire sur votre rêve partagé.</p>
            </NotificationItem>
            <NotificationItem>
              <p>Nouveau message dans votre boîte de réception.</p>
            </NotificationItem>
            <Link to="/notifications">Voir toutes les notifications</Link>
          </Section>
        </GridContainer>
      </DashboardContainer>
    </>
  )
}

export default HomePage
