

// // import React, { useState } from 'react'

// // export default function Introduction() {
// //   const [quizStarted, setQuizStarted] = useState(false);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [showResults, setShowResults] = useState(false);
  
// //   const quizQuestions = [
// //     {
// //       question: "Which technology is NOT typically associated with frontend development?",
// //       options: ["React", "Express.js", "Vue.js", "Svelte"],
// //       correctAnswer: 1
// //     },
// //     {
// //       question: "What is the main advantage of using a cross-platform mobile framework?",
// //       options: [
// //         "Native performance is always better", 
// //         "Write once, deploy everywhere", 
// //         "They're easier to learn than JavaScript", 
// //         "They require less storage space"
// //       ],
// //       correctAnswer: 1
// //     },
// //     {
// //       question: "Which 2025 trend involves AI components throughout the application stack?",
// //       options: [
// //         "Edge-first architecture", 
// //         "AI-native applications", 
// //         "Super Apps", 
// //         "Metaverse integration"
// //       ],
// //       correctAnswer: 1
// //     },
// //     {
// //       question: "Which database type is best for handling highly structured, relational data?",
// //       options: ["MongoDB", "Firebase", "PostgreSQL", "Redis"],
// //       correctAnswer: 2
// //     },
// //     {
// //       question: "What is a 'BFF' in full stack architecture?",
// //       options: [
// //         "Best Frontend Framework", 
// //         "Backend For Frontend", 
// //         "Browser Feature Flag", 
// //         "Binary File Format"
// //       ],
// //       correctAnswer: 1
// //     }
// //   ];
  
// //   const handleStartQuiz = () => {
// //     setQuizStarted(true);
// //     setCurrentQuestion(0);
// //     setScore(0);
// //     setShowResults(false);
// //   };
  
// //   const handleAnswerSelect = (selectedOption) => {
// //     if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
// //       setScore(score + 1);
// //     }
    
// //     if (currentQuestion < quizQuestions.length - 1) {
// //       setCurrentQuestion(currentQuestion + 1);
// //     } else {
// //       setShowResults(true);
// //     }
// //   };
  
// //   const handleRetakeQuiz = () => {
// //     setCurrentQuestion(0);
// //     setScore(0);
// //     setShowResults(false);
// //   };

// //   return (
// //     <div className="space-y-6 slide-in">
// //       <h1 className="text-4xl font-bold text-gray-800 mb-6">
// //         Full Stack Development in 2025: Web and Mobile
// //       </h1>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Full Stack Ecosystem</h2>
// //         <div className="flex flex-col md:flex-row gap-6">
// //           <div className="flex-1">
// //             <p className="text-gray-700 mb-4">
// //               Full stack development is the art of mastering both the visible and invisible parts of modern applications. Think of it like being both the architect and builder of a digital skyscraper!
// //             </p>
// //             <p className="text-gray-700">
// //               In 2025, full stack developers need to navigate an increasingly complex landscape spanning web, mobile, AI integration, and cloud infrastructure.
// //             </p>
// //           </div>
// //           <div className="flex-1">
// //             <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
// //               <h3 className="font-medium text-blue-800 mb-2">Why Full Stack Is 🔥 Right Now</h3>
// //               <ul className="list-disc ml-5 text-gray-700 space-y-1">
// //                 <li>Tech companies value versatile developers</li>
// //                 <li>Startups need developers who can wear many hats</li>
// //                 <li>Higher salary potential (avg. +23% vs specialists)</li>
// //                 <li>More autonomy to build complete features</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Full Stack Pyramid</h2>
// //         <div className="relative h-64 mx-auto max-w-2xl">
// //           {/* Frontend Layer */}
// //           <div className="absolute inset-x-0 top-0 h-16 bg-blue-400 text-white rounded-t-lg flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="font-bold">Frontend Development</div>
// //               <div className="text-xs text-blue-100">HTML, CSS, JS, React, Vue, Angular</div>
// //             </div>
// //           </div>
          
// //           {/* Mobile Layer */}
// //           <div className="absolute inset-x-8 top-14 h-14 bg-pink-400 text-white flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="font-bold">Mobile Development</div>
// //               <div className="text-xs text-pink-100">Flutter, React Native, Swift, Kotlin</div>
// //             </div>
// //           </div>
          
// //           {/* API Layer */}
// //           <div className="absolute inset-x-16 top-26 h-12 bg-yellow-400 text-white flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="font-bold">API Layer</div>
// //               <div className="text-xs text-yellow-100">REST, GraphQL, gRPC</div>
// //             </div>
// //           </div>
          
// //           {/* Backend Layer */}
// //           <div className="absolute inset-x-24 top-36 h-14 bg-green-400 text-white flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="font-bold">Backend Development</div>
// //               <div className="text-xs text-green-100">Node.js, Python, Java, Go, C#</div>
// //             </div>
// //           </div>
          
