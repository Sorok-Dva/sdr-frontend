import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
  Table,
} from 'reactstrap'
import { useAuth } from 'context/AuthContext'
import { FaArrowLeft, FaXmark } from 'react-icons/fa6'
import { FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { ToastOptionsDefault } from 'utils/toastOptions'

interface ReportDetail {
  reason : string;
  createdAt : Date;
  reportedBy : string;
}

interface ScreenshotData {
  id : number;
  userId : number;
  url : string;
  title : string;
  path : string;
  privacy : string;
  views : number;
}

const ReportDetails : React.FC = () => {
  const { screenshotId } = useParams<{ screenshotId : string }>()
  const { token } = useAuth()
  const navigate = useNavigate()
  const [screenshot, setScreenshot] = useState<ScreenshotData | null>(null)
  const [reportDetails, setReportDetails] = useState<ReportDetail[]>([])
  const [mostInvokedReason, setMostInvokedReason] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [baseUrl] = useState(
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000': '',
  )
 
  const [closeModal, setCloseModal] = useState<boolean>(false)
  const toggleCloseModal = () => setCloseModal(!closeModal)
 
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const toggleDeleteModal = () => setDeleteModal(!deleteModal)
 
  const [selectedReason, setSelectedReason] = useState<string>('')
  const [uniqueReasons, setUniqueReasons] = useState<string[]>([])
 
  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        const response = await fetch(`/api/admin/reports/${ screenshotId }/details`, {
          headers: {
            Authorization: `Bearer ${ token }`,
          },
        })
    
        if (!response.ok) {
          throw new Error('Failed to fetch report details')
        }
    
        const data = await response.json()
        setMostInvokedReason(data.mostInvokedReason)
        setReportDetails(data.reportDetails)
        setScreenshot(data.screenshot)
    
        const reasons = data.reportDetails.map((detail : ReportDetail) => detail.reason)
        setUniqueReasons(Array.from(new Set(reasons))) // Utiliser Set pour obtenir des raisons uniques
      } catch (err : any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
  
    fetchReportDetails()
  }, [screenshotId, token])
 
  const handleCloseReport = async () => {
    try {
      const response = await fetch(`/api/admin/reports/${ screenshotId }/resolve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ token }`,
        },
      })
   
      if (!response.ok) {
        toast.error(`Failed to close report. Please try again later (${response.statusText}).`,
          ToastOptionsDefault
        )
      } else {
        toast.success('Report closed successfully.',
          ToastOptionsDefault
        )
      }
   
      navigate('/admin/reports')
    } catch (err : any) {
      setError(err.message)
    }
  }
 
  const handleDeleteScreenshot = async () => {
    if (!selectedReason) {
      toast.error('Please select a reason to resolve the report.',
        ToastOptionsDefault
      )
      return
    }
  
    try {
      const response = await fetch(`/api/admin/reports/${ screenshotId }`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ token }`,
        },
        body: JSON.stringify({ solvedReason: selectedReason }),
      })
   
      if (!response.ok) {
        toast.error(`Failed to delete the screenshot. (${response.statusText}).`,
          ToastOptionsDefault
        )
      } else {
        toast.success('The screenshot has been successfully deleted and report marked as solved.',
          ToastOptionsDefault
        )
      }
   
      navigate('/admin/reports')
    } catch (err : any) {
      setError(err.message)
    }
  }
 
  if (loading) {
    return (
      <Container className="loader-container">
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status" className="custom-spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <div className="loading-text">Loading...</div>
        </div>
      </Container>
    )
  }
 
  if (!screenshot) {
    return (
      <Container className="loader-container">
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status" className="custom-spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <div className="loading-text">Loading...</div>
        </div>
      </Container>
    )
  }
 
  if (error) {
    return (
      <Container className="text-center pt-5 mt-6">
        <Alert color="danger">{ error }</Alert>
      </Container>
    )
  }
 
  return (
    <Container className="mt-6 pt-5">
      <Button variant="default" className="mb-3" href="/admin/reports/">
        <FaArrowLeft/> Back to Reports list
      </Button>
      <Button
        className="btn-icon btn-2 col-md-3 ml-3 mt--3"
        color="success"
        type="button"
        onClick={ toggleCloseModal }
      >
        <FaXmark/> Close this report
      </Button>
      <Button
        className="btn-icon btn-2 col-md-3 ml-3 mt--3"
        color="danger"
        type="button"
        onClick={ toggleDeleteModal }
      >
        <FaTrashAlt/> Delete this screenshot
      </Button>
      <Row className="mb-4">
        <Col>
          <h2>Report Details for Screenshot &quot;{ screenshot.title }&quot; (ID: { screenshotId })</h2>
          <h4>
            Most Invoked Reason:{ ' ' }
            <Badge color="warning" pill className="text-white">
              { mostInvokedReason }
            </Badge>
          </h4>
        </Col>
      </Row>
      <Table hover className="mt-4">
        <thead>
          <tr>
            <th>Reported By</th>
            <th>Reason</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          { reportDetails.map((detail, index) => (
            <tr key={ index }>
              <td>{ detail.reportedBy }</td>
              <td>{ detail.reason }</td>
              <td>{ new Date(detail.createdAt).toLocaleDateString() }</td>
            </tr>
          )) }
        </tbody>
      </Table>
   
      <Modal isOpen={ closeModal } toggle={ toggleCloseModal }>
        <ModalHeader toggle={ toggleCloseModal }>Confirm Close Report</ModalHeader>
        <ModalBody>
          Are you sure you want to close this report? This action will mark the report as resolved, and it will no
          longer be active.
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={ handleCloseReport }>
            Confirm
          </Button>{ ' ' }
          <Button color="secondary" onClick={ toggleCloseModal }>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
   
      <Modal isOpen={ deleteModal } toggle={ toggleDeleteModal }>
        <ModalHeader toggle={ toggleDeleteModal }>Confirm Delete Screenshot</ModalHeader>
        <ModalBody>
          <p>
            Are you sure you want to delete this screenshot? This action will delete the screenshot and resolve the
            report.
          </p>
          <FormGroup>
            <Label for="reasonSelect">Select a reason to resolve the report:</Label>
            <Input
              type="select"
              name="reasonSelect"
              id="reasonSelect"
              value={ selectedReason }
              onChange={ (e) => setSelectedReason(e.target.value) }
            >
              <option value="" disabled>Select a reason</option>
              { uniqueReasons.map((reason, index) => (
                <option key={ index } value={ reason }>
                  { reason }
                </option>
              )) }
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={ handleDeleteScreenshot }>
            Confirm Delete
          </Button>{ ' ' }
          <Button color="secondary" onClick={ toggleDeleteModal }>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default ReportDetails
