import React from 'react'
import { useUser } from 'context/UserContext'
import notifications from 'hooks/notifications'

const Notifier: React.FC = () => {
  const { user } = useUser()

  notifications({ userId: user ? user.id : -1 })

  return null
}

export default Notifier