// //           {/* Database Layer */}
// //           <div className="absolute inset-x-32 top-48 h-16 bg-purple-400 text-white rounded-b-lg flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="font-bold">Database & Storage</div>
// //               <div className="text-xs text-purple-100">SQL, NoSQL, Cloud Storage, Caching</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="grid md:grid-cols-2 gap-6">
// //         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //           <h2 className="text-2xl font-semibold text-gray-800 mb-4">2025 Full Stack Trends</h2>
// //           <div className="space-y-3">
// //             <div className="flex items-center gap-3">
// //               <div className="bg-purple-100 p-2 rounded-full">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
// //                   <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
// //                 </svg>
// //               </div>
// //               <div>
// //                 <h3 className="font-medium text-gray-900">AI-Native Applications</h3>
// //                 <p className="text-sm text-gray-600">LLMs and AI features built directly into app architecture</p>
// //               </div>
// //             </div>
            
// //             <div className="flex items-center gap-3">
// //               <div className="bg-green-100 p-2 rounded-full">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
// //                   <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
// //                 </svg>
// //               </div>
// //               <div>
// //                 <h3 className="font-medium text-gray-900">Edge Computing</h3>
// //                 <p className="text-sm text-gray-600">Server components running closer to users for speed</p>
// //               </div>
// //             </div>
            
// //             <div className="flex items-center gap-3">
// //               <div className="bg-yellow-100 p-2 rounded-full">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
// //                   <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
// //                 </svg>
// //               </div>
// //               <div>
// //                 <h3 className="font-medium text-gray-900">Super Apps</h3>
// //                 <p className="text-sm text-gray-600">Platform ecosystems with mini-programs inside</p>
// //               </div>
// //             </div>
            
// //             <div className="flex items-center gap-3">
// //               <div className="bg-blue-100 p-2 rounded-full">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
// //                   <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
// //                 </svg>
// //               </div>
// //               <div>
// //                 <h3 className="font-medium text-gray-900">WebAssembly</h3>
// //                 <p className="text-sm text-gray-600">Near-native speed for complex web applications</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-World Stack Examples</h2>
// //           <div className="space-y-3">
// //             <div className="border-l-4 border-blue-500 pl-4 py-2">
// //               <h3 className="font-medium text-gray-900">Modern SaaS Stack</h3>
// //               <p className="text-sm text-gray-600">React + Node.js + PostgreSQL + Docker</p>
// //             </div>
            
// //             <div className="border-l-4 border-green-500 pl-4 py-2">
// //               <h3 className="font-medium text-gray-900">E-commerce Platform</h3>
// //               <p className="text-sm text-gray-600">Next.js + GraphQL + MongoDB + Stripe</p>
// //             </div>
            
// //             <div className="border-l-4 border-purple-500 pl-4 py-2">
// //               <h3 className="font-medium text-gray-900">Mobile-First Startup</h3>
// //               <p className="text-sm text-gray-600">Flutter + Firebase + Cloud Functions</p>
// //             </div>
            
// //             <div className="border-l-4 border-pink-500 pl-4 py-2">
// //               <h3 className="font-medium text-gray-900">AI-Powered App</h3>
// //               <p className="text-sm text-gray-600">React + Python FastAPI + PostgreSQL + Redis</p>
// //             </div>
            
// //             <div className="mt-4 text-sm text-gray-500 italic">
// //               Companies hire full stack developers who can work across these entire stacks!
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
// //         <h2 className="text-2xl font-semibold mb-4">Test Your Full Stack Knowledge!</h2>
        
// //         {!quizStarted ? (
// //           <div className="text-center">
// //             <p className="mb-4">Ready to see how much you already know about full stack development?</p>
// //             <button 
// //               onClick={handleStartQuiz}
// //               className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-50 transition"
// //             >
// //               Start Quiz
// //             </button>
// //           </div>
// //         ) : showResults ? (
// //           <div className="text-center">
// //             <div className="text-3xl font-bold mb-2">
// //               You scored: {score}/{quizQuestions.length}
// //             </div>
// //             <p className="mb-4">
// //               {score >= 4 ? "Amazing! You're already on your way to full stack mastery!" : 
// //                score >= 2 ? "Good job! You have some knowledge to build upon." :
// //                "Great start! We'll cover all these topics in this class."}
// //             </p>
// //             <button 
// //               onClick={handleRetakeQuiz}
// //               className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-50 transition mr-3"
// //             >
// //               Try Again
// //             </button>
// //             <button 
// //               onClick={() => setQuizStarted(false)}
// //               className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white/10 transition"
// //             >
// //               Back to Overview
// //             </button>
// //           </div>
// //         ) : (
// //           <div>
// //             <div className="mb-1 text-sm">Question {currentQuestion + 1} of {quizQuestions.length}</div>
// //             <h3 className="text-xl font-medium mb-4">{quizQuestions[currentQuestion].question}</h3>
// //             <div className="space-y-2">
// //               {quizQuestions[currentQuestion].options.map((option, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => handleAnswerSelect(index)}
// //                   className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-lg transition"
// //                 >
// //                   {option}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Up in This Session</h2>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
// //             <div className="text-blue-600 text-3xl font-bold mb-1">2</div>
// //             <h3 className="font-medium text-gray-800">Frontend Basics</h3>
// //             <p className="text-xs text-gray-600 mt-1">Building interactive UIs</p>
// //           </div>
          
