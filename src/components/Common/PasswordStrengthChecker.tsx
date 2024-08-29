import React from 'react'
import { FaCheck, FaXmark } from 'react-icons/fa6'

interface PasswordStrengthCheckerProps {
  password : string;
  theme : string;
}

const PasswordStrengthChecker : React.FC<PasswordStrengthCheckerProps> = ({ password , theme}) => {
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /(?=.*[\W_])/.test(password)
  const isValidLength = password.length >= 8

  return (
    <>
      <div className={`card mb-3 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={ { padding: '10px' } }>
        <div className="card-body">
          <h5 className="card-title">Password Strength</h5>
          <p className="card-text">
            <small className={ isValidLength ? 'text-success': 'text-danger' }>
              { isValidLength ? <FaCheck /> : <FaXmark /> } Minimum 8 characters
            </small><br/>
            <small className={ hasUpperCase ? 'text-success': 'text-danger' }>
              { hasUpperCase ? <FaCheck /> : <FaXmark /> } At least one uppercase letter
            </small><br/>
            <small className={ hasLowerCase ? 'text-success': 'text-danger' }>
              { hasLowerCase ? <FaCheck /> : <FaXmark /> } At least one lowercase letter
            </small><br/>
            <small className={ hasNumber ? 'text-success': 'text-danger' }>
              { hasNumber ? <FaCheck /> : <FaXmark /> } At least one number
            </small><br/>
            <small className={ hasSpecialChar ? 'text-success': 'text-danger' }>
              { hasSpecialChar ? <FaCheck /> : <FaXmark /> } At least one special character (@$!%*?&)
            </small>
          </p>
        </div>
      </div>
    </>

  )
}

export default PasswordStrengthChecker
