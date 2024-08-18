import * as firebase from 'firebase'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID'
}

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onNotificationPermissionChange(permission => {
  if (permission === 'granted') {
    console.log('Notification permission granted.')
    // get token
  } else {
    console.log('Notification permission denied.')
  }
})

messaging.onMessage(payload => {
  console.log('Message reçu:', payload)
  // show notif
})

export {
  messaging,
}