// //           <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
// //             <div className="text-green-600 text-3xl font-bold mb-1">3</div>
// //             <h3 className="font-medium text-gray-800">Backend Basics</h3>
// //             <p className="text-xs text-gray-600 mt-1">Server-side development</p>
// //           </div>
          
// //           <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
// //             <div className="text-purple-600 text-3xl font-bold mb-1">4</div>
// //             <h3 className="font-medium text-gray-800">Database Integration</h3>
// //             <p className="text-xs text-gray-600 mt-1">Data management strategies</p>
// //           </div>
          
// //           <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 text-center">
// //             <div className="text-pink-600 text-3xl font-bold mb-1">5</div>
// //             <h3 className="font-medium text-gray-800">Mobile Development</h3>
// //             <p className="text-xs text-gray-600 mt-1">Cross-platform app creation</p>
// //           </div>
// //         </div>
// //         <div className="mt-4 text-center text-sm text-gray-500">
// //           Each section includes hands-on examples, live coding, and mini-challenges!
// //         </div>
// //       </div>
      
// //       <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Interaction</h2>
// //         <div className="space-y-4">
// //           <p className="text-gray-700">
// //             Throughout this session, we'll make learning interactive. Here's how you can participate:
// //           </p>
// //           <div className="grid md:grid-cols-3 gap-4 text-center">
// //             <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
// //               <div className="text-2xl mb-2">🙋‍♀️</div>
// //               <h3 className="font-medium text-gray-800">Ask Questions</h3>
// //               <p className="text-sm text-gray-600">Raise your hand or use the chat</p>
// //             </div>
            
// //             <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
// //               <div className="text-2xl mb-2">💻</div>
// //               <h3 className="font-medium text-gray-800">Code Along</h3>
// //               <p className="text-sm text-gray-600">Follow live examples on your device</p>
// //             </div>
            
// //             <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
// //               <div className="text-2xl mb-2">🎮</div>
// //               <h3 className="font-medium text-gray-800">Interactive Polls</h3>
// //               <p className="text-sm text-gray-600">Respond to live polls during the session</p>
// //             </div>
// //           </div>
          
// //           <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mt-4">
// //             <p className="font-medium text-gray-800">Real-time Challenge:</p>
// //             <p className="text-gray-700">Take 30 seconds to think about what you want to build with full stack skills. We'll discuss your ideas throughout the session!</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// import React from 'react';

// export default function FullStackOverview() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold text-center mb-8">Full Stack Development: The Complete Picture</h1>
      
//       {/* Introduction Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-4">What is Full Stack Development?</h2>
//         <p className="mb-4">
//           Full Stack Development means working with <strong>both frontend and backend</strong> technologies 
//           to build complete applications. It's like being able to design both the outside AND inside of a building!
//         </p>
//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//           <h3 className="font-medium text-blue-800 mb-2">Why Learn Full Stack? 💪</h3>
//           <ul className="list-disc ml-5 space-y-1">
//             <li>Higher job opportunities</li>
//             <li>Better salary potential</li>
//             <li>Build complete projects on your own</li>
//             <li>Understand how everything connects</li>
//           </ul>
//         </div>
//       </div>
      
//       {/* The Burger Analogy */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-4">The Full Stack Burger 🍔</h2>
        
//         <div className="relative mx-auto w-64 h-80">
//           {/* Top Bun - Frontend */}
//           <div className="absolute w-64 h-20 bg-yellow-300 rounded-t-full flex items-center justify-center">
//             <p className="font-bold text-center">FRONTEND<br/><span className="text-xs">What users see and interact with</span></p>
//           </div>
          
//           {/* Lettuce - UI Frameworks */}
//           <div className="absolute top-16 w-64 h-12 bg-green-400 border-t border-b border-green-600 flex items-center justify-center">
//             <p className="text-sm font-medium">React, Angular, Vue, HTML/CSS</p>
//           </div>
          
//           {/* Cheese - API Layer */}
//           <div className="absolute top-28 w-64 h-10 bg-yellow-200 flex items-center justify-center">
//             <p className="text-sm font-medium">API Layer (REST, GraphQL)</p>
//           </div>
          
//           {/* Patty - Backend */}
//           <div className="absolute top-38 w-64 h-16 bg-brown-500 flex items-center justify-center">
//             <p className="font-bold text-white text-center">BACKEND<br/><span className="text-xs">Server-side logic and processing</span></p>
//           </div>
          
//           {/* Sauce - Middleware */}
//           <div className="absolute top-54 w-64 h-6 bg-red-400 flex items-center justify-center">
//             <p className="text-xs font-medium">Middleware, Auth, Security</p>
//           </div>
          
