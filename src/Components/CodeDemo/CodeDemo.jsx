import React, { useState } from 'react'

export const CodeDemo = ({ title, code, language = 'jsx' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden my-4 bg-white shadow-sm">
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-300">
        <span className="font-medium text-gray-700">{title}</span>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      <div className={`bg-gray-900 p-4 text-white overflow-x-auto ${isCollapsed ? 'max-h-32' : ''} transition-all duration-300`}>
        <pre><code>{code}</code></pre>
      </div>
    </div>
  )
}