import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { Button } from 'reactstrap'
import '../styles/ScrollToTopButton.css'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button onClick={scrollToTop} className="btn btn-primary">
          <FaArrowUp />
        </Button>
      )}
    </div>
  )
}

export default ScrollToTopButton
