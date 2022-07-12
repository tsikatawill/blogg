import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('header renders on screen', () => {
    expect(screen.getByTestId('homepage-header')).toBeInTheDocument()
  })
})
