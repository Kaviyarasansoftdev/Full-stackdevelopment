import React from 'react'

export default function WebDevelopment() {
  // Course modules
  const modules = [
    {
      title: "HTML & CSS Fundamentals",
      lessons: [
        "HTML Document Structure",
        "Semantic HTML Elements",
        "CSS Selectors and Properties",
        "Responsive Design with Media Queries",
        "Flexbox and Grid Layouts"
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: [
        "JavaScript Syntax and Data Types",
        "DOM Manipulation",
        "Event Handling",
        "Asynchronous JavaScript (Promises, Async/Await)",
        "ES6+ Features"
      ]
    },
    {
      title: "React Framework",
      lessons: [
        "Components and Props",
        "State Management",
        "Hooks System",
        "Routing with React Router",
        "Context API and Redux"
      ]
    },
    {
      title: "Modern Frontend Tools",
      lessons: [
        "NPM and Package Management",
        "Webpack and Vite",
        "CSS-in-JS Solutions",
        "TypeScript Integration",
        "Testing with Jest and React Testing Library"
      ]
    }
  ]

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Web Development</h1>
        <p className="text-lg text-slate-600 mb-6">
          Master modern frontend technologies to build responsive, interactive web applications.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CSS3</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Angular</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tailwind CSS</span>
        </div>
      </div>

      {/* Course overview */}
      <section className="mb-12 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
        <p className="mb-4">
          This comprehensive web development course will take you from the basics of HTML and CSS to building complex single-page applications with modern JavaScript frameworks.
        </p>
        <p className="mb-4">
          You'll learn through a combination of theory, practical examples, and project-based assignments that simulate real-world development scenarios.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">What You'll Learn</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Build responsive layouts with HTML5 and CSS3
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Write clean, maintainable JavaScript code
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Create interactive UIs with React components
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Implement state management solutions
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Use modern build tools and optimizations
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Basic computer skills and familiarity with using a code editor
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Understanding of basic programming concepts (variables, functions, etc.)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                No prior HTML, CSS, or JavaScript knowledge required
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course modules */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
              <ul className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {lessonIndex + 1}
                    </div>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sample code */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sample React Component</h2>
        <div className="bg-slate-800 rounded-xl p-6 text-slate-300 overflow-x-auto">
          <pre>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>React Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`}
          </pre>
        </div>
      </section>

      {/* Final project */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Final Project</h2>
        <p className="mb-6 text-lg">
          Build a fully responsive e-commerce website with product listings, shopping cart functionality, user authentication, and checkout process using React and a backend API.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Implement user registration and authentication
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Create dynamic product listings with filtering and search
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Develop shopping cart with state management
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Build checkout process with form validation
          </li>
        </ul>
        <button className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
          View Project Details
        </button>
      </section>
    </div>
  )
}