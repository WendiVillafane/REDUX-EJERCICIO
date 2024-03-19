import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TodoNew from './components/TodoNew';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './components/Todo'; 
import Store from './components/Store';


const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

function App() {
  return (
    
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/tododetail/:index"
            element={<TodoDetail />}
          />
          <Route
            path="/todolist"
            element={<TodoList />}
          />
          <Route
            path="/todonew"
            element={<TodoNew />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
