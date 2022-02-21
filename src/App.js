import React from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;
