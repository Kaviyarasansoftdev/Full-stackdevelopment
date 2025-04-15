import React from 'react'

export default function CareerPaths() {
  return (
    <div className="space-y-6 slide-in">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Paths in Web Development</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialization Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-2 rounded-md">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Frontend Specialist</h3>
            </div>
            <p className="text-gray-600 text-sm">Focus on UI/UX implementation, component systems, and browser performance optimization.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> React/Vue/Angular, CSS/Tailwind, Accessibility, Animation
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-2 rounded-md">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Backend Engineer</h3>
            </div>
            <p className="text-gray-600 text-sm">Build APIs, services, and data pipelines that power applications.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> Node.js/Python/Java, Databases, API Design, Security
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-purple-100 p-2 rounded-md">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Full Stack Developer</h3>
            </div>
            <p className="text-gray-600 text-sm">Versatile engineers who work across the entire application stack.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> JavaScript/TypeScript, Multiple Frameworks, DevOps basics
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-red-100 p-2 rounded-md">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">DevOps Engineer</h3>
            </div>
            <p className="text-gray-600 text-sm">Automate infrastructure, deployment, and monitoring processes.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> CI/CD, Cloud Services, Containers, Infrastructure as Code
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-100 p-2 rounded-md">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Mobile Developer</h3>
            </div>
            <p className="text-gray-600 text-sm">Create native or hybrid mobile experiences for iOS and Android.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> React Native/Flutter, Swift/Kotlin, Mobile UX patterns
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-indigo-100 p-2 rounded-md">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Security Engineer</h3>
            </div>
            <p className="text-gray-600 text-sm">Protect applications from vulnerabilities and implement security best practices.</p>
            <div className="mt-3 text-sm text-gray-500">
              <strong>Key Skills:</strong> Authentication, Penetration Testing, Compliance, Encryption
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Progression</h2>
        
        <div className="overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-4 md:w-1/5">
              <h3 className="font-medium text-blue-800">Junior Developer</h3>
              <p className="text-sm text-gray-600 mt-2">0-2 years experience</p>
            </div>
            <div className="bg-blue-100 p-4 md:w-1/5">
              <h3 className="font-medium text-blue-800">Mid-level</h3>
              <p className="text-sm text-gray-600 mt-2">2-5 years experience</p>
            </div>
            <div className="bg-blue-200 p-4 md:w-1/5">
              <h3 className="font-medium text-blue-800">Senior</h3>
              <p className="text-sm text-gray-600 mt-2">5+ years experience</p>
            </div>
            <div className="bg-blue-300 p-4 md:w-1/5">
              <h3 className="font-medium text-blue-800">Tech Lead</h3>
              <p className="text-sm text-gray-600 mt-2">Technical leadership</p>
            </div>
            <div className="bg-blue-400 p-4 md:w-1/5">
              <h3 className="font-medium text-white">Architect</h3>
              <p className="text-sm text-blue-100 mt-2">System design focus</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Technical Path</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Specialist Contributor:</strong> Deepening expertise in specific technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>System Architect:</strong> Designing large-scale software systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Distinguished Engineer:</strong> Solving complex technical challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Technical Fellow:</strong> Influencing industry-wide technical direction</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Management Path</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Team Lead:</strong> Managing a small team while still coding</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Engineering Manager:</strong> Leading larger teams with focus on people development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Director of Engineering:</strong> Overseeing multiple teams and projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>CTO/VP of Engineering:</strong> Executive-level technical leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Trends & Future Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Emerging Technology Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>AI/ML Integration:</strong> Using AI services and models within applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Web3 & Blockchain:</strong> Decentralized applications and smart contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Edge Computing:</strong> Running code closer to users for performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>AR/VR Web Experiences:</strong> WebXR and immersive interfaces</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">In-Demand Non-Technical Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Product Thinking:</strong> Understanding business value and user needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Cross-functional Collaboration:</strong> Working effectively with design, product, and business teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Technical Communication:</strong> Explaining complex concepts clearly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Mentorship & Knowledge Sharing:</strong> Elevating team capabilities</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-800 mb-3">Building a Portfolio & Personal Brand</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h4 className="font-medium text-gray-800 mb-2">Open Source Contributions</h4>
              <p className="text-gray-600 text-sm">Contributing to public projects demonstrates real-world collaboration skills and code quality.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h4 className="font-medium text-gray-800 mb-2">Side Projects & Case Studies</h4>
              <p className="text-gray-600 text-sm">Personal projects showcase initiative, problem-solving abilities, and technical depth.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h4 className="font-medium text-gray-800 mb-2">Technical Content Creation</h4>
              <p className="text-gray-600 text-sm">Articles, talks, and tutorials establish expertise and improve communication skills.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resources for Continuous Learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Learning Platforms</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Frontend Masters - In-depth workshops from industry experts</li>
              <li>Pluralsight - Comprehensive technology skill development</li>
              <li>Codecademy - Interactive coding lessons</li>
              <li>freeCodeCamp - Free, project-based curriculum</li>
              <li>LeetCode - Technical interview preparation</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Community Engagement</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Tech conferences (in-person and virtual)</li>
              <li>Local meetup groups and workshops</li>
              <li>Online communities (Discord, Reddit, Stack Overflow)</li>
              <li>Hackathons and coding competitions</li>
              <li>Tech podcasts and newsletters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}