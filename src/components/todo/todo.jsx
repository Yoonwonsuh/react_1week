import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  return (
    <div className="todo-box">
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="clear-button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="done-button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