//           {/* Bottom Bun - Database */}
//           <div className="absolute top-60 w-64 h-18 bg-yellow-400 rounded-b-full flex items-center justify-center">
//             <p className="font-bold text-center">DATABASE<br/><span className="text-xs">Where all data is stored</span></p>
//           </div>
//         </div>
        
//         <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//           <p className="text-sm text-center">
//             Just like how all parts of a burger work together to create a delicious meal,
//             all parts of the full stack work together to create a complete application!
//           </p>
//         </div>
//       </div>
      
//       {/* The Full Stack Pyramid */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-6">The Full Stack Pyramid</h2>
        
//         <div className="relative h-64 mx-auto">
//           {/* Frontend Layer */}
//           <div className="absolute inset-x-0 top-0 h-16 bg-blue-400 text-white rounded-t-lg flex items-center justify-center">
//             <div className="text-center">
//               <div className="font-bold">FRONTEND</div>
//               <div className="text-xs">HTML, CSS, JavaScript, React, Vue, Angular</div>
//             </div>
//           </div>
          
//           {/* API Layer */}
//           <div className="absolute inset-x-16 top-16 h-12 bg-yellow-400 text-white flex items-center justify-center">
//             <div className="text-center">
//               <div className="font-bold">API LAYER</div>
//               <div className="text-xs">REST, GraphQL, Fetch/Axios</div>
//             </div>
//           </div>
          
//           {/* Backend Layer */}
//           <div className="absolute inset-x-32 top-28 h-14 bg-green-500 text-white flex items-center justify-center">
//             <div className="text-center">
//               <div className="font-bold">BACKEND</div>
//               <div className="text-xs">Node.js, Python, Java, PHP, Ruby</div>
//             </div>
//           </div>
          
//           {/* Database Layer */}
//           <div className="absolute inset-x-48 top-42 h-16 bg-purple-500 text-white rounded-b-lg flex items-center justify-center">
//             <div className="text-center">
//               <div className="font-bold">DATABASE</div>
//               <div className="text-xs">MySQL, MongoDB, PostgreSQL, Firebase</div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Core Technologies */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-4">Technologies You Need to Know</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h3 className="text-xl font-bold text-blue-700">Frontend</h3>
//             <ul className="mt-2 space-y-2">
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">HTML/CSS:</span> 
//                 <span className="text-sm">Structure and style</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">JavaScript:</span> 
//                 <span className="text-sm">Interactivity</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">React/Vue/Angular:</span> 
//                 <span className="text-sm">UI frameworks</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Responsive Design:</span> 
//                 <span className="text-sm">Mobile-friendly interfaces</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="bg-green-50 p-4 rounded-lg">
//             <h3 className="text-xl font-bold text-green-700">Backend</h3>
//             <ul className="mt-2 space-y-2">
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Node.js/Express:</span> 
//                 <span className="text-sm">JavaScript server</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Python/Django/Flask:</span> 
//                 <span className="text-sm">Python frameworks</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Java/Spring:</span> 
//                 <span className="text-sm">Enterprise applications</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">PHP/Laravel:</span> 
//                 <span className="text-sm">Web-focused backend</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="bg-purple-50 p-4 rounded-lg">
//             <h3 className="text-xl font-bold text-purple-700">Databases</h3>
//             <ul className="mt-2 space-y-2">
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">MySQL/PostgreSQL:</span> 
//                 <span className="text-sm">Relational databases</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">MongoDB:</span> 
//                 <span className="text-sm">NoSQL database</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Firebase:</span> 
//                 <span className="text-sm">Real-time database</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Redis:</span> 
//                 <span className="text-sm">In-memory caching</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="bg-yellow-50 p-4 rounded-lg">
//             <h3 className="text-xl font-bold text-yellow-700">Dev Tools</h3>
//             <ul className="mt-2 space-y-2">
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Git/GitHub:</span> 
//                 <span className="text-sm">Version control</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">VS Code/WebStorm:</span> 
//                 <span className="text-sm">Code editors</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Docker:</span> 
//                 <span className="text-sm">Containerization</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="font-medium mr-2">Postman:</span> 
//                 <span className="text-sm">API testing</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       {/* Popular Full Stack Combinations */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-4">Popular Tech Stacks</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="border-l-4 border-blue-500 pl-4 py-2">
//             <h3 className="font-bold">MERN Stack</h3>
//             <p className="text-sm">MongoDB + Express + React + Node.js</p>
//           </div>
          
//           <div className="border-l-4 border-green-500 pl-4 py-2">
//             <h3 className="font-bold">MEAN Stack</h3>
//             <p className="text-sm">MongoDB + Express + Angular + Node.js</p>
//           </div>
          
//           <div className="border-l-4 border-yellow-500 pl-4 py-2">
//             <h3 className="font-bold">LAMP Stack</h3>
//             <p className="text-sm">Linux + Apache + MySQL + PHP</p>
//           </div>
          
