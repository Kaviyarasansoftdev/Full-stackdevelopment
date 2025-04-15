import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Smartphone, Server, Database, BookOpen } from 'lucide-react'

export default function Home() {
  // Learning paths data
  const learningPaths = [
    {
      title: "Web Development",
      icon: <Code size={24} />,
      description: "Learn modern frontend frameworks like React, Vue, and Angular with responsive design principles.",
      path: "/web-development",
      color: "bg-blue-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      description: "Build cross-platform mobile apps with React Native, Flutter, and native iOS/Android development.",
      path: "/mobile-development",
      color: "bg-green-500"
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      description: "Master server-side programming with Node.js, Express, Django, and Ruby on Rails.",
      path: "/backend",
      color: "bg-purple-500"
    },
    {
      title: "Database Systems",
      icon: <Database size={24} />,
      description: "Learn SQL and NoSQL databases including MongoDB, PostgreSQL, and Firebase.",
      path: "/databases",
      color: "bg-yellow-500"
    },
    {
      title: "Development Tools",
      icon: <BookOpen size={24} />,
      description: "Get familiar with essential tools like Git, Docker, CI/CD pipelines, and testing frameworks.",
      path: "/dev-tools",
      color: "bg-pink-500"
    },
    {
      title: "Learning Resources",
      icon: <BookOpen size={24} />,
      description: "Curated list of books, articles, videos, and courses for continuous learning.",
      path: "/resources",
      color: "bg-teal-500"
    }
  ]

  return (
    <div>
      {/* Hero section */}
      <section className="py-12 mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Modern Full-Stack Development</h1>
          <p className="text-xl text-slate-600 mb-8">
            Interactive learning platform for aspiring developers to master web and mobile development technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/web-development" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Start Learning
            </Link>
            <Link to="/resources" className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => (
            <Link to={path.path} key={index} className="card hover:translate-y-[-4px]">
              <div className={`${path.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                {path.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-slate-600 mb-4">{path.description}</p>
              <span className="text-blue-600 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Learn With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-slate-600">
              Learn by doing with interactive code examples, live previews, and hands-on exercises.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project-Based</h3>
            <p className="text-slate-600">
              Build real-world projects that enhance your portfolio and demonstrate your skills to employers.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-slate-600">
              Focus on in-demand technologies that employers are looking for in today's development landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your developer journey?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of students who have successfully built their career in full-stack development.
        </p>
        <Link to="/web-development" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
          Get Started Today
        </Link>
      </section>
    </div>
  )
}
