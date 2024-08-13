import React from 'react'
import { Card, CardHeader, Col, Container, Row } from 'reactstrap'
import UserGrowthChart from 'pages/admin/charts/UserGrowthChart'
import ReportGrowthChart from 'pages/admin/charts/ReportGrowthChart'

const AdminDashboard : React.FC = () => {
  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row>
                  <Col className="mb-12" xl="12">
                    <Card className="bg-gradient-default shadow">
                      <UserGrowthChart/>
                    </Card>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total screenshots</h2>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5 mt-4 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row>
                  <Col className="mb-12" xl="12">
                    <Card className="bg-gradient-default shadow">
                      <ReportGrowthChart/>
                    </Card>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminDashboard
