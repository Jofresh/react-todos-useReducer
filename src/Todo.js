import React from 'react';
import { ACTIONS } from './TodoReducer';

export default function Todo({ todo, dispatch }) {
  function toggleTodo() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }

  function deleteTodo() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  }

  return (
    <div className={`todo-item${todo.completed ? '--completed' : ''}`}>
      <span className="todo-item__name">{todo.name}</span>
      <button className="todo-item__toggle" onClick={toggleTodo}>
        Toggle
      </button>
      <button className="todo-item__delete" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}
