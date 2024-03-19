// TodoNew.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addTodo } from './Todo';
function TodoNew() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creationDate, setCreationDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreationDateChange = (event) => {
    setCreationDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      title: title,
      description: description,
      creationDate: creationDate,
    };
    dispatch(addTodo(newTodo)); 
    setTitle('');
    setDescription('');
    setCreationDate('');
  };

  return (
    <div>
      <h2>Nuevo Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='titulo'> Título:</label>
          <input className='cuadro' type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label className='titulo' >Descripción:</label>
          <textarea  className='cuadro'  value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label className='titulo'>Fecha de Creación:</label>
          <input  className='cuadro' type="date" value={creationDate} onChange={handleCreationDateChange} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default TodoNew;
