// TodoDetail.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useParams, Link } from 'react-router-dom';
import { deleteTodo } from './Todo';

const TodoDetail = () => {
  const { index } = useParams();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); 

  const todo = todos[parseInt(index)];

  if (!todo) {
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <Link to="/todolist">Volver a la lista de tareas</Link>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(deleteTodo(parseInt(index))); 
  };

  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      <p><strong>Título:</strong> {todo.title}</p>
      <p><strong>Descripción:</strong> {todo.description}</p>
      <p><strong>Fecha de Creación:</strong> {todo.creationDate}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <Link className='boton' to="/todolist">Volver a la lista de tareas</Link>
    </div>
  );
};

export default TodoDetail;
