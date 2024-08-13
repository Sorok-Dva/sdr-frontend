import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const TermsContainer = styled(Container)`
  padding: 2rem;
  text-align: left;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const SectionSubTitle = styled.h5`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 20px;
`

const TermsOfService = () => {
  return (
    <>
      <div className="text-container ptb-100">
        <div className="container">
          <TermsContainer>
            <Title>Conditions Générales d&apos;Utilisation (CGU) de "Le Sentier des Rêves"</Title>
            
            <SectionTitle>1. Préambule</SectionTitle>
            <Paragraph>
              Les présentes <strong>Conditions Générales d&apos;Utilisation</strong> (ci-après "CGU") ont pour objet de définir
              les modalités et conditions dans lesquelles les utilisateurs (ci-après "Utilisateur(s)")
              peuvent accéder et utiliser le site web <strong>"Le Sentier des Rêves"</strong> (ci-après "le Site").
              En accédant au Site, l&apos;Utilisateur accepte sans réserve les présentes CGU.
            </Paragraph>
            
            <SectionTitle>2. Présentation du Site</SectionTitle>
            <Paragraph>
              <strong>"Le Sentier des Rêves"</strong> est une plateforme en ligne dédiée à l&apos;exploration
              des rêves lucides et à la gestion d&apos;un journal de rêves numérique.
              Le Site propose des tutoriels, des ressources sur l&apos;interprétation des rêves,
              et permet aux Utilisateurs de partager leurs expériences oniriques avec une communauté.
            </Paragraph>
            
            <SectionTitle>3. Accès au Site</SectionTitle>
            <Paragraph>
              Le Site est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à Internet.
              Tous les coûts relatifs à l&apos;accès au Site, qu&apos;il s&apos;agisse des frais matériels,
              logiciels ou d&apos;accès à Internet, sont exclusivement à la charge de l&apos;Utilisateur.
              L&apos;éditeur du Site se réserve le droit de refuser l&apos;accès au Site,
              unilatéralement et sans notification préalable, à tout Utilisateur ne respectant pas les
              présentes CGU.
            </Paragraph>
            
            <SectionTitle>4. Inscription</SectionTitle>
            <Paragraph>
              Certaines fonctionnalités du Site, telles que la création d&apos;un journal de rêves numérique ou
              la participation à la communauté, nécessitent une inscription préalable.
              L&apos;Utilisateur s&apos;engage à fournir des informations exactes et à jour lors de son inscription
              et à les maintenir à jour.
            </Paragraph>
            <SectionSubTitle>4.1. Identifiants</SectionSubTitle>
            <Paragraph>
              L&apos;Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion
              (adresse e-mail et mot de passe). Toute utilisation du Site effectuée à partir des identifiants
              de l&apos;Utilisateur sera considérée comme ayant été faite par celui-ci.
            </Paragraph>
            
            <SectionSubTitle>4.2. Suppression du compte</SectionSubTitle>
            <Paragraph>
              L&apos;Utilisateur peut à tout moment demander la suppression de son compte via les paramètres de son compte.
              L&apos;éditeur se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des présentes CGU.
            </Paragraph>
            
            <SectionTitle>5. Utilisation du Site</SectionTitle>
            <Paragraph>
              L&apos;Utilisateur s&apos;engage à utiliser le Site de manière conforme à la législation en vigueur et aux présentes CGU.
              Il s&apos;interdit notamment de :
            </Paragraph>
            <ul>
              <li>Publier des contenus illégaux, injurieux, diffamatoires, obscènes ou portant atteinte aux droits d&apos;autrui.</li>
              <li>Utiliser le Site à des fins commerciales non autorisées par l&apos;éditeur.</li>
              <li>Tenter de porter atteinte au bon fonctionnement du Site (attaques DDoS, injection de code malveillant, etc.).</li>
            </ul>
            
            <SectionTitle>6. Propriété Intellectuelle</SectionTitle>
            <Paragraph>
              Le Site et chacun des éléments qui le composent, y compris les textes, images, vidéos, bases de données, structures, marques, logos et logiciels, sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l&apos;éditeur.
            </Paragraph>
            
            <SectionTitle>7. Données Personnelles</SectionTitle>
            <Paragraph>
              L&apos;Utilisateur est informé que lors de sa navigation sur le Site et de son utilisation, des données personnelles peuvent être collectées et traitées. Le traitement de ces données est effectué conformément à la réglementation applicable, notamment le Règlement Général sur la Protection des Données (RGPD).
            </Paragraph>
            <SectionSubTitle>7.1. Nature des données collectées</SectionSubTitle>
            <Paragraph>
              Les données collectées peuvent inclure des informations telles que l&apos;adresse e-mail, le nom, l&apos;adresse IP, l&apos;historique de navigation, et les données de connexion.
            </Paragraph>
            
            <SectionSubTitle>7.2. Finalité du traitement</SectionSubTitle>
            <Paragraph>
              Les données collectées sont utilisées pour la gestion du compte Utilisateur, la fourniture des services, l&apos;amélioration du Site, ainsi que pour l&apos;envoi d&apos;informations relatives à l&apos;utilisation du Site.
            </Paragraph>
            
            <SectionSubTitle>7.3. Droit d&apos;accès, de rectification et de suppression</SectionSubTitle>
            <Paragraph>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au RGPD, l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité des données le concernant. Ces droits peuvent être exercés en contactant l&apos;éditeur via les coordonnées fournies dans la section "Contact" des présentes CGU.
            </Paragraph>
            
            <SectionTitle>8. Cookies</SectionTitle>
            <Paragraph>
              Le Site utilise des cookies pour améliorer l&apos;expérience de l&apos;Utilisateur et permettre certaines fonctionnalités. L&apos;Utilisateur est informé que des cookies peuvent être installés sur son terminal lors de la navigation sur le Site. L&apos;Utilisateur a la possibilité de gérer les cookies via les paramètres de son navigateur.
            </Paragraph>
            
            <SectionTitle>9. Limitation de Responsabilité</SectionTitle>
            <Paragraph>
              L&apos;éditeur met tout en œuvre pour assurer l&apos;accès au Site 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d&apos;un événement hors de son contrôle, et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du Site.
            </Paragraph>
            <Paragraph>
              L&apos;éditeur ne saurait être tenu responsable en cas de dysfonctionnement du réseau Internet, de pertes de données, d&apos;intrusions, de virus ou de toute autre perturbation technique empêchant l&apos;accès au Site ou altérant son bon fonctionnement.
            </Paragraph>
            
            <SectionTitle>10. Modification des CGU</SectionTitle>
            <Paragraph>
              L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment. Toute modification prendra effet immédiatement après la mise en ligne des nouvelles CGU. L&apos;Utilisateur est invité à consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications.
            </Paragraph>
            
            <SectionTitle>11. Loi Applicable et Juridiction</SectionTitle>
            <Paragraph>
              Les présentes CGU sont régies par la loi française. Tout litige relatif à l&apos;exécution ou à l&apos;interprétation des présentes CGU, qui ne pourra être résolu à l&apos;amiable, sera soumis aux tribunaux compétents du ressort de la Cour d&apos;appel de Paris.
            </Paragraph>
            
            <SectionTitle>12. Contact</SectionTitle>
            <Paragraph>
              Pour toute question relative aux présentes CGU, l&apos;Utilisateur peut contacter l&apos;éditeur via l&apos;adresse suivante : <a
                href="mailto:support@screen-me.cloud">sorokdva.developer+sdr@gmail.com</a>.
            </Paragraph>
            
            <Paragraph>
              <em>Dernière mise à jour : Mercredi 13 Août 2024 à 18h04</em>
            </Paragraph>
          </TermsContainer>
        </div>
      </div>
    </>
  )
}

export default TermsOfService
