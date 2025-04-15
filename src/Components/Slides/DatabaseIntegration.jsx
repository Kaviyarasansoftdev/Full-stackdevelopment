// // import React from 'react'
// // import { CodeDemo } from '../CodeDemo/CodeDemo';


// // export default function DatabaseIntegration() {
// //   const mongooseCode = `// Mongoose Schema and Model
// // const mongoose = require('mongoose');

// // // Define Schema
// // const userSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //     trim: true
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     lowercase: true
// //   },
// //   password: {
// //     type: String,
// //     required: true,
// //     minlength: 6
// //   },
// //   role: {
// //     type: String,
// //     enum: ['user', 'admin'],
// //     default: 'user'
// //   },
// //   createdAt: {
// //     type: Date,
// //     default: Date.now
// //   }
// // });

// // // Create Model
// // const User = mongoose.model('User', userSchema);

// // module.exports = User;`;

// //   return (
// //     <div className="space-y-6 slide-in">
// //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Database Integration</h1>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Types</h2>
        
// //         <div className="flex flex-col md:flex-row gap-4 mb-6">
// //           <div className="flex-1 border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
// //             <div className="flex items-center mb-3">
// //               <div className="bg-blue-100 p-2 rounded-md">
// //                 <span className="text-xl">🗄️</span>
// //               </div>
// //               <h3 className="ml-3 font-medium text-gray-800">SQL Databases</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm mb-3">Relational databases with structured schemas and powerful query capabilities.</p>
// //             <div className="flex flex-wrap gap-2">
// //               <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">MySQL</span>
// //               <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">PostgreSQL</span>
// //               <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">SQLite</span>
// //             </div>
// //           </div>
          
// //           <div className="flex-1 border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
// //             <div className="flex items-center mb-3">
// //               <div className="bg-green-100 p-2 rounded-md">
// //                 <span className="text-xl">📄</span>
// //               </div>
// //               <h3 className="ml-3 font-medium text-gray-800">NoSQL Databases</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm mb-3">Flexible schema design for varied data structures and horizontal scaling.</p>
// //             <div className="flex flex-wrap gap-2">
// //               <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">MongoDB</span>
// //               <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">Firebase</span>
// //               <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">Redis</span>
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="mt-6">
// //           <h3 className="font-medium text-gray-800 mb-3">When to Choose Each Type</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             <div>
// //               <h4 className="font-medium text-blue-800 mb-2">Choose SQL When:</h4>
// //               <ul className="space-y-1 text-gray-700 text-sm">
// //                 <li>• Data has a clear, consistent structure</li>
// //                 <li>• Relationships between data are complex</li>
// //                 <li>• ACID transactions are required</li>
// //                 <li>• Data integrity is critical</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-medium text-green-800 mb-2">Choose NoSQL When:</h4>
// //               <ul className="space-y-1 text-gray-700 text-sm">
// //                 <li>• Data structure varies or evolves rapidly</li>
// //                 <li>• Horizontal scaling is needed</li>
// //                 <li>• High throughput is required</li>
// //                 <li>• Working with semi-structured data</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Working with MongoDB</h2>
// //         <p className="text-gray-700 mb-4">MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Here's how to model data with Mongoose, a MongoDB object modeling tool for Node.js:</p>
        
// //         <CodeDemo 
// //           title="Mongoose Schema and Model" 
// //           code={mongooseCode}
// //           language="javascript" 
// //         />
        
// //         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="border border-gray-200 rounded-lg p-4">
// //             <h3 className="font-medium text-gray-800 mb-2">MongoDB Best Practices</h3>
// //             <ul className="space-y-1 text-gray-700 text-sm">
// //               <li>Design schemas around query patterns</li>
// //               <li>Use indexing for frequently queried fields</li>
// //               <li>Consider embedded vs. referenced documents</li>
// //               <li>Implement proper validation at schema level</li>
// //             </ul>
// //           </div>
          
