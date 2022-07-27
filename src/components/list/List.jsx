import React from "react";
import Todo from "../todo/todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-box">
      <h2 className="list-title">Working.. 🌈</h2>
      <div className="todo-contents">
        <>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  onDeleteHanlder={onDeleteHanlder}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </>
      </div>
      <h2 className="list-title">Done..<span style={{ color: "green" }}>✔</span></h2>
      <div className="todo-contents">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
