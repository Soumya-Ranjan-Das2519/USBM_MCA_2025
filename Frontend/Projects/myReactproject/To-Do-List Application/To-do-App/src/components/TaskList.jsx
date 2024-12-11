import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider';
import './TaskList.css'

const TaskList = () => {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;