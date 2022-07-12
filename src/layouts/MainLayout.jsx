import Navbar from '../components/Navbar'
import React from 'react'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="before:block before:h-16">{children}</main>
    </>
  )
}
