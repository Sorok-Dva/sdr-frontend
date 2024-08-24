import React, { useEffect } from 'react'
import { useUser } from 'context/UserContext'
import useLevelUpNotifications from 'hooks/levelUpNotif'

const LevelUpNotifier: React.FC = () => {
  const { user } = useUser()

  // Appelez le hook inconditionnellement
  useLevelUpNotifications({ userId: user ? user.id : -1 })

  return null // Pas besoin de retour visuel pour ce composant
}

export default LevelUpNotifier
