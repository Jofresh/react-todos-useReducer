import { useState, useReducer } from "react";
import Todo from "./Todo";
import reducer, { ACTIONS } from "./TodoReducer";

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo();
    setName("");
  }

  function addTodo() {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
  }

  return (
    <div className="todo-app">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-form__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div className="todos-list">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}