// //           <div className="border border-gray-200 rounded-lg p-4">
// //             <h3 className="font-medium text-gray-800 mb-2">Common Database Operations</h3>
// //             <ul className="space-y-1 text-gray-700 text-sm">
// //               <li><strong>Create:</strong> Model.create() or new Model().save()</li>
// //               <li><strong>Read:</strong> Model.find(), Model.findById()</li>
// //               <li><strong>Update:</strong> Model.updateOne(), Model.findByIdAndUpdate()</li>
// //               <li><strong>Delete:</strong> Model.deleteOne(), Model.findByIdAndDelete()</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Design & Architecture</h2>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //           <div>
// //             <h3 className="font-medium text-gray-800 mb-3">Data Modeling Principles</h3>
// //             <ul className="space-y-2 text-gray-700">
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Normalization vs. Denormalization:</strong> Balancing data integrity with performance</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Entity Relationships:</strong> One-to-one, one-to-many, many-to-many</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Schema Evolution:</strong> Planning for future changes in data structure</span>
// //               </li>
// //             </ul>
// //           </div>
          
// //           <div>
// //             <h3 className="font-medium text-gray-800 mb-3">Performance Optimization</h3>
// //             <ul className="space-y-2 text-gray-700">
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Indexing:</strong> Creating efficient database indexes</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Caching:</strong> Implementing Redis or in-memory caching</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-purple-500 mr-2">•</span>
// //                 <span><strong>Query Optimization:</strong> Writing efficient queries and leveraging database features</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
        
// //         <div className="mt-6">
// //           <h3 className="font-medium text-gray-800 mb-3">Advanced Database Concepts</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <div className="border border-gray-200 rounded-lg p-4">
// //               <h4 className="font-medium text-gray-800 mb-2">Transactions</h4>
// //               <p className="text-gray-700 text-sm">Ensuring multiple operations succeed or fail as a unit to maintain data consistency.</p>
// //             </div>
            
// //             <div className="border border-gray-200 rounded-lg p-4">
// //               <h4 className="font-medium text-gray-800 mb-2">Sharding</h4>
// //               <p className="text-gray-700 text-sm">Distributing data across multiple machines to handle high volume and throughput.</p>
// //             </div>
            
// //             <div className="border border-gray-200 rounded-lg p-4">
// //               <h4 className="font-medium text-gray-800 mb-2">Replication</h4>
// //               <p className="text-gray-700 text-sm">Creating copies of databases for redundancy and improved read performance.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// import React from 'react';

// export default function SimpleDatabaseIntegration() {
//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl">
//       <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Database Integration: The Basics</h1>
      
//       {/* Visual comparison of database types */}
//       <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">SQL vs NoSQL: A Visual Comparison</h2>
        
//         <div className="flex flex-col md:flex-row gap-6 mb-6">
//           {/* SQL */}
//           <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-200">
//             <div className="flex justify-center mb-4">
//               <div className="bg-blue-600 text-white p-4 rounded-full text-center">
//                 <span className="text-xl font-bold">SQL</span>
//               </div>
//             </div>
            
//             <div className="mb-4">
//               <h3 className="font-medium text-center mb-2">Think of it as...</h3>
//               <p className="text-center text-gray-700">A collection of excel spreadsheets with strict columns and rows</p>
//             </div>
            
//             <div className="border-t border-blue-200 pt-3 mt-3">
//               <h4 className="font-medium text-center mb-2">Examples:</h4>
//               <div className="flex justify-center gap-2 flex-wrap">
//                 <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">MySQL</span>
//                 <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">PostgreSQL</span>
//                 <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">SQLite</span>
//               </div>
//             </div>
//           </div>
          
//           {/* NoSQL */}
//           <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-200">
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-600 text-white p-4 rounded-full text-center">
//                 <span className="text-xl font-bold">NoSQL</span>
//               </div>
//             </div>
            
//             <div className="mb-4">
//               <h3 className="font-medium text-center mb-2">Think of it as...</h3>
//               <p className="text-center text-gray-700">A collection of documents or JSON files with flexible structures</p>
//             </div>
            
