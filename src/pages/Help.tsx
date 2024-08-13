import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import '../styles/Help.css'

const Help : React.FC = () => {
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
          <Container className="text-center mt-5">
            <Row>
              <Col>
                <img
                  src="/logo512.png"
                  alt="ScreenMe"
                  style={ { maxWidth: '200px' } }
                  className="mb-4"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={ 4 }>
                <Button variant="success" className="mb-3"
                  href="https://github.com/Sorok-Dva/ScreenMe/releases/download/1.1.1/ScreenMe.exe">
                  Download for Windows
                </Button>
              </Col>
              <Col md={ 4 }>
                <Button variant="primary" className="mb-3" href="#">
                  Download for Mac (soon)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="mb-4">Need Assistance ?</h2>
                <p>If you have questions, problems, or suggestions, here are some options:</p>
                <ul className="text-left mx-auto" style={ { maxWidth: '600px' } }>
                  <li>
                    <span role="img" aria-label="Question">❓</span>・Have a question ? Check the <a href="/faq">FAQ page</a>. Your question might already be answered.
                  </li>
                  <li>
                    <span role="img" aria-label="Question">❔</span>・Don&apos;t know how to use ScreenMe ? Check the <a href="/tutorials">Tutorials page</a>.
                  </li>
                  <li>
                    <span role="img" aria-label="Bug">🐞</span>・Want to report an issue ? Create an issue on <a href="https://github.com/Sorok-Dva/ScreenMe"
                      target="_blank" rel="noopener noreferrer">Github repository</a>.
                  </li>
                  <li>
                    <span role="img" aria-label="More">➕</span>➕・Want to know more about ScreenMe ? Check the <a href="/learn-more">Learn more page</a>.
                  </li>
                  <li>
                    <span role="img" aria-label="Emergency">🚒</span>・Need help urgently ? Join our <a href="https://discord.gg/b7kJM42QGn">Discord server</a> to ask
                    for help
                    directly.
                  </li>
                  <li>
                    <span role="img" aria-label="Email">✉️</span>・Or, you can always reach us at: <a
                      href="mailto:support@screen-me.cloud">support@screen-me.cloud</a>.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
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

export default Help
