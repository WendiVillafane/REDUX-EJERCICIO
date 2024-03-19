import { createSlice } from '@reduxjs/toolkit'; 

const Todo = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = Todo.actions; 
export default Todo.reducer; 