//             <div className="border-t border-green-200 pt-3 mt-3">
//               <h4 className="font-medium text-center mb-2">Examples:</h4>
//               <div className="flex justify-center gap-2 flex-wrap">
//                 <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">MongoDB</span>
//                 <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">Firebase</span>
//                 <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">Redis</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* When to choose illustration */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h3 className="font-medium text-center text-blue-800 mb-3">Choose SQL When:</h3>
//             <div className="space-y-2">
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-blue-100 p-1 rounded mr-2">📊</div>
//                 <span>Your data has a fixed structure</span>
//               </div>
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-blue-100 p-1 rounded mr-2">🔄</div>
//                 <span>You need complex relationships</span>
//               </div>
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-blue-100 p-1 rounded mr-2">🔒</div>
//                 <span>Data integrity is critical</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-green-50 p-4 rounded-lg">
//             <h3 className="font-medium text-center text-green-800 mb-3">Choose NoSQL When:</h3>
//             <div className="space-y-2">
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-green-100 p-1 rounded mr-2">📈</div>
//                 <span>You need to scale horizontally</span>
//               </div>
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-green-100 p-1 rounded mr-2">🔄</div>
//                 <span>Your data structure changes often</span>
//               </div>
//               <div className="flex items-center bg-white p-2 rounded">
//                 <div className="bg-green-100 p-1 rounded mr-2">⚡</div>
//                 <span>You need high-speed read/write</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Common operations section */}
//       <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Database Operations Made Simple</h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
//             <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">C</div>
//             <h3 className="font-medium">Create</h3>
//             <p className="text-sm text-gray-600">Add new data</p>
//           </div>
          
//           <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
//             <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">R</div>
//             <h3 className="font-medium">Read</h3>
//             <p className="text-sm text-gray-600">Get your data</p>
//           </div>
          
//           <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
//             <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">U</div>
//             <h3 className="font-medium">Update</h3>
//             <p className="text-sm text-gray-600">Change data</p>
//           </div>
          
//           <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
//             <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">D</div>
//             <h3 className="font-medium">Delete</h3>
//             <p className="text-sm text-gray-600">Remove data</p>
//           </div>
//         </div>
        
//         {/* Simple code example */}
//         <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
//           <p className="text-green-400">// MongoDB with Mongoose examples:</p>
//           <p className="mb-2">
//             <span className="text-blue-400">// Create:</span>
//             <span className="text-yellow-300"> const user = await User.create(&#123;name: 'John', email: 'john@example.com'&#125;);</span>
//           </p>
//           <p className="mb-2">
//             <span className="text-blue-400">// Read:</span>
//             <span className="text-yellow-300"> const users = await User.find();</span>
//           </p>
//           <p className="mb-2">
//             <span className="text-blue-400">// Update:</span>
//             <span className="text-yellow-300"> await User.updateOne(&#123;_id: userId&#125;, &#123;name: 'Jane'&#125;);</span>
//           </p>
//           <p>
//             <span className="text-blue-400">// Delete:</span>
//             <span className="text-yellow-300"> await User.deleteOne(&#123;_id: userId&#125;);</span>
//           </p>
//         </div>
//       </div>
      
//       {/* Database design concepts */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Database Design: Key Concepts</h2>
        
