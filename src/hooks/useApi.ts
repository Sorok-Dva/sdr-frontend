import { useCallback } from 'react'
import apiService from '../utils/apiService'
import useGlobalErrorHandler from '../utils/globalErrorHandler'

const useApi = () => {
  const handleError = useGlobalErrorHandler()
  
  const callApi = useCallback(
    async (url : string, options : RequestInit = {}) => {
      try {
        const data = await apiService(url, options)
        return data
      } catch (error: any) {
        handleError(error)
        throw error
      }
    },
    [handleError],
  )
  
  return callApi
}

export default useApi
