import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import ToDoEmpty from './ToDoEmpty';

const ToDoList = () => {
  const initialState = []
  const [tasks, setTasks] = useState(initialState);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTask = (value) => {
    setTasks([ ...tasks, value ])
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <ToDoItem key={task} task={task} deleteTask={() => deleteTask(index)} />
      ))}
      <ToDoEmpty />
      <ToDoForm addTask={addTask} />
    </div>
  );
};

export default ToDoList;