//         <div className="flex flex-col md:flex-row gap-4 mb-6">
//           <div className="flex-1 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
//             <h3 className="font-medium text-center mb-3">Performance Tips</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center gap-2">
//                 <div className="bg-yellow-200 p-1 rounded-full">🔍</div>
//                 <span>Use <b>indexes</b> for faster searches</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="bg-yellow-200 p-1 rounded-full">⚡</div>
//                 <span>Implement <b>caching</b> for frequent data</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="bg-yellow-200 p-1 rounded-full">📝</div>
//                 <span>Optimize your queries</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="flex-1 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
//             <h3 className="font-medium text-center mb-3">Scaling Your Database</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center gap-2">
//                 <div className="bg-indigo-200 p-1 rounded-full">🔄</div>
//                 <span><b>Replication:</b> Create copies for backup</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="bg-indigo-200 p-1 rounded-full">📊</div>
//                 <span><b>Sharding:</b> Split data across servers</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="bg-indigo-200 p-1 rounded-full">📈</div>
//                 <span><b>Vertical/Horizontal:</b> Scale up or out</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="text-center p-4 bg-gray-100 rounded-lg">
//           <h3 className="font-medium mb-2">Remember!</h3>
//           <p>Choose the right database for your specific project needs.<br />There's no one-size-fits-all solution!</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function SimpleDatabaseIntegration() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Database Integration: The Basics</h1>
      
      {/* Visual comparison of database types */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">SQL vs NoSQL: A Visual Comparison</h2>
        
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* SQL */}
          <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 text-white p-4 rounded-full text-center">
                <span className="text-xl font-bold">SQL</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium text-center mb-2">Think of it as...</h3>
              <p className="text-center text-gray-700">A collection of excel spreadsheets with strict columns and rows</p>
            </div>
            
            <div className="border-t border-blue-200 pt-3 mt-3">
              <h4 className="font-medium text-center mb-2">Examples:</h4>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">MySQL</span>
                <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">PostgreSQL</span>
                <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">SQLite</span>
              </div>
            </div>
          </div>
          
          {/* NoSQL */}
          <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 text-white p-4 rounded-full text-center">
                <span className="text-xl font-bold">NoSQL</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium text-center mb-2">Think of it as...</h3>
              <p className="text-center text-gray-700">A collection of documents or JSON files with flexible structures</p>
            </div>
            
            <div className="border-t border-green-200 pt-3 mt-3">
              <h4 className="font-medium text-center mb-2">Examples:</h4>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">MongoDB</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">Firebase</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">Redis</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* When to choose illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-center text-blue-800 mb-3">Choose SQL When:</h3>
            <div className="space-y-2">
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-blue-100 p-1 rounded mr-2">📊</div>
                <span>Your data has a fixed structure</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-blue-100 p-1 rounded mr-2">🔄</div>
                <span>You need complex relationships</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-blue-100 p-1 rounded mr-2">🔒</div>
                <span>Data integrity is critical</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-center text-green-800 mb-3">Choose NoSQL When:</h3>
            <div className="space-y-2">
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-green-100 p-1 rounded mr-2">📈</div>
                <span>You need to scale horizontally</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-green-100 p-1 rounded mr-2">🔄</div>
                <span>Your data structure changes often</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded">
                <div className="bg-green-100 p-1 rounded mr-2">⚡</div>
                <span>You need high-speed read/write</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Real-world examples */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Real-World Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SQL Examples */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h3 className="font-medium text-center text-blue-800 mb-4">SQL in the Real World</h3>
            
            <div className="mb-4 bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-2">🏦</div>
                <h4 className="font-medium">Banking Applications</h4>
              </div>
              <p className="text-sm text-gray-700">Banks use SQL databases to track transactions, account balances, and customer information because they need strict data integrity and support for complex transactions.</p>
            </div>
            
            <div className="mb-4 bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-2">🛒</div>
                <h4 className="font-medium">E-commerce Platforms</h4>
              </div>
              <p className="text-sm text-gray-700">Amazon's order processing system uses SQL databases to maintain relationships between products, orders, customers, and inventory with guaranteed consistency.</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-2">✈️</div>
                <h4 className="font-medium">Flight Booking Systems</h4>
              </div>
              <p className="text-sm text-gray-700">Airlines use SQL databases to manage flight schedules, seat reservations, and passenger information where accuracy and relationships are critical.</p>
            </div>
          </div>
          
          {/* NoSQL Examples */}
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h3 className="font-medium text-center text-green-800 mb-4">NoSQL in the Real World</h3>
            
            <div className="mb-4 bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-green-600 text-white p-2 rounded-full mr-2">📱</div>
                <h4 className="font-medium">Social Media Platforms</h4>
              </div>
              <p className="text-sm text-gray-700">Facebook uses NoSQL databases to store and manage user posts, comments, and interactions that need to scale massively with varying content structures.</p>
            </div>
            
            <div className="mb-4 bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-green-600 text-white p-2 rounded-full mr-2">🎮</div>
                <h4 className="font-medium">Online Gaming</h4>
              </div>
              <p className="text-sm text-gray-700">Games like Fortnite use NoSQL databases to store player stats, game state, and inventory items that require high-speed access and flexibility for new features.</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="bg-green-600 text-white p-2 rounded-full mr-2">📺</div>
                <h4 className="font-medium">Content Streaming</h4>
              </div>
              <p className="text-sm text-gray-700">Netflix uses NoSQL databases to store user preferences, viewing history, and content metadata that needs to be quickly accessible and have flexible schemas.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common operations section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Database Operations Made Simple</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">C</div>
            <h3 className="font-medium">Create</h3>
            <p className="text-sm text-gray-600">Add new data</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">R</div>
            <h3 className="font-medium">Read</h3>
            <p className="text-sm text-gray-600">Get your data</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">U</div>
            <h3 className="font-medium">Update</h3>
            <p className="text-sm text-gray-600">Change data</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">D</div>
            <h3 className="font-medium">Delete</h3>
            <p className="text-sm text-gray-600">Remove data</p>
          </div>
        </div>
        
        {/* Real-world operation examples */}
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-medium text-center mb-4">Real-World CRUD Examples</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-purple-800">Create</h4>
              <p className="text-sm text-gray-700"><b>Instagram:</b> When you create a new account or post a photo, Instagram adds a new user record or content entry to its database.</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-blue-800">Read</h4>
              <p className="text-sm text-gray-700"><b>Spotify:</b> When you open the app, it reads your playlists, recently played tracks, and recommended songs from the database.</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-green-800">Update</h4>
              <p className="text-sm text-gray-700"><b>Google Docs:</b> Every time you edit a document, the database updates your content in real-time to save your changes.</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-red-800">Delete</h4>
              <p className="text-sm text-gray-700"><b>Gmail:</b> When you delete an email, it removes that message from your inbox in the database (or moves it to trash).</p>
            </div>
          </div>
        </div>
        
        {/* Simple code example */}
        <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
          <p className="text-green-400">// MongoDB with Mongoose examples:</p>
          <p className="mb-2">
            <span className="text-blue-400">// Create:</span>
            <span className="text-yellow-300"> const user = await User.create(&#123;name: 'John', email: 'john@example.com'&#125;);</span>
          </p>
          <p className="mb-2">
            <span className="text-blue-400">// Read:</span>
            <span className="text-yellow-300"> const users = await User.find();</span>
          </p>
          <p className="mb-2">
            <span className="text-blue-400">// Update:</span>
            <span className="text-yellow-300"> await User.updateOne(&#123;_id: userId&#125;, &#123;name: 'Jane'&#125;);</span>
          </p>
          <p>
            <span className="text-blue-400">// Delete:</span>
            <span className="text-yellow-300"> await User.deleteOne(&#123;_id: userId&#125;);</span>
          </p>
        </div>
      </div>
      
      {/* Database design concepts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Database Design: Key Concepts</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-medium text-center mb-3">Performance Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="bg-yellow-200 p-1 rounded-full">🔍</div>
                <span>Use <b>indexes</b> for faster searches</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-yellow-200 p-1 rounded-full">⚡</div>
                <span>Implement <b>caching</b> for frequent data</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-yellow-200 p-1 rounded-full">📝</div>
                <span>Optimize your queries</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <h3 className="font-medium text-center mb-3">Scaling Your Database</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="bg-indigo-200 p-1 rounded-full">🔄</div>
                <span><b>Replication:</b> Create copies for backup</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-indigo-200 p-1 rounded-full">📊</div>
                <span><b>Sharding:</b> Split data across servers</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-indigo-200 p-1 rounded-full">📈</div>
                <span><b>Vertical/Horizontal:</b> Scale up or out</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Real-world project example */}
        <div className="p-4 bg-gray-100 rounded-lg mb-6">
          <h3 className="font-medium text-center mb-4">College Project Example: Student Management System</h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-blue-800">SQL Approach</h4>
              <p className="text-sm text-gray-700 mb-2">Use MySQL to create related tables:</p>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li><b>Students table:</b> ID, name, email, phone, address</li>
                <li><b>Courses table:</b> ID, name, credits, faculty_id</li>
                <li><b>Enrollments table:</b> student_id, course_id, semester, grade</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2"><b>Good for:</b> Generating reports, tracking GPA, managing prerequisites</p>
            </div>
            
            <div className="flex-1 bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium mb-2 text-green-800">NoSQL Approach</h4>
              <p className="text-sm text-gray-700 mb-2">Use MongoDB with documents like:</p>
              <div className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                <code>{`{
  _id: "12345",
  name: "Jane Smith",
  email: "jane@college.edu",
  courses: [
    { courseId: "CS101", name: "Intro to CS", grade: "A" },
    { courseId: "MA200", name: "Calculus", grade: "B+" }
  ],
  attendance: { ... },
  projects: [ ... ]
}`}</code>
              </div>
              <p className="text-sm text-gray-700 mt-2"><b>Good for:</b> Student portfolios, flexible course structures</p>
            </div>
          </div>
        </div>
        
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium mb-2">Remember!</h3>
          <p>Choose the right database for your specific project needs.<br />There's no one-size-fits-all solution!</p>
        </div>
      </div>
    </div>
  );
}