//           <div className="border-l-4 border-purple-500 pl-4 py-2">
//             <h3 className="font-bold">Django Stack</h3>
//             <p className="text-sm">Python + Django + PostgreSQL</p>
//           </div>
          
//           <div className="border-l-4 border-red-500 pl-4 py-2">
//             <h3 className="font-bold">Ruby on Rails</h3>
//             <p className="text-sm">Ruby + Rails + PostgreSQL</p>
//           </div>
          
//           <div className="border-l-4 border-indigo-500 pl-4 py-2">
//             <h3 className="font-bold">JAMstack</h3>
//             <p className="text-sm">JavaScript + APIs + Markup</p>
//           </div>
//         </div>
//       </div>
      
//       {/* How Web Apps Work */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-4">How Web Apps Work: Simple Explanation</h2>
        
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
//             <div className="bg-blue-100 p-4 rounded-lg">
//               <div className="text-3xl mb-2">👩‍💻</div>
//               <div className="font-bold mb-1">USER</div>
//               <div className="text-sm">Clicks a button</div>
//             </div>
            
//             <div className="text-2xl">→</div>
            
//             <div className="bg-green-100 p-4 rounded-lg">
//               <div className="text-3xl mb-2">🖥️</div>
//               <div className="font-bold mb-1">FRONTEND</div>
//               <div className="text-sm">Sends request to backend</div>
//             </div>
            
//             <div className="text-2xl">→</div>
            
//             <div className="bg-yellow-100 p-4 rounded-lg">
//               <div className="text-3xl mb-2">🔧</div>
//               <div className="font-bold mb-1">BACKEND</div>
//               <div className="text-sm">Processes request</div>
//             </div>
            
//             <div className="text-2xl">→</div>
            
//             <div className="bg-purple-100 p-4 rounded-lg">
//               <div className="text-3xl mb-2">💾</div>
//               <div className="font-bold mb-1">DATABASE</div>
//               <div className="text-sm">Stores/retrieves data</div>
//             </div>
            
//             <div className="text-2xl">→</div>
            
//             <div className="bg-green-100 p-4 rounded-lg">
//               <div className="text-3xl mb-2">🖥️</div>
//               <div className="font-bold mb-1">FRONTEND</div>
//               <div className="text-sm">Shows result to user</div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Learning Path */}
//       <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
//         <h2 className="text-2xl font-bold mb-4">Your Learning Path</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
//             <div className="text-3xl font-bold mb-2">1</div>
//             <h3 className="font-bold">HTML/CSS/JS</h3>
//             <p className="text-sm opacity-80">Master the fundamentals</p>
//           </div>
          
//           <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
//             <div className="text-3xl font-bold mb-2">2</div>
//             <h3 className="font-bold">Frontend Framework</h3>
//             <p className="text-sm opacity-80">Learn React or Vue</p>
//           </div>
          
//           <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
//             <div className="text-3xl font-bold mb-2">3</div>
//             <h3 className="font-bold">Backend Language</h3>
//             <p className="text-sm opacity-80">Node.js or Python</p>
//           </div>
          
//           <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
//             <div className="text-3xl font-bold mb-2">4</div>
//             <h3 className="font-bold">Database & Deployment</h3>
//             <p className="text-sm opacity-80">Complete the stack</p>
//           </div>
//         </div>
        
//         <div className="mt-6 bg-white/20 p-4 rounded-lg text-center">
//           <p>
//             Start with small projects that combine frontend and backend.
//             Building real apps is the fastest way to learn!
//           </p>
//         </div>
//       </div>
      
