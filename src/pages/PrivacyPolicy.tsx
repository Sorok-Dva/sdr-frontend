import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const PrivacyContainer = styled(Container)`
  padding: 2rem;
  text-align: left;
`

const Title = styled.h1`
  color: ${ props => props.theme.colors.primary };
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  color: ${ props => props.theme.colors.secondary };
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  color: ${ props => props.theme.colors.text };
  margin-bottom: 1rem;
`

const PrivacyPolicy : React.FC = () => {
  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span className="span-150"/>
            <span className="span-50"/>
            <span className="span-50"/>
            <span className="span-75"/>
            <span className="span-100"/>
            <span className="span-75"/>
            <span className="span-50"/>
            <span className="span-100"/>
            <span className="span-50"/>
            <span className="span-100"/>
          </div>
          <PrivacyContainer>
            <Title>Privacy Policy</Title>
            
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              Welcome to ScreenMe. Your privacy is important to us. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website, including any other media form, media
              channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”).
            </Paragraph>
            
            <SectionTitle>2. Data Collection</SectionTitle>
            <Paragraph>
              We do not collect any private user data other than the email address necessary to guarantee the login
              system. When you create an account on ScreenMe, we ask for your email address to set up your account and
              provide access to our services.
            </Paragraph>
            
            <SectionTitle>3. Use of Data</SectionTitle>
            <Paragraph>
              We use your email address solely for the purpose of authentication and communication regarding your
              account. We do not share, sell, or disclose your email address to third parties without your consent.
            </Paragraph>
            
            <SectionTitle>4. Uploaded Images</SectionTitle>
            <Paragraph>
              The images you upload to ScreenMe are securely stored. The privacy settings of your screenshots determine
              who can access them. If the privacy of a screenshot is set to private, it cannot be accessed by the
              general public.
            </Paragraph>
            
            <SectionTitle>5. Data Security</SectionTitle>
            <Paragraph>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </Paragraph>
            
            <SectionTitle>6. Your Data Protection Rights</SectionTitle>
            <Paragraph>
              Depending on your location, you may have the following rights with regard to your personal data:
            </Paragraph>
            <ul>
              <li>To access the personal data we hold about you.</li>
              <li>To request that we correct any personal data if it is inaccurate or out of date.</li>
              <li>To request that we delete your personal data.</li>
              <li>To withdraw your consent to our use of your personal data.</li>
            </ul>
            
            <SectionTitle>7. Changes to This Privacy Policy</SectionTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
              practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by
              posting the new Privacy Policy on this page.
            </Paragraph>
            
            <SectionTitle>8. Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about this Privacy Policy, please contact us at: <a
                href="mailto:support@screen-me.cloud">support@screen-me.cloud</a>.
            </Paragraph>
          </PrivacyContainer>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrivacyPolicy
