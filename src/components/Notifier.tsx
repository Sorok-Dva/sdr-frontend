import React from 'react'
import useNotifier from 'hooks/notifications'
import { useUser } from 'context/UserContext'

const NotifierComponent: React.FC = () => {
  const { user } = useUser()

  useNotifier({ token: user ? user.token : 'undefined' })

  return null
}

export default NotifierComponent