//       {/* Final Encouragement */}
//       <div className="bg-white rounded-lg shadow-md p-6 mt-8 text-center">
//         <h2 className="text-2xl font-bold mb-4">You Can Do This! 🚀</h2>
//         <p>
//           Every professional developer started as a beginner.
//           Take it step by step, keep building projects, and you'll become a full stack developer!
//         </p>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function FullStackOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Full Stack Development: The Complete Picture</h1>
      
      {/* Introduction Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">What is Full Stack Development?</h2>
        <p className="mb-4">
          Full Stack Development means working with <strong>both frontend and backend</strong> technologies 
          to build complete applications. It's like being able to design both the outside AND inside of a building!
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">Why Learn Full Stack? 💪</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Higher job opportunities</li>
            <li>Better salary potential</li>
            <li>Build complete projects on your own</li>
            <li>Understand how everything connects</li>
          </ul>
        </div>
      </div>
      
      {/* The Burger Analogy */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">The Full Stack Burger 🍔</h2>
        
        <div className="relative mx-auto w-64 h-80">
          {/* Top Bun - Frontend */}
          <div className="absolute w-64 h-20 bg-yellow-300 rounded-t-full flex items-center justify-center">
            <p className="font-bold text-center">FRONTEND<br/><span className="text-xs">What users see and interact with</span></p>
          </div>
          
          {/* Lettuce - UI Frameworks */}
          <div className="absolute top-16 w-64 h-12 bg-green-400 border-t border-b border-green-600 flex items-center justify-center">
            <p className="text-sm font-medium">React, Angular, Vue, HTML/CSS</p>
          </div>
          
          {/* Cheese - API Layer */}
          <div className="absolute top-28 w-64 h-10 bg-yellow-200 flex items-center justify-center">
            <p className="text-sm font-medium">API Layer (REST, GraphQL)</p>
          </div>
          
          {/* Patty - Backend */}
          <div className="absolute top-38 w-64 h-16 bg-brown-500 flex items-center justify-center">
            <p className="font-bold text-black text-center">BACKEND<br/><span className="text-xs">Server-side logic and processing</span></p>
          </div>
          
          {/* Sauce - Middleware */}
          <div className="absolute top-54 w-64 h-6 bg-red-400 flex items-center justify-center">
            <p className="text-xs font-medium">Middleware, Auth, Security</p>
          </div>
          
          {/* Bottom Bun - Database */}
          <div className="absolute top-60 w-64 h-18 bg-yellow-400 rounded-b-full flex items-center justify-center">
            <p className="font-bold text-center">DATABASE<br/><span className="text-xs">Where all data is stored</span></p>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-center">
            Just like how all parts of a burger work together to create a delicious meal,
            all parts of the full stack work together to create a complete application!
          </p>
        </div>
      </div>
      
      {/* The Full Stack Pyramid */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">The Full Stack Pyramid</h2>
        
        <div className="relative h-64 mx-auto">
          {/* Frontend Layer */}
          <div className="absolute inset-x-0 top-0 h-16 bg-blue-400 text-white rounded-t-lg flex items-center justify-center">
            <div className="text-center">
              <div className="font-bold">FRONTEND</div>
              <div className="text-xs">HTML, CSS, JavaScript, React, Vue, Angular</div>
            </div>
          </div>
          
          {/* API Layer */}
          <div className="absolute inset-x-16 top-16 h-12 bg-yellow-400 text-white flex items-center justify-center">
            <div className="text-center">
              <div className="font-bold">API LAYER</div>
              <div className="text-xs">REST, GraphQL, Fetch/Axios</div>
            </div>
          </div>
          
          {/* Backend Layer */}
          <div className="absolute inset-x-32 top-28 h-14 bg-green-500 text-white flex items-center justify-center">
            <div className="text-center">
              <div className="font-bold">BACKEND</div>
              <div className="text-xs">Node.js, Python, Java, PHP, Ruby</div>
            </div>
          </div>
          
          {/* Database Layer */}
          <div className="absolute inset-x-48 top-42 h-16 bg-purple-500 text-white rounded-b-lg flex items-center justify-center">
            <div className="text-center">
              <div className="font-bold">DATABASE</div>
              <div className="text-xs">MySQL, MongoDB, PostgreSQL, Firebase</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Technologies */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies You Need to Know</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700">Frontend</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">HTML/CSS:</span> 
                <span className="text-sm">Structure and style</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">JavaScript:</span> 
                <span className="text-sm">Interactivity</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">React/Vue/Angular:</span> 
                <span className="text-sm">UI frameworks</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Responsive Design:</span> 
                <span className="text-sm">Mobile-friendly interfaces</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700">Backend</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Node.js/Express:</span> 
                <span className="text-sm">JavaScript server</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Python/Django/Flask:</span> 
                <span className="text-sm">Python frameworks</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Java/Spring:</span> 
                <span className="text-sm">Enterprise applications</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">PHP/Laravel:</span> 
                <span className="text-sm">Web-focused backend</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-700">Databases</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">MySQL/PostgreSQL:</span> 
                <span className="text-sm">Relational databases</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">MongoDB:</span> 
                <span className="text-sm">NoSQL database</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Firebase:</span> 
                <span className="text-sm">Real-time database</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Redis:</span> 
                <span className="text-sm">In-memory caching</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-700">Dev Tools</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Git/GitHub:</span> 
                <span className="text-sm">Version control</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">VS Code/WebStorm:</span> 
                <span className="text-sm">Code editors</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Docker:</span> 
                <span className="text-sm">Containerization</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Postman:</span> 
                <span className="text-sm">API testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* NEW SECTION: Frontend vs Backend Comparison */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Frontend vs Backend: What's The Difference?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Frontend 🖥️</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 p-1 rounded mr-2 text-xs">FOCUS</span>
                <span>User interface and experience</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 p-1 rounded mr-2 text-xs">RUNS ON</span>
                <span>Client's browser</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 p-1 rounded mr-2 text-xs">LANGUAGES</span>
                <span>HTML, CSS, JavaScript</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 p-1 rounded mr-2 text-xs">FRAMEWORKS</span>
                <span>React, Angular, Vue</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 p-1 rounded mr-2 text-xs">SKILLS</span>
                <span>Design sensibility, UI/UX principles</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-3">Backend 🔧</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 p-1 rounded mr-2 text-xs">FOCUS</span>
                <span>Data, logic, and server operations</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 p-1 rounded mr-2 text-xs">RUNS ON</span>
                <span>Server</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 p-1 rounded mr-2 text-xs">LANGUAGES</span>
                <span>JavaScript (Node), Python, Java, PHP</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 p-1 rounded mr-2 text-xs">FRAMEWORKS</span>
                <span>Express, Django, Spring, Laravel</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 p-1 rounded mr-2 text-xs">SKILLS</span>
                <span>Logic, security, database management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* NEW SECTION: The "House" Analogy */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">The "House" of Web Development</h2>
        
        <div className="relative h-96 mx-auto max-w-lg">
          {/* Roof - Client-side/Frontend */}
          <div className="absolute inset-x-0 top-0 h-24 bg-red-400 text-white flex items-center justify-center" style={{clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'}}>
            <div className="text-center mt-8">
              <div className="font-bold">FRONTEND</div>
              <div className="text-xs">User Interface</div>
            </div>
          </div>
          
          {/* Upper Floor - Client-Server Communication */}
          <div className="absolute inset-x-0 top-24 h-20 bg-yellow-400 text-white flex items-center justify-center border-b-4 border-t-4 border-gray-800">
            <div className="text-center">
              <div className="font-bold">API & COMMUNICATIONS</div>
              <div className="text-xs">HTTP, REST, GraphQL, WebSockets</div>
            </div>
          </div>
          
          {/* Middle Floor - Backend Logic */}
          <div className="absolute inset-x-0 top-44 h-20 bg-green-500 text-white flex items-center justify-center border-b-4 border-gray-800">
            <div className="text-center">
              <div className="font-bold">BACKEND LOGIC</div>
              <div className="text-xs">Server-side Processing</div>
            </div>
          </div>
          
          {/* Lower Floor - Data Layer */}
          <div className="absolute inset-x-0 top-64 h-20 bg-blue-500 text-white flex items-center justify-center border-b-4 border-gray-800">
            <div className="text-center">
              <div className="font-bold">DATA MANAGEMENT</div>
              <div className="text-xs">Databases & Storage</div>
            </div>
          </div>
          
          {/* Foundation - Infrastructure */}
          <div className="absolute inset-x-0 top-84 h-12 bg-gray-700 text-white flex items-center justify-center rounded-b-lg">
            <div className="text-center">
              <div className="font-bold">INFRASTRUCTURE</div>
              <div className="text-xs">Servers, Cloud, DevOps</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm">
            Like a house, each layer of your application builds on the one below it.
            A full stack developer can work on any "floor" of this house!
          </p>
        </div>
      </div>
      
      {/* Popular Full Stack Combinations */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular Tech Stacks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold">MERN Stack</h3>
            <p className="text-sm">MongoDB + Express + React + Node.js</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-bold">MEAN Stack</h3>
            <p className="text-sm">MongoDB + Express + Angular + Node.js</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 className="font-bold">LAMP Stack</h3>
            <p className="text-sm">Linux + Apache + MySQL + PHP</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h3 className="font-bold">Django Stack</h3>
            <p className="text-sm">Python + Django + PostgreSQL</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-bold">Ruby on Rails</h3>
            <p className="text-sm">Ruby + Rails + PostgreSQL</p>
          </div>
          
          <div className="border-l-4 border-indigo-500 pl-4 py-2">
            <h3 className="font-bold">JAMstack</h3>
            <p className="text-sm">JavaScript + APIs + Markup</p>
          </div>
        </div>
      </div>
      
      {/* NEW SECTION: Full Stack Development Tools */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Essential Tools for Full Stack Developers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Code & Development</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-blue-700">VS</span>
                </div>
                <div>
                  <h4 className="font-medium">VS Code</h4>
                  <p className="text-sm">Popular code editor with extensions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-blue-700">G</span>
                </div>
                <div>
                  <h4 className="font-medium">Git & GitHub</h4>
                  <p className="text-sm">Version control system</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-blue-700">NPM</span>
                </div>
                <div>
                  <h4 className="font-medium">Package Managers</h4>
                  <p className="text-sm">npm, yarn, pip, composer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Testing & Deployment</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">P</span>
                </div>
                <div>
                  <h4 className="font-medium">Postman</h4>
                  <p className="text-sm">API testing tool</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">D</span>
                </div>
                <div>
                  <h4 className="font-medium">Docker</h4>
                  <p className="text-sm">Containerization platform</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">H</span>
                </div>
                <div>
                  <h4 className="font-medium">Hosting Platforms</h4>
                  <p className="text-sm">Netlify, Vercel, Heroku, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* NEW SECTION: Full Stack Best Practices */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Full Stack Development Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">1</div>
            <div>
              <h3 className="font-medium">Keep Frontend and Backend Separate</h3>
              <p className="text-sm text-gray-600">Clear separation of concerns makes code easier to maintain</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">2</div>
            <div>
              <h3 className="font-medium">Use RESTful API Design</h3>
              <p className="text-sm text-gray-600">Standardized API endpoints are easier to work with</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">3</div>
            <div>
              <h3 className="font-medium">Don't Repeat Yourself (DRY)</h3>
              <p className="text-sm text-gray-600">Reuse code through components and functions</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">4</div>
            <div>
              <h3 className="font-medium">Implement Proper Error Handling</h3>
              <p className="text-sm text-gray-600">Both frontend and backend need good error handling</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">5</div>
            <div>
              <h3 className="font-medium">Use Environment Variables</h3>
              <p className="text-sm text-gray-600">Never hardcode sensitive information</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">6</div>
            <div>
              <h3 className="font-medium">Test Your Code</h3>
              <p className="text-sm text-gray-600">Unit tests, integration tests, and end-to-end tests</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How Web Apps Work */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How Web Apps Work: Simple Explanation</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="text-3xl mb-2">👩‍💻</div>
              <div className="font-bold mb-1">USER</div>
              <div className="text-sm">Clicks a button</div>
            </div>
            
            <div className="text-2xl">→</div>
            
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="text-3xl mb-2">🖥️</div>
              <div className="font-bold mb-1">FRONTEND</div>
              <div className="text-sm">Sends request to backend</div>
            </div>
            
            <div className="text-2xl">→</div>
            
            <div className="bg-yellow-100 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-bold mb-1">BACKEND</div>
              <div className="text-sm">Processes request</div>
            </div>
            
            <div className="text-2xl">→</div>
            
            <div className="bg-purple-100 p-4 rounded-lg">
              <div className="text-3xl mb-2">💾</div>
              <div className="font-bold mb-1">DATABASE</div>
              <div className="text-sm">Stores/retrieves data</div>
            </div>
            
            <div className="text-2xl">→</div>
            
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="text-3xl mb-2">🖥️</div>
              <div className="font-bold mb-1">FRONTEND</div>
              <div className="text-sm">Shows result to user</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* NEW SECTION: Types of Web Applications */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Types of Web Applications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="text-3xl text-center mb-2">🌐</div>
            <h3 className="font-bold text-center mb-2">Traditional Web Apps</h3>
            <ul className="text-sm space-y-1">
              <li><span className="font-medium">Multi-page:</span> Page reloads on navigation</li>
              <li><span className="font-medium">Server-rendered:</span> HTML generated on server</li>
              <li><span className="font-medium">Examples:</span> Wikipedia, government websites</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="text-3xl text-center mb-2">⚛️</div>
            <h3 className="font-bold text-center mb-2">Single Page Apps (SPAs)</h3>
            <ul className="text-sm space-y-1">
              <li><span className="font-medium">Javascript-driven:</span> Dynamic content loading</li>
              <li><span className="font-medium">Client-side rendering:</span> React, Vue, Angular</li>
              <li><span className="font-medium">Examples:</span> Gmail, Facebook, Twitter</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="text-3xl text-center mb-2">📱</div>
            <h3 className="font-bold text-center mb-2">Progressive Web Apps</h3>
            <ul className="text-sm space-y-1">
              <li><span className="font-medium">Mobile-like:</span> Can be installed on devices</li>
              <li><span className="font-medium">Offline support:</span> Works without internet</li>
              <li><span className="font-medium">Examples:</span> Pinterest, Starbucks, Uber</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Learning Path */}
            {/* Learning Path */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Full Stack Learning Path</h2>
        
        <div className="space-y-6">
          <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4 font-bold">1</div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Start with the Basics</h3>
              <p className="text-sm text-gray-600">Learn HTML, CSS, and JavaScript fundamentals.</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                <li>HTML: Structure web content</li>
                <li>CSS: Style and layout</li>
                <li>JavaScript: Add interactivity</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4 font-bold">2</div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Master Frontend Development</h3>
              <p className="text-sm text-gray-600">Choose a framework and build user interfaces.</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                <li>React.js: Component-based UI</li>
                <li>State management</li>
                <li>Responsive design principles</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4 font-bold">3</div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Learn Backend Development</h3>
              <p className="text-sm text-gray-600">Understand server-side programming and APIs.</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                <li>Node.js/Express: Build RESTful APIs</li>
                <li>Authentication & Authorization</li>
                <li>Server management</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4 font-bold">4</div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Dive into Databases</h3>
              <p className="text-sm text-gray-600">Store and manage data effectively.</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                <li>SQL: Relational databases (MySQL, PostgreSQL)</li>
                <li>NoSQL: MongoDB</li>
                <li>Database design principles</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4 font-bold">5</div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Build & Deploy Projects</h3>
              <p className="text-sm text-gray-600">Create real-world applications and deploy them.</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                <li>Portfolio projects</li>
                <li>Cloud deployment (AWS, Heroku, Vercel)</li>
                <li>Version control with Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}