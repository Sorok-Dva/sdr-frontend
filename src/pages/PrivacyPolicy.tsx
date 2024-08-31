import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const PrivacyContainer = styled(Container)`
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

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 20px;
`

const PrivacyPolicy = () => {
  return (
    <>
      <div className="text-container ptb-100">
        <div className="container">
          <PrivacyContainer>
            <Title>Politique de Confidentialité de "Le Sentier des Rêves"</Title>

            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              La présente <strong>Politique de Confidentialité</strong> décrit la manière dont "Le Sentier des Rêves" collecte, utilise et protège les données personnelles que vous nous fournissez dans le cadre de l&apos;utilisation de notre site web (ci-après "le Site"). Nous nous engageons à respecter la confidentialité de vos données et à les traiter dans le strict respect des lois applicables en France, notamment le Règlement Général sur la Protection des Données (<strong>RGPD</strong>).
            </Paragraph>

            <SectionTitle>2. Données Collectées</SectionTitle>
            <Paragraph>
              Nous collectons uniquement les données nécessaires au <strong>bon fonctionnement du Site</strong>. Ces données incluent :
            </Paragraph>
            <ul>
              <li>Votre adresse e-mail, lors de l&apos;inscription et de la gestion de votre compte.</li>
              <li>Des informations techniques telles que votre adresse IP, votre type de navigateur, et des données d&apos;utilisation (ex : pages visitées).</li>
              <li>Vos entrées de journal de rêves, si vous choisissez d&apos;utiliser cette fonctionnalité.</li>
            </ul>

            <SectionTitle>3. Utilisation des Données</SectionTitle>
            <Paragraph>
              Les données collectées sont utilisées exclusivement pour :
            </Paragraph>
            <ul>
              <li>Permettre votre authentification et l&apos;accès à votre compte utilisateur.</li>
              <li>Améliorer le fonctionnement et la sécurité du Site.</li>
              <li>Vous fournir les services proposés par "Le Sentier des Rêves", tels que la gestion de votre journal de rêves et l&apos;accès aux tutoriels.</li>
            </ul>
            <Paragraph>
              <strong>Aucune de vos données ne sera revendue à des tiers</strong>. Nous ne partageons vos données avec des tiers que dans les cas suivants :
            </Paragraph>
            <ul>
              <li>Lorsque cela est nécessaire pour se conformer à une obligation légale.</li>
              <li>Pour protéger nos droits, notre propriété, ou la sécurité de notre entreprise ou de nos utilisateurs.</li>
            </ul>

            <SectionTitle>4. Sécurité des Données</SectionTitle>
            <Paragraph>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre la perte, le vol, ou l&apos;accès non autorisé. Cependant, nous vous rappelons qu'aucune méthode de transmission ou de stockage électronique n'est totalement sûre, et nous ne pouvons garantir une sécurité absolue.
            </Paragraph>

            <SectionTitle>5. Droits de l&apos;Utilisateur</SectionTitle>
            <Paragraph>
              Conformément au <strong>RGPD</strong> et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants concernant vos données personnelles :
            </Paragraph>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> Vous pouvez demander à accéder aux données personnelles que nous détenons à votre sujet.</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
              <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement de vos données dans certains cas.</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données dans un format structuré, couramment utilisé, et lisible par machine.</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.</li>
            </ul>
            <Paragraph>
              Pour exercer ces droits, vous pouvez nous contacter via les coordonnées fournies dans la section "Contact" de cette politique.
            </Paragraph>

            <SectionTitle>6. Cookies</SectionTitle>
            <Paragraph>
              Le Site utilise des cookies pour améliorer votre expérience utilisateur et pour analyser notre trafic. Vous pouvez gérer les cookies via les paramètres de votre navigateur, mais notez que la désactivation de certains cookies peut affecter le fonctionnement du Site.
            </Paragraph>

            <SectionTitle>7. Modifications de la Politique de Confidentialité</SectionTitle>
            <Paragraph>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et prendra effet immédiatement après sa mise en ligne. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuels changements.
            </Paragraph>

            <SectionTitle>8. Contact</SectionTitle>
            <Paragraph>
              Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à l&apos;adresse suivante : <a
                href="mailto:support@screen-me.cloud">sorokdva.developer+sdr@gmail.com</a>.
            </Paragraph>

            <Paragraph>
              <em>Dernière mise à jour : Mercredi 13 Août 2024 à 18h04</em>
            </Paragraph>
          </PrivacyContainer>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
