// TodoList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { deleteAllTodos } from './Todo'; // Importa la acción para eliminar todas las tareas

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); // Obtiene la función dispatch

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos()); // Llama a la acción para eliminar todas las tareas
  };

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
      <button className='eliminar' onClick={handleDeleteAll}>Eliminar Todas</button> {/* Botón para eliminar todas las tareas */}
    </div>
  );
};

export default TodoList;
