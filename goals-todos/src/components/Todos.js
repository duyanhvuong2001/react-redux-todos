import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../actions/todos";

import List from "./List";

import { useRef } from "react";

import { connect } from "react-redux";

const Todos = (props) => {
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    props.dispatch(
      handleAddTodo(inputRef.current.value, () => {
        inputRef.current.value = "";
      })
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect((state) => ({ todos: state.todos }))(Todos);
