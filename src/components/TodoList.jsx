// TodoList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos, onViewDetails }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {todos.map((todo, index) => (
          <li className='separador' key={index}>
            <span className='title'>{todo.title}</span>
            <Link className='boton' to={`/tododetail/${index}`}>Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
