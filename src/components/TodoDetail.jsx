// TodoDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TodoDetail = ({ todos, onDelete }) => {
  const { index } = useParams();
  const todo = todos[parseInt(index)];

  if (!todo) {
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <Link to="/todolist">Volver a la lista de tareas</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      <p><strong>Título:</strong> {todo.title}</p>
      <p><strong>Descripción:</strong> {todo.description}</p>
      <p><strong>Fecha de Creación:</strong> {todo.creationDate}</p>
      <button onClick={() => onDelete(parseInt(index))}>Eliminar</button>
      <Link className='boton' to="/todolist">Volver a la lista de tareas</Link>
    </div>
  );
};

export default TodoDetail;
