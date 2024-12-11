import React, { useContext, useRef } from 'react';
import { TaskContext } from './TaskProvider';
import './TaskInput.css'

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const inputRef = useRef();

  const handleAddTask = () => {
    const taskText = inputRef.current.value.trim();
    if (taskText) {
      addTask(taskText);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Add a task" />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;