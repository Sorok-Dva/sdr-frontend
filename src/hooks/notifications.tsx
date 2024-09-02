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
    let eventSource: EventSource

    const connectEventSource = () => {
      eventSource = new EventSource(`/api/notifications?userId=${userId}`)

      eventSource.onmessage = (event) => {
        try {
          const rawData = event.data.replace('data: ', '')
          const parsedData = JSON.parse(rawData)

          const data = typeof parsedData === 'string' ? JSON.parse(parsedData) : parsedData

          if (data.userId === userId) {
            switch (data.event) {
            case 'levelUp':
              toast.success(<LevelUpNotif title={data.title} />)
              break
            case 'winPoints':
              toast.success(<WinPointsNotif points={data.points} />)
              break
            case 'lossPoints':
              toast.warn(<LossPointsNotif points={ data.points }/>)
              break
            default:
              console.warn('Unhandled event type:', data.event)
            }
          }
        } catch (e) {
          console.error('Error parsing event data:', e)
        }
      }

      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error)
        eventSource.close()

        setTimeout(() => {
          console.log('Reconnecting to EventSource...')
          connectEventSource()
        }, 5000)
      }
    }

    connectEventSource()

    return () => {
      if (eventSource) {
        eventSource.close()
      }
    }
  }, [userId])

  return null
}

export default Notifications
