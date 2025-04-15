import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-3xl mr-2">👨‍💻</span>
          Full Stack Development
        </Link>
        <div className="flex items-center">
          <span className="text-sm md:text-base font-medium">Guest Lecture by:</span>
          <span className="ml-2 text-sm md:text-base font-bold">S.Kaviyarasan</span>
          <span className="ml-2 text-sm md:text-base font-bold">P.Kalaiselvan</span>
        </div>
      </div>
    </header>
  )
}
