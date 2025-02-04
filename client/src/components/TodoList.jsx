import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get('/todos');
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      await axios.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/add">Add Todo</Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.isCompleted ? 'Completed' : 'Pending'}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            <Link to={`/edit/${todo._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
