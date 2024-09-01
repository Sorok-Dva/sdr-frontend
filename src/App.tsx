import 'react-toastify/dist/ReactToastify.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/fa.all.css'
import 'index.css'
import 'styles/Toastify.css'
import 'styles/Spinner.css'

import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { UserProvider, useUser } from 'context/UserContext'
import { AuthProvider } from 'context/AuthContext'
import { ErrorProvider, useError } from 'context/ErrorContext'

import GoogleTagManager from 'components/GoogleTagManager'
import Navbar from 'components/Layouts/Navbar'
import Footer from 'components/Layouts/Footer'
import NotFound from 'components/ErrorPage/404'
import AdminRoute from 'components/AdminRoute'
import ScrollToTop from 'components/Layouts/ScrollToTop'
import ThemeSwitcher from 'components/Layouts/ThemeSwitcher'

import AdminNavbar from 'components/Layouts/AdminNavbar'
import AddCategory from 'pages/admin/categories/AddCategory'
import AddTutorial from 'pages/admin/tutorials/AddTutorial'
import DreamDiary from 'pages/DreamDiary'
import EditTutorial from 'pages/admin/tutorials/EditTutorial'
import HomePage from 'pages/HomePage'
import LandingPage from 'pages/LandingPage'
import ListCategories from 'pages/admin/categories/ListCategories'
import ListTutorials from 'pages/admin/tutorials/ListTutorial'
import Login from 'components/Auth/LoginForm'
import Register from 'pages/Register'
import RecoverPassword from 'pages/RecoverPassword'
import AboutPage from 'pages/About'
import PrivacyPolicyPage from 'pages/PrivacyPolicy'
import TOSPage from 'pages/TermsOfService'
import Tutorial from 'pages/tutorials/Tutorial'
import TutorialsList from 'pages/tutorials/List'
import MostViewed from 'pages/tutorials/MostViewed'
import MostLiked from 'pages/tutorials/MostLiked'
import UserProfile from 'pages/UserProfile'
import AdminLayout from 'layouts/Admin'
import UserList from 'pages/admin/users/UserList'
import AdminUserProfile from 'pages/admin/users/UserProfile'
import AdminDashboard from 'pages/admin/Dashboard'
import ReportsList from 'pages/admin/reports/ReportList'
import ReportDetails from 'pages/admin/reports/ReportDetails'
import ResetPassword from 'pages/ResetPassword'
import ServiceUnavailable from 'pages/ServiceUnavailable'
import UserSettingsPage from 'pages/UserSettings'
import ValidateUser from 'pages/ValidateUser'

import { ToastContainer } from 'react-toastify'
import Notifier from 'components/Notifier'
import Leaderboard from './pages/Leaderboard'

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#09dfdf',
    background: 'rgba(9,9,9,0)',
    text: '#090909',
  },
}

const AppContent: React.FC = () => {
  const { serverError } = useError()
  const { user } = useUser()
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      {!isAdminRoute ? (<Navbar />) : (<AdminNavbar />) }
      <Routes>
        {serverError ? (
          <>
            <Route path="/service-unavailable" element={<ServiceUnavailable />} />
            <Route path="*" element={<Navigate to="/service-unavailable" />} />
          </>
        ) : (
          <>
            {user ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<UserSettingsPage />} />
                <Route path="/dream-diary" element={<DreamDiary />} />
                { user.isAdmin && (
                  <Route element={<AdminRoute />}>
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route path="home" element={<AdminDashboard />} />
                      <Route path="users" element={<UserList />} />
                      <Route path="users/:id" element={<AdminUserProfile />} />
                      <Route path="reports" element={<ReportsList />} />
                      <Route path="reports/:screenshotId/details" element={<ReportDetails />} />
                      <Route path="tutorials" element={<ListTutorials />} />
                      <Route path="tutorials/add" element={<AddTutorial />} />
                      <Route path="tutorials/:id/edit" element={<EditTutorial />} />
                      <Route path="categories/add" element={<AddCategory />} />
                      <Route path="categories/list" element={<ListCategories />} />
                    </Route>
                  </Route>
                )}
              </>
            ) : (
              <>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
              </>
            )}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TOSPage />} />
            <Route path="/user/:nickname" element={<UserProfile />} />
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/tutorials/most-viewed" element={<MostViewed />} />
            <Route path="/tutorials/most-liked" element={<MostLiked />} />
            <Route path="/tutorial/:id/:slug" element={<Tutorial />} />
            <Route path="/users/validate/:token" element={<ValidateUser />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/community/leaderboard" element={<Leaderboard />} />
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
    <SCThemeProvider theme={theme}>
      <ErrorProvider>
        <AuthProvider>
          <UserProvider>
            <GoogleTagManager />
            <Notifier />
            <AppContent />
            <ScrollToTop />
            <ThemeSwitcher />
          </UserProvider>
        </AuthProvider>
      </ErrorProvider>
    </SCThemeProvider>
  )
}

export default App
