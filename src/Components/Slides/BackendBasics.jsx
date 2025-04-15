
import React, { useState, useEffect } from 'react';

export default function BackendBasicsForStudents() {
  const nodeExpressCode = `// Simple Express Server Example
const express = require('express');
const app = express();
const PORT = 5000;

// This helps our server understand JSON data
app.use(express.json());

// This creates a route to get user data
app.get('/api/users', (req, res) => {
  // In a real app, we would fetch from a database
  res.json({ users: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]});
});

// This starts our server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`;

  // State for API example
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [selectedEndpoint, setSelectedEndpoint] = useState('users');
  
  // Simulate API call
  const fetchData = () => {
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      if (selectedEndpoint === 'users') {
        setApiData({
          users: [
            { id: 1, name: "Alex Johnson", role: "Student" },
            { id: 2, name: "Taylor Smith", role: "Teacher" },
            { id: 3, name: "Jordan Lee", role: "Admin" }
          ]
        });
      } else if (selectedEndpoint === 'posts') {
        setApiData({
          posts: [
            { id: 101, title: "Introduction to APIs", author: "Alex" },
            { id: 102, title: "Backend Architecture", author: "Taylor" },
            { id: 103, title: "Database Design", author: "Jordan" }
          ]
        });
      } else if (selectedEndpoint === 'comments') {
        setApiData({
          comments: [
            { id: 201, text: "Great explanation!", postId: 101 },
            { id: 202, text: "This helped me understand APIs", postId: 101 },
            { id: 203, text: "Looking forward to more tutorials", postId: 102 }
          ]
        });
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Backend Development Basics for College Students</h1>

      {/* Introduction Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-3">🖥️</span>
          What is Backend Development?
        </h2>
        <p className="mb-4 text-gray-700">
          Backend development is like building the "brain" of websites and apps. It's the part users don't see, but it handles all the important work: storing data, processing information, and making everything function!
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">Why Study Backend? 🚀</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Make websites that can store and process information</li>
            <li>Create APIs that connect to mobile apps</li>
            <li>Great job opportunities with good pay</li>
            <li>Perfect for people who like solving problems</li>
          </ul>
        </div>
      </div>

      {/* Restaurant Analogy */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-yellow-100 p-2 rounded-full mr-3">🍽️</span>
          Backend Explained: The Restaurant Analogy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-700 mb-2">Frontend = Dining Area</h3>
            <p className="text-gray-700">
              What customers see and interact with - tables, menus, and the dining experience.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">Backend = Kitchen</h3>
            <p className="text-gray-700">
              Where the real work happens - cooking food, managing inventory, and coordinating orders.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-center text-gray-700">
            Just like a restaurant needs both a dining area and a kitchen to function, websites need both frontend and backend to work properly!
          </p>
        </div>
      </div>

      {/* Core Backend Technologies */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">🛠️</span>
          Core Backend Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700">Node.js</h3>
            <p className="mt-2 text-gray-700">
              Lets you use JavaScript for server-side code. Great for beginners who already know JavaScript from frontend!
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700">Python</h3>
            <p className="mt-2 text-gray-700">
              Easy to learn language that's popular for web backends (Django, Flask), data analysis, and AI/machine learning.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-red-700">Java</h3>
            <p className="mt-2 text-gray-700">
              Powerful language for large applications. Used by many big companies for secure, stable backends.
            </p>
          </div>
        </div>
      </div>

      {/* All Backend Technologies */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-purple-100 p-2 rounded-full mr-3">🔍</span>
          Backend Technology Overview
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">JavaScript (Node.js)</h4>
              <p className="text-sm">Great for beginners who already know JavaScript</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">Python</h4>
              <p className="text-sm">Easy to learn, readable syntax, powerful libraries</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">Java</h4>
              <p className="text-sm">Enterprise-grade, stable, secure backend language</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">PHP</h4>
              <p className="text-sm">Powers WordPress and many websites, easy to deploy</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">C#/.NET</h4>
              <p className="text-sm">Microsoft's ecosystem, good for Windows environments</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">Ruby</h4>
              <p className="text-sm">Developer-friendly with Rails framework</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">Go</h4>
              <p className="text-sm">Fast, efficient, good for high-performance services</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">TypeScript</h4>
              <p className="text-sm">JavaScript with type safety, catching errors early</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Frameworks & Libraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">Express.js (Node)</h4>
              <p className="text-sm">Lightweight Node.js framework for web servers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">Django (Python)</h4>
              <p className="text-sm">Full-featured framework with admin panel</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold">Spring Boot (Java)</h4>
              <p className="text-sm">Powerful Java framework with many features</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold">Flask (Python)</h4>
              <p className="text-sm">Lightweight Python framework, easy to start with</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold">Laravel (PHP)</h4>
              <p className="text-sm">Modern PHP framework with elegant syntax</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-bold">Ruby on Rails</h4>
              <p className="text-sm">"Convention over configuration" rapid development</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Databases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">SQL Databases</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>MySQL - Popular open source database</li>
                <li>PostgreSQL - Advanced features, reliable</li>
                <li>SQLite - Simple file-based database</li>
                <li>SQL Server - Microsoft's enterprise database</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">NoSQL Databases</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>MongoDB - Document database, flexible schema</li>
                <li>Redis - In-memory data store, very fast</li>
                <li>Cassandra - Distributed database for large scale</li>
                <li>Firebase - Real-time database by Google</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Backend Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">API Tools</h4>
              <p className="text-sm">Postman, Swagger, GraphQL</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">DevOps</h4>
              <p className="text-sm">Docker, Kubernetes, Jenkins</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">Monitoring</h4>
              <p className="text-sm">New Relic, Prometheus, Grafana</p>
            </div>
          </div>
        </div>
      </div>

      {/* APIs Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-purple-100 p-2 rounded-full mr-3">🔌</span>
          APIs: How Apps Talk to Each Other
        </h2>
        <p className="text-gray-700 mb-6">
          An API (Application Programming Interface) is like a waiter in a restaurant - it takes requests from the frontend and brings back data from the backend. APIs are how different parts of applications communicate!
        </p>
        <div className="border border-purple-200 rounded-lg shadow-sm p-4">
          <h3 className="font-bold mb-2">Simple Node.js/Express API Example:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{nodeExpressCode}</pre>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">API Methods (Like Verbs)</h3>
            <ul className="space-y-1 text-gray-700">
              <li><strong>GET</strong> - Fetch information (like reading)</li>
              <li><strong>POST</strong> - Create new data (like writing)</li>
              <li><strong>PUT/PATCH</strong> - Update existing data (like editing)</li>
              <li><strong>DELETE</strong> - Remove data (like erasing)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">Status Codes</h3>
            <ul className="space-y-1 text-gray-700">
              <li><strong>200</strong> - Success! Everything worked</li>
              <li><strong>404</strong> - Not found (missing page/data)</li>
              <li><strong>500</strong> - Server error (something broke)</li>
              <li><strong>401/403</strong> - Not allowed to access</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEW SECTION: API Explanation and Live Example */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-red-100 p-2 rounded-full mr-3">🔄</span>
          APIs in Action: Interactive Example
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-red-700 mb-3">How APIs Work in Real Life</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700">
              When you use apps like Instagram, Twitter, or even school portals, you're actually interacting with APIs! Each time you refresh your feed, check grades, or search for something, your app is making API calls to fetch that data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">1. Request</h4>
              <p className="text-sm">Your app sends a request to an API endpoint (like asking a specific question to a server)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">2. Processing</h4>
              <p className="text-sm">The server processes your request (looks up data, performs calculations)</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold">3. Response</h4>
              <p className="text-sm">The server sends back data (usually as JSON) that your app can use</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">API Formats</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium">REST APIs</h5>
                <p className="text-sm">Most common format, uses standard HTTP methods and URLs</p>
              </div>
              <div>
                <h5 className="font-medium">GraphQL</h5>
                <p className="text-sm">Newer format that lets clients request exactly what they need</p>
              </div>
              <div>
                <h5 className="font-medium">SOAP</h5>
                <p className="text-sm">Older, more rigid format used in enterprise applications</p>
              </div>
              <div>
                <h5 className="font-medium">WebSockets</h5>
                <p className="text-sm">Real-time two-way communication (like for chat apps)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive API Demo */}
        <div className="border border-red-200 rounded-lg shadow-sm p-6 bg-white">
          <h3 className="font-bold text-xl mb-4 text-red-700">Try a Live API Demo!</h3>
          
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              Below is a simulated API that acts just like a real one. Select an endpoint and click "Fetch Data" to see different responses:
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              <button 
                onClick={() => setSelectedEndpoint('users')}
                className={`px-3 py-2 rounded-md ${selectedEndpoint === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                GET /api/users
              </button>
              <button 
                onClick={() => setSelectedEndpoint('posts')}
                className={`px-3 py-2 rounded-md ${selectedEndpoint === 'posts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                GET /api/posts
              </button>
              <button 
                onClick={() => setSelectedEndpoint('comments')}
                className={`px-3 py-2 rounded-md ${selectedEndpoint === 'comments' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                GET /api/comments
              </button>
            </div>
            
            <div className="mb-4">
              <button 
                onClick={fetchData}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Fetch Data'}
              </button>
            </div>
            
            <div className="bg-black text-green-400 p-4 rounded-md font-mono text-sm overflow-auto">
              <div className="mb-2 text-gray-400">// API Response:</div>
              {loading ? (
                <div>Fetching data from server...</div>
              ) : (
                apiData ? (
                  <pre>{JSON.stringify(apiData, null, 2)}</pre>
                ) : (
                  <div>// Click "Fetch Data" to see the response</div>
                )
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">What's Happening Behind the Scenes:</h4>
            <ol className="list-decimal ml-5 space-y-1 text-gray-700">
              <li>Your click triggers a request to the <strong>{`/api/${selectedEndpoint}`}</strong> endpoint</li>
              <li>The server processes the request and finds the requested data</li>
              <li>The data is formatted as JSON and returned to your browser</li>
              <li>JavaScript code reads the JSON and displays it on the screen</li>
            </ol>
            <p className="mt-3 text-sm text-gray-600">
              This is exactly how real web and mobile apps work with their backends!
            </p>
          </div>
        </div>
      </div>

      {/* Backend Architecture */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-yellow-100 p-2 rounded-full mr-3">🏗️</span>
          How Backends Are Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-700 mb-2">Monolithic Architecture</h3>
            <p className="text-gray-700 mb-2">
              One big application that handles everything - like a superstore with all departments in one building.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Easier to build</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Simple to deploy</span>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Harder to scale</span>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Microservices Architecture</h3>
            <p className="text-gray-700 mb-2">
              Many small services that each do one thing - like a shopping mall with specialized stores.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Easy to scale</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Teams work independently</span>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">More complex</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Concepts */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">🧠</span>
          Important Backend Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">1</div>
            <div>
              <h3 className="font-medium">Authentication</h3>
              <p className="text-sm text-gray-600">Verifying who users are (login/passwords)</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">2</div>
            <div>
              <h3 className="font-medium">Authorization</h3>
              <p className="text-sm text-gray-600">Controlling what users can access</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">3</div>
            <div>
              <h3 className="font-medium">Database Management</h3>
              <p className="text-sm text-gray-600">Storing and retrieving data efficiently</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">4</div>
            <div>
              <h3 className="font-medium">Security</h3>
              <p className="text-sm text-gray-600">Protecting against hackers and data breaches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-3">📚</span>
          How to Learn Backend Development
        </h2>
        <div className="space-y-4">
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">1</div>
            <div>
              <h3 className="font-medium">Pick a Language</h3>
              <p className="text-sm text-gray-600">Start with Node.js if you know JavaScript, or Python for beginners</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">2</div>
            <div>
              <h3 className="font-medium">Learn a Framework</h3>
              <p className="text-sm text-gray-600">Express for Node.js, Flask/Django for Python</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">3</div>
            <div>
              <h3 className="font-medium">Database Basics</h3>
              <p className="text-sm text-gray-600">Learn SQL and try MongoDB for NoSQL</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">4</div>
            <div>
              <h3 className="font-medium">Build Simple Projects</h3>
              <p className="text-sm text-gray-600">Create a to-do API, blog backend, or simple user system</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">5</div>
            <div>
              <h3 className="font-medium">Learn Authentication</h3>
              <p className="text-sm text-gray-600">Implement login systems with JWT or OAuth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}