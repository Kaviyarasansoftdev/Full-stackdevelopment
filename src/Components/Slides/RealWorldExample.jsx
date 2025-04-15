// import React from 'react'
// import { CodeDemo } from '../CodeDemo/CodeDemo';

// export default function RealWorldExample() {
//   const folderStructureCode = `project-root/
// ├── .github/
// │   └── workflows/          # CI/CD pipeline configurations
// ├── public/                 # Static assets
// ├── src/
// │   ├── assets/             # Images, fonts, etc.
// │   ├── components/         # Reusable UI components
// │   │   ├── common/         # Generic components (Button, Card, etc.)
// │   │   ├── features/       # Feature-specific components
// │   │   └── layout/         # Layout components (Header, Footer, etc.)
// │   ├── hooks/              # Custom React hooks
// │   ├── pages/              # Page components
// │   ├── services/           # API services
// │   ├── store/              # State management
// │   ├── types/              # TypeScript type definitions
// │   ├── utils/              # Helper functions
// │   ├── App.tsx             # Root component
// │   └── main.tsx            # Entry point
// ├── .eslintrc.js            # ESLint configuration
// ├── .gitignore              # Git ignore file
// ├── package.json            # Dependencies and scripts
// ├── README.md               # Project documentation
// ├── tailwind.config.js      # Tailwind CSS configuration
// ├── tsconfig.json           # TypeScript configuration
// └── vite.config.js          # Vite configuration`;

//   const apiServiceCode = `// src/services/api.ts
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

// const apiClient = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor for adding auth token
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = \`Bearer \${token}\`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor for error handling
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle 401 Unauthorized responses
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;`;

//   return (
//     <div className="space-y-6 slide-in">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Real-World Example</h1>
      
//       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">E-Commerce Application Architecture</h2>
        
//         <p className="text-gray-700 mb-6">
//           Let's examine how modern web development concepts come together in a real-world e-commerce application. This example demonstrates proper architecture, code organization, and integration of various technologies.
//         </p>
        
//         <div className="mb-6">
//           <h3 className="font-medium text-gray-800 mb-3">Folder Structure</h3>
//           <CodeDemo 
//             title="Project Organization" 
//             code={folderStructureCode} 
//           />
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">Frontend Architecture</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>React + TypeScript:</strong> Type-safe component development</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Redux Toolkit:</strong> State management with slice pattern</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>React Router:</strong> Declarative routing and navigation</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>React Query:</strong> Data fetching, caching, and synchronization</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">Backend Integration</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>RESTful API:</strong> Product, cart, user, and order endpoints</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Auth Flow:</strong> JWT-based authentication and authorization</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Payment Processing:</strong> Integration with Stripe or PayPal</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Real-time Updates:</strong> WebSockets for inventory and order status</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Implementation Features</h2>
        
//         <div className="mb-6">
//           <h3 className="font-medium text-gray-800 mb-3">API Service Layer</h3>
//           <CodeDemo 
//             title="API Client with Interceptors" 
//             code={apiServiceCode} 
//           />
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">Performance Optimizations</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Code Splitting:</strong> Route-based and component-based splitting</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Image Optimization:</strong> Lazy loading and responsive images</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Memoization:</strong> Strategic use of React.memo and useMemo</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Service Worker:</strong> Offline support and caching strategies</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">User Experience Features</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Form Handling:</strong> React Hook Form with Zod validation</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Error Boundaries:</strong> Graceful error handling throughout the app</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Loading States:</strong> Skeleton screens and optimistic UI updates</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span><strong>Accessibility:</strong> ARIA attributes and keyboard navigation</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deployment & DevOps</h2>
        
//         <div className="overflow-hidden mb-6">
//           <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
//             <div className="bg-blue-50 p-4 md:w-1/3">
//               <h3 className="font-medium text-blue-800">Development</h3>
//               <p className="text-sm text-gray-600 mt-2">Local environment with hot reloading</p>
//             </div>
//             <div className="bg-yellow-50 p-4 md:w-1/3">
//               <h3 className="font-medium text-yellow-800">Staging</h3>
//               <p className="text-sm text-gray-600 mt-2">Preview deployment for testing</p>
//             </div>
//             <div className="bg-green-50 p-4 md:w-1/3">
//               <h3 className="font-medium text-green-800">Production</h3>
//               <p className="text-sm text-gray-600 mt-2">Optimized build with CDN distribution</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">Infrastructure as Code</h3>
//             <ul className="space-y-1 text-gray-700 text-sm">
//               <li>AWS CloudFormation or Terraform templates</li>
//               <li>Docker containers for consistent environments</li>
//               <li>Kubernetes for orchestration (larger apps)</li>
//               <li>CI/CD pipelines with automated testing</li>
//             </ul>
//           </div>
          
