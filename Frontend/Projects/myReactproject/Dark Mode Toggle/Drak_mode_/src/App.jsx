// src/App.jsx
import React from 'react';
import ThemeProvider from './components/ThemeContext'; // Import the ThemeProvider from components folder
import ThemeToggle from './components/ThemeToggle';   // Import the ThemeToggle component
import './app.css';  // Import custom Tailwind CSS and styles

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-8">
          Dark Mode Toggle App
        </h1>
        <div className="text-center">
          <ThemeToggle /> {/* Theme toggle button */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
