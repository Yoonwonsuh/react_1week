import React, { Component } from "react"
import TodoList from "./pages/TodoList"
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoTable from "./pages/TodoTable"

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/about" element={<div>ABOUT 페이지 입니다.</div>}>
        <Route path="myname" element={<div>서아무개 입니다.</div>} />
        <Route path="myage" element={<div>**살 입니다.</div>} />
      </Route>
      <Route path="/detail" element={<TodoTable />} />
      <Route path="/detail/:num" element={<div>하하하</div>} />
      <Route path="*" element={<div>잘못된 접근입니다.</div>} />
    </Routes>


  )
}

export default App;