//           <div className="border border-gray-200 rounded-lg p-4">
//             <h3 className="font-medium text-gray-800 mb-3">Monitoring & Analytics</h3>
//             <ul className="space-y-1 text-gray-700 text-sm">
//               <li>Error tracking with Sentry</li>
//               <li>Performance monitoring with Lighthouse CI</li>
//               <li>User analytics with Google Analytics</li>
//               <li>A/B testing framework for feature optimization</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';

export default function InstagramFullStackExample() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-xl max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 rounded-xl">
            <div className="bg-white p-1 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Ig
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold ml-4">Instagram: The Full-Stack Story</h1>
        </div>
        
        <p className="text-gray-700 mb-4">
          Ever wondered how Instagram works behind those filters and likes? Let's break down this popular app as a full-stack development example in a way that's fun and relatable!
        </p>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-pink-500 text-white p-2 rounded-full">
              👩‍💻
            </div>
            <h2 className="text-2xl font-semibold ml-2">The Frontend</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Think of Instagram's frontend as everything you see and touch. It's like the app's face!
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-2">What You See:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">📱</div>
                <div>
                  <p className="font-medium">Feed & Stories</p>
                  <p className="text-sm text-gray-600">React components for scrollable content</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-2">💬</div>
                <div>
                  <p className="font-medium">Comments & DMs</p>
                  <p className="text-sm text-gray-600">Interactive UI elements with state management</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-2">📸</div>
                <div>
                  <p className="font-medium">Camera & Filters</p>
                  <p className="text-sm text-gray-600">Device APIs and image processing libraries</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="font-medium mb-2">Just Like...</p>
            <p className="text-gray-700">
              The front-end is like the barista at your favorite coffee shop - it's what you interact with directly. They take your order, smile, and make you feel welcome!
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              🖥️
            </div>
            <h2 className="text-2xl font-semibold ml-2">The Backend</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Instagram's backend is the invisible magic that makes everything work. It's like the app's brain!
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-2">What You Don't See:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-2">🔐</div>
                <div>
                  <p className="font-medium">User Authentication</p>
                  <p className="text-sm text-gray-600">Keeps your account secure</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-2">💾</div>
                <div>
                  <p className="font-medium">Database</p>
                  <p className="text-sm text-gray-600">Stores all posts, users, and likes</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-full mr-2">🧠</div>
                <div>
                  <p className="font-medium">Algorithms</p>
                  <p className="text-sm text-gray-600">Decides what appears in your feed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="font-medium mb-2">Just Like...</p>
            <p className="text-gray-700">
              The backend is like the kitchen and staff behind the counter at the coffee shop - you don't see them, but they're making your order exactly how you like it!
            </p>
          </div>
        </div>
      </div>

      {/* Middle section - how it works */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">How It All Works Together</h2>
        
        <div className="mb-6">
          <h3 className="font-medium text-lg mb-3">When You Post a Photo:</h3>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-pink-200 rounded"></div>
            
            {/* Steps */}
            <div className="space-y-6 pl-12 relative">
              <div className="relative">
                <div className="absolute -left-12 bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium">You Take a Photo</h4>
                  <p className="text-gray-700">Frontend accesses your camera and lets you select filters</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium">You Hit "Share"</h4>
                  <p className="text-gray-700">Frontend sends the image, caption, and location to the backend API</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium">Backend Processing</h4>
                  <p className="text-gray-700">
                    - Image is optimized and stored<br />
                    - Database saves post details<br />
                    - Content is analyzed for safety
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">4</div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium">Your Friends See It</h4>
                  <p className="text-gray-700">
                    - Backend sends notifications<br />
                    - Friends' apps show your new post<br />
                    - Like counts start updating in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-pink-500 text-white p-2 rounded-full">
              🎨
            </div>
            <h2 className="text-xl font-semibold ml-2">Frontend Tech</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-2 text-blue-600 text-xl">⚛️</div>
              <p className="font-medium">React Native</p>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 p-1 rounded-full mr-2 text-purple-600 text-xl">🔄</div>
              <p className="font-medium">Redux</p>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-2 text-green-600 text-xl">🚀</div>
              <p className="font-medium">GraphQL</p>
            </div>
          </div>
          
          <div className="mt-4 text-gray-700 text-sm">
            Just like the Instagram app on your phone that you use to view and post content.
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              🔧
            </div>
            <h2 className="text-xl font-semibold ml-2">Backend Tech</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-2 text-green-600 text-xl">🐍</div>
              <p className="font-medium">Python & Django</p>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-100 p-1 rounded-full mr-2 text-yellow-600 text-xl">🔥</div>
              <p className="font-medium">Node.js</p>
            </div>
            <div className="flex items-center">
              <div className="bg-red-100 p-1 rounded-full mr-2 text-red-600 text-xl">📦</div>
              <p className="font-medium">PostgreSQL</p>
            </div>
          </div>
          
          <div className="mt-4 text-gray-700 text-sm">
            Like Instagram's servers that process all your data and handle posting.
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 text-white p-2 rounded-full">
              🌐
            </div>
            <h2 className="text-xl font-semibold ml-2">Cloud Services</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-2 text-blue-600 text-xl">🗄️</div>
              <p className="font-medium">AWS S3</p>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 p-1 rounded-full mr-2 text-purple-600 text-xl">🌧️</div>
              <p className="font-medium">CDNs</p>
            </div>
            <div className="flex items-center">
              <div className="bg-orange-100 p-1 rounded-full mr-2 text-orange-600 text-xl">🔄</div>
              <p className="font-medium">Load Balancers</p>
            </div>
          </div>
          
          <div className="mt-4 text-gray-700 text-sm">
            Like Instagram's network that delivers your content quickly worldwide.
          </div>
        </div>
      </div>

      {/* Real-world challenges */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Real-World Challenges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-orange-500 text-white p-2 rounded-full">🔥</div>
              <h3 className="font-medium ml-2">Scaling to Billions</h3>
            </div>
            <p className="text-gray-700">
              Instagram has over 1 billion users! That's like trying to serve coffee to everyone in India at the same time. Their servers must handle millions of new photos every day without slowing down.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full">🔒</div>
              <h3 className="font-medium ml-2">Security & Privacy</h3>
            </div>
            <p className="text-gray-700">
              Instagram must keep all your data safe while allowing you to share with friends. It's like having a diary that only certain people can read pages from.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white p-2 rounded-full">📱</div>
              <h3 className="font-medium ml-2">Multiple Platforms</h3>
            </div>
            <p className="text-gray-700">
              Instagram works on iPhones, Android phones, and web browsers. Imagine designing a car that can drive on roads, water, and in the air!
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white p-2 rounded-full">🌐</div>
              <h3 className="font-medium ml-2">Global Reach</h3>
            </div>
            <p className="text-gray-700">
              Instagram delivers content worldwide in seconds. It's like sending a letter that arrives instantly anywhere on Earth.
            </p>
          </div>
        </div>
      </div>

      {/* Fun facts */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
        <h2 className="text-2xl font-semibold mb-4">Fun Facts About Instagram</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="bg-white text-pink-500 p-1 rounded-full">💡</div>
              <p className="font-medium text-black ml-2">Instagram was built in just 8 weeks by a team of 13 engineers</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="bg-white text-pink-500 p-1 rounded-full">💡</div>
              <p className="font-medium text-black ml-2">Instagram handles over 95 million photos and videos shared every day</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="bg-white text-pink-500 p-1 rounded-full">💡</div>
              <p className="font-medium  text-black ml-2">Instagram was acquired by Facebook for $1 billion in 2012</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="bg-white text-pink-500 p-1 rounded-full">💡</div>
              <p className="font-medium text-black ml-2">Instagram's original name was "Burbn" and focused on check-ins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}