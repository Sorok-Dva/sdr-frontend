import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopHook = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export default ScrollToTopHook
