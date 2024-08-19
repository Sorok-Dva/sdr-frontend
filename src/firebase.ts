import { initializeApp } from 'firebase/app'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')

      getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
        .then((currentToken) => {
          if (currentToken) {
            console.log('FCM Token:', currentToken)
          } else {
            console.log('No registration token available. Request permission to generate one.')
          }
        })
        .catch((err) => {
          console.error('An error occurred while retrieving token. ', err)
        })
    } else {
      console.log('Unable to get permission to notify.')
    }
  })
  .catch((err) => {
    console.error('Unable to get permission to notify.', err)
  })

onMessage(messaging, (payload) => {
  console.log('Message reçu:', payload)
})

export {
  messaging,
}
