import React from 'react';
import UserList from './components/UserList';  // Importing UserList component
import './app.css';  // Import custom Tailwind CSS and styles

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Users List</h1>
      <UserList />
    </div>
  );
};

export default App;
