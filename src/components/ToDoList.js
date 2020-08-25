import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
  const initialState = [
    'sleep',
    'eat',
    'coding',
    'pee',
  ]
  const [tasks, setTasks] = useState(initialState);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTask = (value) => {
    // 新增 item...
    setTasks([ ...tasks, value ])
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <ToDoItem task={task} deleteTask={() => deleteTask(index)} />
      ))}
      <ToDoForm addTask={addTask} />
    </div>
  );
};

export default ToDoList;