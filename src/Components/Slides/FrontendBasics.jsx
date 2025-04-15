// import React from 'react'
// import { CodeDemo } from '../CodeDemo/CodeDemo';

// export default function FrontendBasics() {
//   const reactComponentCode = `import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div className="counter">
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>
//     </div>
//   );
// }`;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 slide-in">
//       <h1 className="text-4xl font-bold text-blue-600 mb-8">Frontend Development</h1>
      
//       {/* Modern Frontend Stack Section */}
//       <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
//         <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
//           <span className="bg-blue-100 p-2 rounded-full mr-3">🚀</span>
//           Modern Frontend Stack
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-100">
//             <div className="flex items-center mb-4">
//               <div className="bg-yellow-100 p-3 rounded-full">
//                 <span className="text-2xl">🔧</span>
//               </div>
//               <h3 className="ml-4 font-semibold text-gray-800">HTML5 & CSS3</h3>
//             </div>
//             <p className="text-gray-600">Semantic markup, CSS Grid, Flexbox, and modern selectors form the foundation.</p>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-100">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <span className="text-2xl">⚛️</span>
//               </div>
//               <h3 className="ml-4 font-semibold text-gray-800">JavaScript & React</h3>
//             </div>
//             <p className="text-gray-600">ES6+, component-based architecture, and virtual DOM for efficient rendering.</p>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-100">
//             <div className="flex items-center mb-4">
//               <div className="bg-purple-100 p-3 rounded-full">
//                 <span className="text-2xl">🎨</span>
//               </div>
//               <h3 className="ml-4 font-semibold text-gray-800">CSS Frameworks</h3>
//             </div>
//             <p className="text-gray-600">Tailwind CSS, Bootstrap 5, and utility-first approaches for rapid UI development.</p>
//           </div>
//         </div>
        
//         <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100">
//           <h3 className="font-semibold text-blue-700 mb-4 flex items-center">
//             <span className="bg-blue-100 p-1 rounded-md mr-2 text-blue-600">✦</span>
//             Key Frontend Concepts
//           </h3>
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-start">
//               <span className="text-blue-500 mr-3 text-lg">•</span>
//               <span><span className="font-medium text-blue-800">Component-Based Architecture:</span> Breaking UI into reusable, maintainable pieces</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-blue-500 mr-3 text-lg">•</span>
//               <span><span className="font-medium text-blue-800">State Management:</span> Using Context API, Redux, Zustand, or other solutions</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-blue-500 mr-3 text-lg">•</span>
//               <span><span className="font-medium text-blue-800">Responsive Design:</span> Making interfaces work across all device sizes</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-blue-500 mr-3 text-lg">•</span>
//               <span><span className="font-medium text-blue-800">Accessibility:</span> Ensuring applications are usable by everyone</span>
//             </li>
//           </ul>
//         </div>
//       </div>
      
//       {/* React Components Section */}
//       <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 border border-green-100">
//         <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
//           <span className="bg-green-100 p-2 rounded-full mr-3">⚛️</span>
//           React Components
//         </h2>
//         <p className="text-gray-700 mb-6 text-lg">React components are the building blocks of modern web interfaces. They combine HTML, CSS, and JavaScript into reusable UI elements.</p>
        
//         <div className="border border-green-200 rounded-xl overflow-hidden shadow-md">
//           <CodeDemo 
//             title="Simple React Counter Component" 
//             code={reactComponentCode} 
//           />
//         </div>
        
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <h3 className="font-semibold text-green-700 mb-4 flex items-center">
//               <span className="bg-green-100 p-1 rounded-md mr-2 text-green-600">✦</span>
//               Component Types
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span>Functional Components (with Hooks)</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span>Class Components (legacy)</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span>Higher-Order Components (HOCs)</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span>Render Props Components</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <h3 className="font-semibold text-green-700 mb-4 flex items-center">
//               <span className="bg-green-100 p-1 rounded-md mr-2 text-green-600">✦</span>
//               Common React Hooks
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span><span className="font-medium">useState</span> - Local component state</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span><span className="font-medium">useEffect</span> - Side effects and lifecycle</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span><span className="font-medium">useContext</span> - Context API access</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span><span className="font-medium">useReducer</span> - Complex state logic</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">▹</span>
//                 <span><span className="font-medium">useCallback/useMemo</span> - Performance optimization</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       {/* Modern Frontend Architecture Section */}
//       <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 border border-purple-100">
//         <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
//           <span className="bg-purple-100 p-2 rounded-full mr-3">🏗️</span>
//           Modern Frontend Architecture
//         </h2>
        
