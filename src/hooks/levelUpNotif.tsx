import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Notifications = ({ userId }: Record<string, number>) => {
  useEffect(() => {
    const eventSource = new EventSource(`/api/notifications?userId=${userId}`)

    eventSource.onmessage = (event) => {
      console.log('Received event:', event)
      try {
        const data = JSON.parse(event.data)
        console.log('Parsed data:', data)
        if (data.userId === userId) {
          toast.success(`Félicitations! Vous êtes maintenant un ${data.title}`)
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
