import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './assets/styles/boxicons.min.css'
import './assets/styles/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'swiper/css'
import 'swiper/css/bundle'

import './assets/styles/style.css'
import './assets/styles/responsive.css'

import AosAnimation from './components/Layouts/AosAnimation'
import ScrollToTop from './components/Layouts/ScrollToTop'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTopHook from 'hooks/scrollToTop'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: false,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],
  beforeSend(event) {
    if (event.exception && event.event_id) {
      Sentry.showReportDialog({ eventId: event.event_id })
    }
    return event
  },
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/screen-me\.cloud/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Sentry.ErrorBoundary>
    <React.StrictMode>
      <Router>
        <ScrollToTopHook />
        <App/>
        <AosAnimation />
        <ScrollToTop />
      </Router>
    </React.StrictMode>
  </Sentry.ErrorBoundary>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
