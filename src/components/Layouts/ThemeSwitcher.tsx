'use client'

import React, { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  const { theme, toggleTheme } = themeContext

  return (
    <>
      <div onClick={ toggleTheme } className="theme-switcher">
        { theme === 'light' ?
          (<i className="bx bx-moon"></i>) :
          (<i className="bx bx-sun"></i>)
        }
      </div>
    </>
  )
}

export default ThemeSwitcher
