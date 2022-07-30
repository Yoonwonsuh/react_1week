import React, { useState, useRef, useEffect } from "react";
import { addTodo } from "../../redux/modules/Todo";
import { useDispatch } from "react-redux";
import shortId from 'shortid';
import "./style.css";

function Form() {

  const dispatch = useDispatch();
  const shortid = shortId.generate();

  const inputRef = useRef();
  useEffect(() =>{
    inputRef.current.focus();
  },[]);



  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id:shortid});
  };

  const onSubmitHandler = (event) => {

    if (todo.title === '') {
      event.preventDefault();
      alert('제목을 입력하세요!!!!');
    }

    else if(todo.body===''){
      event.preventDefault();
      alert('내용을 입력하세요!!!');
    }

    else {
      event.preventDefault();
      dispatch(addTodo(todo, shortid));
      setTodo(initialState)

      console.log(todo);
    }


  };

  return (
    <form onSubmit={onSubmitHandler} className="gray-nav">
      <div className="input-group">
        <label className="font-label">제목</label>
        <input
          ref={inputRef}
          type="text"
          name="title"
          value={todo.title}
          placeholder="제목을 입력하세요!"
          onChange={onChangeHandler}
        />
        <label className="font-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          placeholder="내용을 입력하세요!"
          onChange={onChangeHandler}
        />
      </div>
      <button className="button-add">추가하기</button>
    </form>
  );
}

export default Form;
