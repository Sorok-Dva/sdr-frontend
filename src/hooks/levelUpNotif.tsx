import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Notifications = ({ userId }: Record<string, number>) => {
  const LevelUpNotif = ({ title }: { title: string }) => {
    return (
      <>
        <Link to="/user/profile">
          <div className="msg-container">
            Félicitations ! Vous êtes maintenant un <b>{ title }</b> ! 🌌
          </div>
        </Link>
      </>
    )
  }
  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:3010/api/notifications?userId=${userId}`)

    eventSource.onmessage = (event) => {
      try {
        const rawData = event.data.replace('data: ', '')
        const parsedData = JSON.parse(rawData)

        if (typeof parsedData === 'string') {
          const finalData = JSON.parse(parsedData)
          if (finalData.userId === userId) {
            toast.success(<LevelUpNotif title={finalData.title} />)
          }
        } else {
          if (parsedData.userId === userId) {
            toast.success(<LevelUpNotif title={parsedData.title} />)
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
