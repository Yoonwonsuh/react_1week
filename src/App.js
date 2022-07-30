import React, { Component } from "react"
import TodoList from "./pages/TodoList"
import Detailtodo from "./pages/Detailtodo"
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/detail/:id" element={<Detailtodo />}>
        <Route path=":id" element={<div>서아무개 입니다.</div>} />
        <Route path="myage" element={<div>**살 입니다.</div>} />
      </Route>
      <Route path="*" element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  )
}

export default App;
