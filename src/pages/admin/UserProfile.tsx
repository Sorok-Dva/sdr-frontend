import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
  Row,
  Spinner,
} from 'reactstrap'
import { FaSave, FaTrash } from 'react-icons/fa'
import PageBanner from 'components/Common/PageBanner'

interface User {
  id : number;
  email : string;
  nickname : string;
  avatar : string;
  points : number;
  dreamsCount : number;
  totalViews : number;
  role : {
    id : number;
    name : string;
  } | null;
  createdAt : Date;
}

interface Role {
  id : number;
  name : string;
}

const UserProfile : React.FC = () => {
  const { id } = useParams<{ id : string }>()
  const navigate = useNavigate()
  const { token } = useAuth()
  const [user, setUser] = useState<User | null>(null)
  const [roles, setRoles] = useState<Role[]>([])
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/admin/users/${ id }`, {
          headers: {
            Authorization: `Bearer ${ token }`,
          },
        })
        const data = await response.json()
        setUser(data)
      } catch (err) {
        console.error('Failed to fetch user', err)
      }
    }
  
    const fetchRoles = async () => {
      try {
        const response = await fetch('/api/admin/roles', {
          headers: {
            Authorization: `Bearer ${ token }`,
          },
        })
        const data = await response.json()
        setRoles(data)
      } catch (err) {
        console.error('Failed to fetch roles', err)
      }
    }
  
    fetchUser()
    fetchRoles()
  }, [id, token])
 
  const handleDelete = async () => {
    try {
      await fetch(`/api/admin/users/${ id }`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      })
      navigate('/admin/users')
    } catch (err) {
      console.error('Failed to delete user', err)
    }
  }
 
  const handleUpdate = async (e : React.FormEvent) => {
    e.preventDefault()
    try {
      if (!user) return
      console.log(user)
      await fetch(`/api/admin/users/${ id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ token }`,
        },
        body: JSON.stringify(user),
      })
      alert('User updated successfully')
    } catch (err) {
      console.error('Failed to update user', err)
    }
  }
 
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => {
      if (prevUser) {
        return { ...prevUser, [name]: value }
      }
      return prevUser
    })
  }
 
  const handleRoleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const roleId = Number(e.target.value)
    const selectedRole = roles.find((role) => role.id === roleId)
    if (selectedRole && user) {
      setUser((prevUser) => ({
        ...prevUser!,
        role: selectedRole,
        roleId,
      }))
    }
  }
 
  const getProgressBarClass = (points : number) => {
    if (points < 250) return 'bg-gradient-danger'
    if (points < 500) return 'bg-gradient-warning'
    return 'bg-gradient-success'
  }
 
  if (!user) return <Container className="loader-container">
    <div className="spinner-wrapper">
      <Spinner animation="border" role="status" className="custom-spinner">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <div className="loading-text">Loading</div>
    </div>
  </Container>
 
  return (
    <>
      <PageBanner
        pageTitle={ `${ user.nickname }'s profile` }
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText={ `[Admin] ${ user.nickname }'s profile` }
      />
      <div className="pt-100 pb-70">
        <div className="container">
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#user" onClick={ (e) => e.preventDefault() }>
                        <img
                          alt="Avatar"
                          className="rounded-circle"
                          src={ user.avatar }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                      size="sm"
                    >
                    Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                      size="sm"
                    >
                    Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">{ user.dreamsCount }</span>
                          <span className="description">Dreams</span>
                        </div>
                        <div>
                          <span className="heading">{ user.totalViews ?? 0 }</span>
                          <span className="description">Total views</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      { user.nickname }
                      <span className="font-weight-light">
                      , { user.role?.name || 'No Role' }
                      </span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"/>
                      { user.email }
                      <br/>
                      <small>Joined { new Date(user.createdAt).toLocaleDateString() }</small>
                    </div>
                    <hr/>
                    <div className="h3 font-weight-300">
                      <b>Points:</b> { user.points }
                      <Progress
                        max="1000"
                        className="mt-3"
                        value={ user.points }
                        barClassName={ getProgressBarClass(user.points) }
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Edit { user.nickname }&apos;s account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href={ '/admin/users/' + id + '/dreams' }
                        size="sm"
                      >
                      See user dreams diary
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={ handleUpdate }>
                    <h6 className="heading-small text-muted mb-4">
                    User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                            Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              name="nickname"
                              value={ user.nickname }
                              onChange={ handleChange }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                            Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Email address"
                              type="email"
                              name="email"
                              value={ user.email }
                              onChange={ handleChange }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-role-name"
                            >
                            Role
                            </label>
                            <Input
                              type="select"
                              name="roleId"
                              id="input-role"
                              className="form-control-alternative"
                              value={ user.role ? user.role.id.toString(): '' }
                              onChange={ handleRoleChange as React.ChangeEventHandler<HTMLInputElement> }
                            >
                              { roles.map((role) => (
                                <option key={ role.id } value={ role.id.toString() }>
                                  { role.name }
                                </option>
                              )) }
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4"/>
                    <div className="d-flex justify-content-between">
                      <Button color="success" type="submit" className="col-md-6">
                        <FaSave/> Save Changes
                      </Button>
                      <Button
                        color="danger"
                        onClick={ () => setDeleteModalOpen(true) }
                        className="col-md-6 ml-2"
                      >
                        <FaTrash/> Delete User
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
   
          <Modal isOpen={ isDeleteModalOpen } toggle={ () => setDeleteModalOpen(!isDeleteModalOpen) }>
            <ModalHeader toggle={ () => setDeleteModalOpen(!isDeleteModalOpen) }>
          Confirm Delete
            </ModalHeader>
            <ModalBody>
          Are you sure you want to delete this user?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={ handleDelete }>
            Delete
              </Button>{ ' ' }
              <Button color="secondary" onClick={ () => setDeleteModalOpen(false) }>
            Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default UserProfile
