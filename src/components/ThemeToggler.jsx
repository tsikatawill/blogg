import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSIde from '../hooks/useDarkSIde'

export default function ThemeToggler() {
  const [colorTheme, setColorTheme] = useDarkSIde()
  const [darkSide, setDarkSide] = useState(() => {
    if (colorTheme === 'light') {
      return true
    }
    return false
  })

  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <DarkModeSwitch
      checked={darkSide}
      onChange={toggleDarkMode}
      size={26}
      aria-label={'toggle-' + colorTheme}
      role="theme-toggle"
    />
  )
}
