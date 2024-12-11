
import React from 'react';
import TaskProvider from './components/TaskProvider';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => (
  <TaskProvider>
    <h1>To-Do List</h1>
    <TaskInput />
    <TaskList />
  </TaskProvider>
);

export default App;