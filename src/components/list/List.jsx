import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { onDeleteHanlder, onEditHandler } from "../../redux/modules/Todo"



function List() {

  let todos = useSelector((state) => state.todos)
  console.log(todos)
  let navigate = useNavigate();
  let dispatch = useDispatch()
   
  return (
    <div className="list-box">
      <h2 className="list-title">Working.. 🌈</h2>
      <div className="todo-contents">
        <>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <div className="todo-box" key={todo.id}>
                  <div>
                    <div className="linkbox">
                      <div className="gage"></div>
                      <h3 className="detail-link" onClick={()=>{navigate(`/detail/${todo.id}`)}} key={todo.id}>상세보기 &rarr;</h3>
                    </div>
                    <h2>{todo.title}</h2>
                    <div>{todo.body}</div>
                  </div>
                  <div className="button-set">
                    <button
                      className="clear-button"
                      onClick={() => { dispatch(onDeleteHanlder(todo.id)) }}
                    >
                      삭제하기
                    </button>
                    <button
                      className="done-button"
                      onClick={() => { dispatch(onEditHandler(todo.id)) }}
                    >
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
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
              <div className="todo-box" key={todo.id}>  
                <div>
                <div className="linkbox">
                      <div className="gage"></div>
                      <h3 className="detail-link" onClick={()=>{navigate(`/detail/${todo.id}`)}} key={todo.id}>상세보기 &rarr;</h3>
                    </div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="clear-button"
                    onClick={() => { dispatch(onDeleteHanlder(todo.id)) }}
                  >
                    삭제하기
                  </button>
                  <button
                    className="done-button"
                    onClick={() => { dispatch(onEditHandler(todo.id)) }}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </div>
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

