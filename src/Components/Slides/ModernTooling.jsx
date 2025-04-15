import React from 'react'
import { CodeDemo } from '../CodeDemo/CodeDemo';

export default function ModernTooling() {
  const packageJsonCode = `{
  "name": "modern-web-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0"
  },
  "devDependencies": {
    "vite": "^4.4.9",
    "eslint": "^8.49.0",
    "jest": "^29.6.4",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.2.2"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "jest",
    "lint": "eslint src"
  }
}`;

  return (
    <div className="space-y-6 slide-in">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Modern Tooling</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Development Environment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-2 rounded-md">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Build Tools</h3>
            </div>
            <p className="text-gray-600 text-sm">Vite, Webpack, and Rollup for efficient bundling and hot module replacement.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-red-100 p-2 rounded-md">
                <span className="text-xl">🧪</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Testing Frameworks</h3>
            </div>
            <p className="text-gray-600 text-sm">Jest, Vitest, React Testing Library, and Cypress for comprehensive testing.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-2 rounded-md">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Code Quality</h3>
            </div>
            <p className="text-gray-600 text-sm">ESLint, Prettier, TypeScript, and Husky for maintaining high code standards.</p>
          </div>
        </div>
        
        <CodeDemo 
          title="Example package.json" 
          code={packageJsonCode} 
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Continuous Integration & Deployment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">CI/CD Pipeline Essentials</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Automated Testing:</strong> Running tests on each commit or pull request</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Code Quality Checks:</strong> Linting, type checking, and other automated reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Deployment Automation:</strong> Streamlined release process to staging and production</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Environment Management:</strong> Consistent configurations across environments</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Popular CI/CD Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>GitHub Actions:</strong> Integrated workflows within GitHub repositories</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Jenkins:</strong> Versatile automation server for custom pipelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>CircleCI/Travis CI:</strong> Cloud-based CI services with easy setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Vercel/Netlify:</strong> Specialized for frontend deployment with preview environments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Developer Productivity Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-purple-100 p-2 rounded-md">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">IDE & Extensions</h3>
            </div>
            <p className="text-gray-600 text-sm">VS Code with specialized extensions for JavaScript, React, and full-stack development.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-100 p-2 rounded-md">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Version Control</h3>
            </div>
            <p className="text-gray-600 text-sm">Git, GitHub/GitLab, and advanced branching strategies like GitFlow or Trunk-based development.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-2 rounded-md">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Monitoring & Analytics</h3>
            </div>
            <p className="text-gray-600 text-sm">Error tracking, performance monitoring, and user analytics tools like Sentry and Google Analytics.</p>
          </div>
        </div>
        
        <h3 className="font-medium text-gray-800 mb-3">Development Workflow Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">Code Review Process</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Automated checks before human review</li>
              <li>Clear acceptance criteria</li>
              <li>Focused, small pull requests</li>
              <li>Constructive feedback culture</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">Documentation</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Self-documenting code principles</li>
              <li>API documentation with Swagger/OpenAPI</li>
              <li>Component documentation (Storybook)</li>
              <li>Project wikis and decision records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}