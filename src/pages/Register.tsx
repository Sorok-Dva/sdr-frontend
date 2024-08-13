import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from 'reactstrap'
import { useUser } from 'context/UserContext'
import PasswordStrengthChecker from '../components/PasswordStrengthChecker'

const Register : React.FC = () => {
  const { login } = useUser()
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
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
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
      setError('You must agree to the terms and privacy policy.')
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
        throw new Error('Failed to register')
      }
   
      const data = await response.json()
      const token = data.token
      localStorage.setItem('token', token)
      const payload = JSON.parse(atob(token.split('.')[1]))
      login(
        {
          id: payload.id,
          email: payload.email,
          nickname: payload.nickname,
          avatar: payload.avatar,
          roleId: payload.roleId,
          isAdmin: payload.isAdmin,
        },
        token,
      )
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
      <main ref={ mainRef }>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={ (e) => e.preventDefault() }
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="Register with Github"
                            src="/img/icons/common/github.svg"
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={ (e) => e.preventDefault() }
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="Register with google"
                            src="/img/icons/common/google.svg"
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
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
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label className="custom-control-label" htmlFor="customCheckRegister">
                              <span>
                                I agree with the{' '}
                                <Link to="/privacy" target="_blank" className="text-blue" onClick={() => handlePolicyClick()}>
                                  <b>Privacy Policy</b>
                                </Link> &{' '}
                                <Link to="/terms-of-service" target="_blank" className="text-blue" onClick={() => handleTermsClick()}>
                                  <b>Terms of Service</b>
                                </Link>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      
                      <div className="text-center">
                        {error && <div className="alert alert-danger text-center">{error}</div>}
                        <Button className="mt-4" color="primary" type="submit" disabled={!isFormValid()}>
                          Create account
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
