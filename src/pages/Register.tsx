import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from 'reactstrap'
import PasswordStrengthChecker from '../components/PasswordStrengthChecker'
import PageBanner from 'components/Common/PageBanner'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'

const Register : React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [showPassword] = useState(false)
  const [error, setError] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [, setIsPolicyClicked] = useState(false)
  const [, setIsTermsClicked] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    if (mainRef.current) {
      document.documentElement.scrollTop = 0
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
      }
      mainRef.current.scrollTop = 0
    }
  }, [])
 
  const validateEmail = (email : string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }
 
  const validateUsername = (username : string) => {
    return username.length > 4 && username.length < 15
  }
 
  const validatePassword = (password : string) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/gm
    return re.test(password)
  }
 
  const isFormValid = () => {
    return (
      validateUsername(nickname) &&
      validateEmail(email) &&
      validatePassword(password) &&
      isChecked /*&&
      isPolicyClicked &&
      isTermsClicked*/
    )
  }
 
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
  
    if (!isChecked) {
      setError('Vous devez accepter les conditions générales d\'utilisation et la politique de confidentialité.')
      return
    }
  
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, nickname }),
      })
   
      if (!response.ok) {
        toast.success('Une erreur est survenue lors de votre inscription. Veuillez réessayer.',
          ToastDefaultOptions)
      }
   
      toast.success('Inscription réussie ! Veuillez vérifier votre email pour valider votre compte et finaliser la connexion.',
        ToastDefaultOptions)
      navigate('/')
    } catch (err) {
      setError('Email in use or invalid data')
    }
  }
 
  const handlePolicyClick = () => {
    setIsPolicyClicked(true)
  }
 
  const handleTermsClick = () => {
    setIsTermsClicked(true)
  }
 
  return (
    <>
      <PageBanner
        pageTitle="Inscription"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Inscription"
      />
      <main ref={ mainRef }>
        <section className="section section-shaped section-lg">
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="mt-30 shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <h1>Inscription par email</h1>
                    </div>
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup className={validateUsername(nickname) ? 'has-success' : 'has-danger'}>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                          <Input
                            className={`form-control ${validateUsername(nickname) ? 'is-valid' : 'is-invalid'}`}
                            placeholder="Username"
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      
                      <FormGroup className={validateEmail(email) ? 'has-success' : 'has-danger'}>
                        <InputGroup className={`input-group-alternative mb-3 ${validateEmail(email) ? 'is-valid' : 'is-invalid'}`}>
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                          <Input
                            className={`form-control ${validateEmail(email) ? 'is-valid' : 'is-invalid'}`}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      
                      <FormGroup className={validatePassword(password) ? 'has-success' : 'has-danger'}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                          <Input
                            className={validatePassword(password) ? 'is-valid' : 'is-invalid'}
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      
                      <PasswordStrengthChecker password={password} />
                      
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              name="rememberMe"
                              checked={ isChecked }
                              onChange={ (e) => setIsChecked(e.target.checked) }
                            />{ ' ' }
                            <label className="custom-control-label" htmlFor="customCheckRegister">
                              <span>
                                J'accepte {' '}
                                <Link to="/privacy" target="_blank" className="text-blue" onClick={() => handlePolicyClick()}>
                                  <b>la Politique de confidentialité</b>
                                </Link> &{' '}
                                <Link to="/terms-of-service" target="_blank" className="text-blue" onClick={() => handleTermsClick()}>
                                  <b>Termes de Service</b>
                                </Link>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      
                      <div className="text-center">
                        {error && <div className="alert alert-danger text-center">{error}</div>}
                        <Button className="mt-4" color="primary" type="submit" disabled={!isFormValid()}>
                          S'inscrire
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Register
