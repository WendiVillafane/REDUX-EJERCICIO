import { createSlice } from '@reduxjs/toolkit';

const Todo = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },
    deleteAllTodos: (state) => {
      state.splice(0, state.length);
    },
    // Nueva acción para cambiar el estado de una tarea
    toggleTodoStatus: (state, action) => {
      const index = action.payload;
      state[index].completed = !state[index].completed;
    },
  },
});

export const { addTodo, deleteTodo, deleteAllTodos, toggleTodoStatus } = Todo.actions;
export default Todo.reducer;
