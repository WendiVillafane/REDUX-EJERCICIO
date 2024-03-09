// App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TodoNew from './components/TodoNew';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/tododetail/:index"
          element={<TodoDetail todos={todos} onDelete={handleDeleteTodo} />}
        />
        <Route
          path="/todolist"
          element={<TodoList todos={todos} />}
        />
        <Route
          path="/todonew"
          element={<TodoNew onTodoAdd={addTodo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
