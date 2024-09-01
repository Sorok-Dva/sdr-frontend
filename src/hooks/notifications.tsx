import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const LevelUpNotif = ({ title }: { title: string }) => (
  <Link to="/user/profile">
    <div className="msg-container">
      Félicitations ! Vous êtes maintenant un <b>{ title }</b> ! 🌌
    </div>
  </Link>
)

const WinPointsNotif = ({ points }: { points: number }) => (
  <Link to="/user/profile">
    <div className="msg-container">
      Félicitations ! Vous venez de gagner <b>{ points }</b> points ! 🚀
    </div>
  </Link>
)

const LossPointsNotif = ({ points }: { points: number }) => (
  <Link to="/user/profile">
    <div className="msg-container">
      Oh non ! Vous venez de perdre <b>{ points }</b> points 😕
    </div>
  </Link>
)

const Notifications = ({ userId }: { userId: number }) => {
  useEffect(() => {
    if (userId === -1) return

    const eventSource = new EventSource(`/api/notifications?userId=${userId}`)

    eventSource.onmessage = (event) => {
      try {
        console.log('got event:', event.data)
        const rawData = event.data.replace('data: ', '')
        const parsedData = JSON.parse(rawData)

        const finalData = typeof parsedData === 'string' ? JSON.parse(parsedData) : parsedData

        if (finalData.userId === userId) {
          switch (finalData.event) {
          case 'levelUp':
            toast.success(<LevelUpNotif title={finalData.title} />)
            break
          case 'winPoints':
            toast.success(<WinPointsNotif points={finalData.points} />)
            break
          case 'lossPoints':
            toast.warn(<LossPointsNotif points={finalData.points} />)
            break
          }
        }
      } catch (e) {
        console.error('Error parsing event data:', e)
      }
    }

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
    }

    return () => {
      eventSource.close()
    }
  }, [userId])

  return null
}

export default Notifications
