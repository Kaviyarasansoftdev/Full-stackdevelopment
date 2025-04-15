import React, { useState } from 'react'; 
import { toast } from 'react-toastify';

export default function Samples() {
  const [activeTab, setActiveTab] = useState('html');
  const [formType, setFormType] = useState('login');  
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'htmlCssJs') {
        toast.success(`${formType === 'login' ? 'Login' : 'Registration'} successful!`) 
    }
  };

  const toggleFormType = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFormType(formType === 'login' ? 'register' : 'login');
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col w-full h-full p-6 bg-gray-100">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-300">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'html' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
          onClick={() => setActiveTab('html')}
        >
          HTML Only
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'htmlCss' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
          onClick={() => setActiveTab('htmlCss')}
        >
          HTML + CSS
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'htmlCssJs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
          onClick={() => setActiveTab('htmlCssJs')}
        >
          HTML + CSS + JS
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {/* HTML Only Tab */}
        {activeTab === 'html' && (
          <div className="max-w-md mx-auto">
            <h2>HTML Only Login Form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className='bg-white border' required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className='bg-white border' required />
              </div>
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
              <div>
                <a href="#">Forgot password?</a>
              </div>
            </form>
          </div>
        )}

        {/* HTML + CSS Tab */}
        {activeTab === 'htmlCss' && (
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email-css">
                  Email Address
                </label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email" 
                  id="email-css" 
                  placeholder="you@example.com"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password-css">
                  Password
                </label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password" 
                  id="password-css" 
                  placeholder="••••••••"
                  required 
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-css" 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  />
                  <label htmlFor="remember-css" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                >
                  Sign In
                </button>
              </div>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        )}

        {/* HTML + CSS + JS Tab */}
        {activeTab === 'htmlCssJs' && (
          <div className="max-w-md mx-auto relative"> 

            <div className="perspective-1000">
              <div className={`relative bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-20"></div>
                <div className="p-8 relative z-10">
                  <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                    {formType === 'login' ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formType === 'register' && (
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="first-name">
                              First Name
                            </label>
                            <input 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                              type="text" 
                              id="first-name" 
                              placeholder="John"
                              required 
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="last-name">
                              Last Name
                            </label>
                            <input 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                              type="text" 
                              id="last-name" 
                              placeholder="Doe"
                              required 
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email-js">
                        Email Address
                      </label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        type="email" 
                        id="email-js" 
                        placeholder="you@example.com"
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password-js">
                        Password
                      </label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        type="password" 
                        id="password-js" 
                        placeholder="••••••••"
                        required 
                      />
                    </div>
                    
                    {formType === 'register' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirm-password">
                          Confirm Password
                        </label>
                        <input 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          type="password" 
                          id="confirm-password" 
                          placeholder="••••••••"
                          required 
                        />
                      </div>
                    )}
                    
                    {formType === 'login' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input 
                            id="remember-js" 
                            type="checkbox" 
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                          />
                          <label htmlFor="remember-js" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                          Forgot password?
                        </a>
                      </div>
                    )}
                    
                    <div>
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 font-medium"
                      >
                        {formType === 'login' ? 'Sign In' : 'Create Account'}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-6 text-center text-sm text-gray-600">
                    {formType === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button 
                      onClick={toggleFormType} 
                      className="font-medium text-blue-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {formType === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}