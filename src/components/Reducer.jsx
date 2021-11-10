import { useReducer, useState } from "react";

function reducerFun(state, action) {
  switch (action.type) {
    case "add-todo":
      return {todo:[...state.todo,{text:action.text,comleted:false}]}
    default:
     return state
  }
}

const Reducer = () => {
  const [{ todo }, dispatch] = useReducer(reducerFun, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div>
      <div>count:{todo}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decriment" })}>decriment</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "todo-list", text });
          setText(" ")
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <pre>{JSON.stringify(todo, null,2)}</pre>
    </div>
  );
};

export default Reducer;
