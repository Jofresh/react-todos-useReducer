import { v4 as uuid } from "uuid";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// `state` arg should be called `todos`
// action : { type, payload: { <args> }}
export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          name: action.payload.name,
          completed: false,
        },
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
