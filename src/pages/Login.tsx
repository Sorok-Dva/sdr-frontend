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
import { FaCircleUser, FaLock } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Login : React.FC = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [ws, setWs] = useState<WebSocket | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:4242')
    setWs(socket)
    return () => {
      socket.close()
    }
  }, [])
  
  useEffect(() => {
    if (mainRef.current) {
      document.documentElement.scrollTop = 0
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
      }
      mainRef.current.scrollTop = 0
    }
  }, [])
  
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to login')
      }
      
      const data = await response.json()
      const token = data.token
      localStorage.setItem('token', token)
      const payload = JSON.parse(atob(token.split('.')[1]))
      login({
        id: payload.id,
        email: payload.email,
        nickname: payload.nickname,
        avatar: payload.avatar,
        roleId: payload.roleId,
        isAdmin: payload.isAdmin,
      }, token)
      
      if (ws) {
        const message = JSON.stringify({
          type: 'login',
          data: {
            id: payload.id,
            email: payload.email,
            nickname: payload.nickname,
            token,
          },
        })
        ws.send(message)
      }
      
      toast.success(`Sucessfully connected ! Welcome ${payload.nickname}.`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      })
      
      navigate('/')
    } catch (err) {
      console.log(err)
      setError('An error occurred while attempting to log you in.')
    }
  }
  
  return (
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
        <Container className="pt-lg-12">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#"
                      onClick={ (e) => e.preventDefault() }
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="Connect with Github"
                          src="/img/icons/common/github.svg"
                        />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon ml-1"
                      color="default"
                      href="#"
                      onClick={ (e) => e.preventDefault() }
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="Connect with Google"
                          src="/img/icons/common/google.svg"
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  { error && <div className="alert alert-danger text-center">{ error }</div> }
                  <Form role="form" onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                        <Input
                          placeholder="Email or username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                        <Input
                          placeholder="Password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="off"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputGroupText>
                          <Button
                            color="secondary"
                            outline
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                    
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckLogin"
                        type="checkbox"
                      />
                      <label className="custom-control-label" htmlFor="customCheckLogin">
                        <span>Remember me</span>
                      </label>
                    </div>
                    
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <Link to="/forgot-password" className="text-light">
                    <FaLock/> <small>Forgot password ?</small>
                  </Link>
                </Col>
                <Col className="text-right" xs="6">
                  <Link to="/register" className="text-light">
                    <FaCircleUser/> <small>Create new account</small>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Login
