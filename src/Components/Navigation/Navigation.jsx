import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Navigation = () => {
  const location = useLocation();
  
  const slides = [
    { path: '/', label: '1. Introduction' },
    { path: '/frontend', label: '2. Frontend Basics' },
    { path: '/backend', label: '3. Backend Basics' },
    { path: '/database', label: '4. Database Integration' },
    { path: '/mobile', label: '5. Mobile Development' },
    { path: '/tooling', label: '6. Modern Tooling' },
    { path: '/example', label: '7. Real-World Example' },
    { path: '/careers', label: '8. Career Paths' },
    { path: '/samples', label: '8. Samples' },
  ];

  const getCurrentIndex = () => {
    return slides.findIndex(slide => slide.path === location.pathname);
  };

  const currentIndex = getCurrentIndex();
  const prevSlide = slides[currentIndex - 1];
  const nextSlide = slides[currentIndex + 1];

  return (
    <div className="hidden md:block w-64 bg-gray-100 p-4 space-y-1 border-r border-gray-200 fixed top-18">
      <div className="text-gray-700 font-semibold mb-4">Lecture Outline</div>
      {slides.map((slide) => (
        <NavLink
          key={slide.path}
          to={slide.path}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md transition ${
              isActive
                ? 'bg-blue-600 text-white font-medium'
                : 'text-gray-700 hover:bg-gray-200'
            }`
          }
        >
          {slide.label}
        </NavLink>
      ))}
      
      <div className="mt-8 pt-4 border-t border-gray-300 flex justify-between">
        {prevSlide ? (
          <NavLink to={prevSlide.path} className="text-blue-600 hover:underline">
            ← Previous
          </NavLink>
        ) : (
          <span className="text-gray-400">← Previous</span>
        )}
        
        {nextSlide ? (
          <NavLink to={nextSlide.path} className="text-blue-600 hover:underline">
            Next →
          </NavLink>
        ) : (
          <span className="text-gray-400">Next →</span>
        )}
      </div>
    </div>
  )
}