//         <div className="overflow-hidden mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
//             <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm transform transition hover:scale-105">
//               <h3 className="font-semibold text-blue-800 mb-2">UI Layer</h3>
//               <p className="text-gray-600">Components, styles, and user interaction</p>
//             </div>
//             <div className="bg-green-50 p-5 rounded-xl border border-green-100 shadow-sm transform transition hover:scale-105">
//               <h3 className="font-semibold text-green-800 mb-2">State Management</h3>
//               <p className="text-gray-600">Application data and UI state</p>
//             </div>
//             <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100 shadow-sm transform transition hover:scale-105">
//               <h3 className="font-semibold text-yellow-800 mb-2">API Integration</h3>
//               <p className="text-gray-600">Data fetching and server communication</p>
//             </div>
//             <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 shadow-sm transform transition hover:scale-105">
//               <h3 className="font-semibold text-purple-800 mb-2">Routing & Navigation</h3>
//               <p className="text-gray-600">Page structure and navigation flow</p>
//             </div>
//           </div>
//         </div>
        
//         <h3 className="font-semibold text-purple-700 mb-4 flex items-center">
//           <span className="bg-purple-100 p-1 rounded-md mr-2 text-purple-600">✦</span>
//           Frontend Best Practices
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <h4 className="font-semibold text-purple-700 mb-3 flex items-center">
//               <span className="bg-purple-100 p-1 rounded-full mr-2 text-purple-600">⚡</span>
//               Performance
//             </h4>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Code splitting and lazy loading</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Memoization and pure components</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Efficient DOM updates</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Asset optimization</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <h4 className="font-semibold text-purple-700 mb-3 flex items-center">
//               <span className="bg-purple-100 p-1 rounded-full mr-2 text-purple-600">🧪</span>
//               Testing
//             </h4>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Unit tests with React Testing Library</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Integration tests</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>End-to-end tests with Cypress</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-purple-500 mr-2">▹</span>
//                 <span>Visual regression testing</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';

