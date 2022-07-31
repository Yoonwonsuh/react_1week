import { createSlice } from '@reduxjs/toolkit'

let todos = createSlice({
    name: 'todos',
    initialState: [
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
    ],

    reducers: {
        addTodo: (state, action) =>{
           return state = [...state, action.payload]
        },
        onDeleteHanlder : (state, action) => {
           return state = state.filter((todo) => todo.id !== action.payload)
        },
        onEditHandler : (state, action) => {
            state.map((todo) => {
                if (todo.id === action.payload) {
                    return todo.isDone = !todo.isDone
                }
                else {
                    return state
                }
            }
            )
        },
        // findTodo: (state, action) =>{
        //     return state.find((todo)=> todo.id === action.payload)    
        //     }
        }
    
})

export let { addTodo, onDeleteHanlder, onEditHandler, findTodo, readTodo } = todos.actions
export default todos.reducer