import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../Components/Navigation/Navigation'

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
    <Header />
    <div className="flex-grow flex">
      <Navigation />
      <main className="flex-grow p-6 md:p-8 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
  )
}