import 'react-toastify/dist/ReactToastify.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import './index.css'
import 'styles/Toastify.css'
import 'styles/Spinner.css'

import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import { UserProvider } from 'context/UserContext'
import { AuthProvider } from 'context/AuthContext'
import { ErrorProvider, useError } from 'context/ErrorContext'

import GoogleTagManager from './components/GoogleTagManager'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/Footer'
import NotFound from './components/ErrorPage/404'
import AdminRoute from 'components/AdminRoute'

import Home from './pages/Home'
import Login from './components/Auth/LoginForm'
import Register from './pages/Register'
import AboutPage from './pages/About'
import FAQPage from './pages/FAQ'
import HelpPage from './pages/Help'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TOSPage from './pages/TermsOfService'
import UserProfile from './pages/UserProfile'
import AdminLayout from './layouts/Admin'
import UserList from 'pages/admin/UserList'
import AdminUserProfile from 'pages/admin/UserProfile'
import AdminDashboard from 'pages/admin/Dashboard'
import ReportsList from 'pages/admin/ReportList'
import ReportDetails from 'pages/admin/ReportDetails'
import ServiceUnavailable from 'pages/ServiceUnavailable'

import { ToastContainer } from 'react-toastify'

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: 'rgba(9,9,9,0)',
    text: '#090909',
  },
}

const AppContent: React.FC = () => {
  const { serverError } = useError()
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        {serverError ? (
          <>
            <Route path="/service-unavailable" element={<ServiceUnavailable />} />
            <Route path="*" element={<Navigate to="/service-unavailable" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TOSPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/user/:nickname" element={<UserProfile />} />
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="home" element={<AdminDashboard />} />
                <Route path="users" element={<UserList />} />
                <Route path="users/:id" element={<AdminUserProfile />} />
                <Route path="reports" element={<ReportsList />} />
                <Route path="reports/:screenshotId/details" element={<ReportDetails />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
      {!isAdminRoute && <Footer />}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorProvider>
        <UserProvider>
          <AuthProvider>
            <GoogleTagManager />
            <AppContent />
          </AuthProvider>
        </UserProvider>
      </ErrorProvider>
    </ThemeProvider>
  )
}

export default App
