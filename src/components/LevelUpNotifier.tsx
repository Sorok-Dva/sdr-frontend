import React from 'react'
import { useUser } from 'context/UserContext'
import useLevelUpNotifications from 'hooks/levelUpNotif'

const LevelUpNotifier: React.FC = () => {
  const { user } = useUser()

  useLevelUpNotifications({ userId: user ? user.id : -1 })

  return null
}

export default LevelUpNotifier