export default function FrontendBasicsForStudents() {
  const reactComponentCode = `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Frontend Development Basics for College Students</h1>

      {/* Introduction Section - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-3">🌐</span>
          What is Frontend Development?
        </h2>
        <p className="mb-4 text-gray-700">
          Frontend Development is all about creating what users see and interact with on websites. It's like designing the "face" of a website that people use in their browsers!
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">Why Study Frontend? 🚀</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Create cool websites and apps</li>
            <li>Lots of job opportunities</li>
            <li>See your code come to life visually</li>
            <li>Great for creative people who like technology</li>
          </ul>
        </div>
      </div>

      {/* The Cake Analogy - Made Simpler */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-yellow-100 p-2 rounded-full mr-3">🍰</span>
          Frontend Explained: The Cake Analogy
        </h2>
        <div className="relative mx-auto w-64 h-80">
          {/* Icing - UI/UX */}
          <div className="absolute w-64 h-20 bg-pink-300 rounded-t-full flex items-center justify-center">
            <p className="font-bold text-center">UI/UX<br /><span className="text-xs">How it looks and feels</span></p>
          </div>
          {/* Sponge - HTML */}
          <div className="absolute top-20 w-64 h-16 bg-yellow-200 flex items-center justify-center">
            <p className="font-bold text-center">HTML<br /><span className="text-xs">The page structure</span></p>
          </div>
          {/* Cream - CSS */}
          <div className="absolute top-36 w-64 h-16 bg-blue-200 flex items-center justify-center">
            <p className="font-bold text-center">CSS<br /><span className="text-xs">Colors and style</span></p>
          </div>
          {/* Base - JavaScript */}
          <div className="absolute top-52 w-64 h-20 bg-brown-400 rounded-b-full flex items-center justify-center">
            <p className="font-bold text-white text-center">JAVASCRIPT<br /><span className="text-xs">Makes things work</span></p>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-center text-gray-700">
            Like baking a cake, we build websites in layers: HTML forms the structure, CSS makes it pretty, and JavaScript adds the interactive elements!
          </p>
        </div>
      </div>

      {/* Core Technologies - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">🛠️</span>
          Core Frontend Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700">HTML</h3>
            <p className="mt-2 text-gray-700">
              The structure of webpages, like the skeleton of a building. Uses tags to define elements like headings, paragraphs, images, and buttons.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700">CSS</h3>
            <p className="mt-2 text-gray-700">
              Adds style to webpages - colors, fonts, spacing, and layout. Makes websites look good on all devices.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-700">JavaScript</h3>
            <p className="mt-2 text-gray-700">
              Adds interactivity - makes buttons work, validates forms, animates elements, and updates content without refreshing the page.
            </p>
          </div>
        </div>
      </div>

      {/* NEW SECTION: All Frontend Technologies */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-purple-100 p-2 rounded-full mr-3">🔍</span>
          Frontend Technology Overview
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Foundational Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">HTML5</h4>
              <p className="text-sm">The latest version with semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">CSS3</h4>
              <p className="text-sm">Modern styling with animations, gradients, shadows, and responsive features</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">JavaScript (ES6+)</h4>
              <p className="text-sm">Modern JS with arrow functions, promises, and classes</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">TypeScript</h4>
              <p className="text-sm">JavaScript with added type safety to catch errors early</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">UI Libraries & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">React</h4>
              <p className="text-sm">Component-based library by Facebook. Very popular!</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">Angular</h4>
              <p className="text-sm">Complete framework by Google with built-in tools</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-bold">Vue</h4>
              <p className="text-sm">Progressive framework that's easy to learn</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold">Svelte</h4>
              <p className="text-sm">Compiles to efficient JavaScript at build time</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold">Next.js</h4>
              <p className="text-sm">React framework with server-side rendering</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-bold">Astro</h4>
              <p className="text-sm">Static site builder with minimal JavaScript</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">CSS Tools & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">Tailwind CSS</h4>
              <p className="text-sm">Utility-first CSS framework</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">Bootstrap</h4>
              <p className="text-sm">Popular framework with pre-built components</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold">Sass/SCSS</h4>
              <p className="text-sm">CSS with superpowers (variables, nesting)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">CSS Modules</h4>
              <p className="text-sm">Locally scoped CSS for components</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold">Styled Components</h4>
              <p className="text-sm">CSS-in-JS for React applications</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold">Bulma</h4>
              <p className="text-sm">Modern CSS framework based on Flexbox</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Essential Developer Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">Package Managers</h4>
              <p className="text-sm">npm, yarn, pnpm for installing libraries</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">Build Tools</h4>
              <p className="text-sm">Vite, Webpack, Parcel for bundling code</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">Version Control</h4>
              <p className="text-sm">Git, GitHub for tracking changes</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold">Browser DevTools</h4>
              <p className="text-sm">Chrome/Firefox tools for debugging</p>
            </div>
          </div>
        </div>
      </div>

      {/* React Components Section - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-purple-100 p-2 rounded-full mr-3">⚛️</span>
          React Basics
        </h2>
        <p className="text-gray-700 mb-6">
          React lets you build websites using reusable blocks called "components." Think of components like LEGO pieces that you can combine to create complex interfaces!
        </p>
        <div className="border border-purple-200 rounded-lg shadow-sm p-4">
          <h3 className="font-bold mb-2">Simple React Counter Example:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{reactComponentCode}</pre>
        </div>
        <div className="mt-6 bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-3">What This React Code Does:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">▹</span>
              <span>Creates a counter that can go up and down</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">▹</span>
              <span>Uses <code>useState</code> to remember the current count</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">▹</span>
              <span>Updates the display when buttons are clicked</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Frontend Architecture - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-3">🏗️</span>
          How Websites Are Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">User Interface</h3>
            <p className="text-sm text-gray-700">What users see and interact with - buttons, forms, and text</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">Data Management</h3>
            <p className="text-sm text-gray-700">How the website remembers information like user preferences</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-700 mb-2">Backend Communication</h3>
            <p className="text-sm text-gray-700">How the website talks to servers to get and save data</p>
          </div>
        </div>
      </div>

      {/* Best Practices - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">✅</span>
          Good Practices for Beginners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">1</div>
            <div>
              <h3 className="font-medium">Write Clean Code</h3>
              <p className="text-sm text-gray-600">Use proper indentation and meaningful names</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">2</div>
            <div>
              <h3 className="font-medium">Mobile-Friendly Design</h3>
              <p className="text-sm text-gray-600">Make sure it works on phones too</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">3</div>
            <div>
              <h3 className="font-medium">Accessibility</h3>
              <p className="text-sm text-gray-600">Make websites usable for everyone</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">4</div>
            <div>
              <h3 className="font-medium">Fast Loading</h3>
              <p className="text-sm text-gray-600">Keep files small for better speed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path - Simplified */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-3">📚</span>
          How to Learn Frontend Development
        </h2>
        <div className="space-y-4">
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">1</div>
            <div>
              <h3 className="font-medium">Start with HTML & CSS</h3>
              <p className="text-sm text-gray-600">Learn to create basic pages with styling</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">2</div>
            <div>
              <h3 className="font-medium">Add JavaScript</h3>
              <p className="text-sm text-gray-600">Make your pages interactive</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">3</div>
            <div>
              <h3 className="font-medium">Learn React Basics</h3>
              <p className="text-sm text-gray-600">Build simple components</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">4</div>
            <div>
              <h3 className="font-medium">Create Small Projects</h3>
              <p className="text-sm text-gray-600">Build a todo list, weather app, or simple game</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 font-bold">5</div>
            <div>
              <h3 className="font-medium">Join the Community</h3>
              <p className="text-sm text-gray-600">Learn from forums, Discord groups, and GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}