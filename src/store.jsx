import { configureStore, createSlice } from '@reduxjs/toolkit'

let todotables = createSlice({
    name : 'todotables',
    initialState : [
        {
          id: 1,
          title: "리덕스 공부하기",
          body: "리덕스 기초를 공부해봅시다.",
          isDone: false,
        },
        {
          id: 2,
          title: "라우트 공부하기",
          body: "라우트 기초를 공부해봅시다.",
          isDone: true,
        },
        {
            id: 3,
            title: "9시에 쫑파티",
            body: "전까지 리덕스좀 해봅시다.",
            isDone: true,
          },
      ]
})


export default configureStore({
  reducer: { 
     todotables : todotables.reducer
  }
}) 