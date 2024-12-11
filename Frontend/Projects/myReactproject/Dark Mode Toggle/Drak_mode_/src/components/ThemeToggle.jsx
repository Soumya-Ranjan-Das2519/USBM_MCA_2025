// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the context

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the context

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded-full focus:outline-none"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
};

export default ThemeToggle;
