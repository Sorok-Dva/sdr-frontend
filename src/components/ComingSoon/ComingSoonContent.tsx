'use client'

import React, { useState, useEffect } from 'react'

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date('August 23, 2025 17:00:00 PDT').getTime()
    const now = new Date().getTime()
    const timeRemaining = endDateTime - now

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    }
  }

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft()
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Coming Soon</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices.
                </p>

                <div id="timer">
                  <div id="days">
                    {countdown.days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {countdown.hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {countdown.minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {countdown.seconds} <span>Seconds</span>
                  </div>
                </div>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter email address"
                    name="email"
                    required
                  />

                  <button type="submit" className="default-btn">
                    Notify Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Countdown
