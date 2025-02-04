import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/todos', { title, isCompleted });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
