import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      const { data } = await axios.get(`/todos/${id}`);
      setTitle(data.title);
      setIsCompleted(data.isCompleted);
    };
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/todos/${id}`, { title, isCompleted });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Todo</h1>
      <input
        type="text"
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
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTodo;
