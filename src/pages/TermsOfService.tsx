import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const TermsContainer = styled(Container)`
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

const TermsOfService : React.FC = () => {
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
          <TermsContainer>
            <Title>Terms of Service</Title>
            
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              Welcome to ScreenMe. These Terms of Service (“Terms”) govern your use of our website, products, and
              services (“Services”). By accessing or using our Services, you agree to be bound by these Terms and our
              Privacy Policy. If you do not agree to these Terms, do not use our Services.
            </Paragraph>
            
            <SectionTitle>2. Eligibility</SectionTitle>
            <Paragraph>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant
              that you meet this age requirement.
            </Paragraph>
            
            <SectionTitle>3. Account Registration</SectionTitle>
            <Paragraph>
              To use certain features of our Services, you may need to register for an account. When you register for an
              account, you agree to provide accurate, current, and complete information about yourself. You are
              responsible for maintaining the confidentiality of your account and password and for restricting access to
              your computer. You agree to accept responsibility for all activities that occur under your account or
              password.
            </Paragraph>
            
            <SectionTitle>4. User Conduct</SectionTitle>
            <Paragraph>
              You agree not to use our Services for any unlawful or prohibited activities. This includes, but is not
              limited to:
            </Paragraph>
            <ul>
              <li>Uploading or sharing any content that is illegal, harmful, or offensive.</li>
              <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation
                with a person or entity.
              </li>
              <li>Interfering with or disrupting our Services or servers or networks connected to our Services.</li>
            </ul>
            
            <SectionTitle>5. Content Ownership</SectionTitle>
            <Paragraph>
              All content uploaded by users remains the property of the user. By uploading content to our Services, you
              grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display the
              content for the purpose of providing our Services.
            </Paragraph>
            
            <SectionTitle>6. Privacy</SectionTitle>
            <Paragraph>
              Your use of our Services is also governed by our Privacy Policy. Please review our Privacy Policy for
              information on how we collect, use, and disclose your personal information.
            </Paragraph>
            
            <SectionTitle>7. Termination</SectionTitle>
            <Paragraph>
              We reserve the right to terminate or suspend your account and access to our Services at our sole
              discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other
              users of our Services, us, or third parties, or for any other reason.
            </Paragraph>
            
            <SectionTitle>8. Disclaimers</SectionTitle>
            <Paragraph>
              Our Services are provided on an “as is” and “as available” basis. We disclaim all warranties, whether
              express or implied, including the warranties of merchantability, fitness for a particular purpose, and
              non-infringement.
            </Paragraph>
            
            <SectionTitle>9. Limitation of Liability</SectionTitle>
            <Paragraph>
              To the fullest extent permitted by applicable law, we will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use
              of or inability to use our Services; (b) any unauthorized access to or use of our servers and/or any
              personal information stored therein; (c) any interruption or cessation of transmission to or from our
              Services; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our
              Services by any third party; (e) any errors or omissions in any content or for any loss or damage incurred
              as a result of the use of any content posted, emailed, transmitted, or otherwise made available through
              our Services; and/or (f) the defamatory, offensive, or illegal conduct of any third party.
            </Paragraph>
            
            <SectionTitle>10. Governing Law</SectionTitle>
            <Paragraph>
              These Terms shall be governed by and construed in accordance with the laws of the country in which
              ScreenMe is headquartered, without regard to its conflict of law principles.
            </Paragraph>
            
            <SectionTitle>11. Changes to Terms</SectionTitle>
            <Paragraph>
              We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this
              page. You are advised to review these Terms periodically for any changes. Changes to these Terms are
              effective when they are posted on this page.
            </Paragraph>
            
            <SectionTitle>12. Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about these Terms, please contact us at: <a
                href="mailto:support@screen-me.cloud">support@screen-me.cloud</a>.
            </Paragraph>
          </TermsContainer>
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

export default TermsOfService
