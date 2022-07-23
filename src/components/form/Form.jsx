import React, { useState } from "react";
import "./style.css";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler} className="gray-nav">
      <div className="input-group">
        <label className="font-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label className="font-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </div>
      <button className="button-add">추가하기</button>
    </form>
  );
}

export default Form;
