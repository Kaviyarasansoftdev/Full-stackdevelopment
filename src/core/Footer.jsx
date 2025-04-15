import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        {/* <p>© {new Date().getFullYear()} | Contact: youremail@example.com</p> */}
        <p>© {new Date().getFullYear()}</p>
        {/* <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-300">GitHub</a>
          <a href="#" className="hover:text-blue-300">LinkedIn</a>
          <a href="#" className="hover:text-blue-300">Twitter</a>
        </div> */}
      </div>
    </footer>
  )
}