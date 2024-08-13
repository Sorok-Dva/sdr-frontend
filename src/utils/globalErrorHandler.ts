import { useError } from '../context/ErrorContext'

const useGlobalErrorHandler = () => {
  const { setServerError } = useError()
  
  const handleError = (error: Error) => {
    const errorCode = process.env.NODE_ENV === 'development' ? error.message.includes('500') : error.message.includes('503')
    if (errorCode) {
      setServerError(true)
    } else {
      setServerError(false)
    }
  }
  
  return handleError
}

export default useGlobalErrorHandler
