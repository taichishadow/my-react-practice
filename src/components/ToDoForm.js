import React, { useState, useEffect } from 'react';

const ToDoForm = ({ addTask }) => {
  const [value, setValue] = useState('');
  
  let button_block = false;
  if(value === 'fuck') {
    button_block = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      addTask(value);
    }

    // 清空 input
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="submit" value="送出" disabled = {button_block} />
    </form>
  );
};

export default ToDoForm;