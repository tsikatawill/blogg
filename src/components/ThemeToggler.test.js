import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import ThemeToggler from './ThemeToggler'

function MockPage() {
  return (
    <>
      <ThemeToggler />
    </>
  )
}

describe('theme toggler', () => {
  beforeEach(() => {
    render(<MockPage />)
  })

  it('toggle dark mode', () => {
    const toggleButton = screen.getByRole(/theme-toggle/i)
    const HtmlDoc = document.getElementsByTagName('html')[0]
    fireEvent.click(toggleButton)

    expect(HtmlDoc).toHaveClass('dark')
  })

  it('toggle light mode', () => {
    const toggleButton = screen.getByRole(/theme-toggle/i)
    const HtmlDoc = document.getElementsByTagName('html')[0]
    fireEvent.click(toggleButton)

    expect(HtmlDoc).toHaveClass('light')
  })

  it('renders', () => {
    const toggleButton = screen.getByRole(/theme-toggle/i)
    expect(toggleButton).toBeInTheDocument()
  })
})
