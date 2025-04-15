import React from 'react'
import { CodeDemo } from '../CodeDemo/CodeDemo';


export default function MobileDevelopment() {
  const reactNativeCode = `import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CounterApp;`;

  return (
    <div className="space-y-6 slide-in">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Development</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mobile Development Approaches</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-2 rounded-md">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Native</h3>
            </div>
            <p className="text-gray-600 text-sm">Platform-specific development using Swift/Objective-C (iOS) or Kotlin/Java (Android).</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">Best Performance</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">Platform Features</span>
              <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">Higher Cost</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-2 rounded-md">
                <span className="text-xl">⚛️</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Cross-Platform</h3>
            </div>
            <p className="text-gray-600 text-sm">Shared codebase for multiple platforms using React Native, Flutter, or other frameworks.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">Code Sharing</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">Faster Development</span>
              <span className="bg-yellow-50 text-yellow-600 text-xs px-2 py-1 rounded">Some Performance Trade-offs</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="bg-purple-100 p-2 rounded-md">
                <span className="text-xl">🌐</span>
              </div>
              <h3 className="ml-3 font-medium text-gray-800">Progressive Web Apps</h3>
            </div>
            <p className="text-gray-600 text-sm">Web applications that provide mobile app-like experiences with offline capabilities.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded">No App Store</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded">Web Technologies</span>
              <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">Limited Features</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Native Development</h2>
        <p className="text-gray-700 mb-4">React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.</p>
        
        <CodeDemo 
          title="React Native Counter App" 
          code={reactNativeCode}
          language="jsx" 
        />
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">React Native Key Concepts</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Native components instead of web components</li>
              <li>Platform-specific code with Platform module</li>
              <li>StyleSheet API for styling (similar to CSS)</li>
              <li>Native modules for accessing device features</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Mobile UI Considerations</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Touch-based interactions vs mouse/keyboard</li>
              <li>Screen size and density variations</li>
              <li>Platform UI guidelines (Material Design, iOS HIG)</li>
              <li>Performance and battery optimization</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mobile Development Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Key Mobile Technologies</h3>
            <div className="space-y-2">
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-800">React Native</h4>
                <p className="text-sm text-gray-600">JavaScript framework for building native mobile apps.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-800">Flutter</h4>
                <p className="text-sm text-gray-600">Google's UI toolkit for building natively compiled applications.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-800">Expo</h4>
                <p className="text-sm text-gray-600">Platform for making universal React applications, providing SDK access to device capabilities.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Mobile-specific Challenges</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Offline Support:</strong> Handling intermittent connectivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Device Fragmentation:</strong> Supporting various screen sizes and OS versions</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>App Store Guidelines:</strong> Navigating approval processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Push Notifications:</strong> Implementing effective user engagement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-800 mb-3">From Web to Mobile: Key Differences</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Web Development</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Development</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-4 py-3 font-medium">User Interface</td>
                  <td className="px-4 py-3">Mouse/keyboard focused</td>
                  <td className="px-4 py-3">Touch-centric interactions</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Hardware Access</td>
                  <td className="px-4 py-3">Limited (improving with PWAs)</td>
                  <td className="px-4 py-3">Extensive (camera, GPS, sensors)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Distribution</td>
                  <td className="px-4 py-3">Direct via URL</td>
                  <td className="px-4 py-3">App stores with approval process</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Updates</td>
                  <td className="px-4 py-3">Immediate</td>
                  <td className="px-4 py-3">App store approval required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
