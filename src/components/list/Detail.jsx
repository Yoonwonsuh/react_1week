import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaReply } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';




const DetailLayout = styled.div`
display: flex;
justify-content: space-between;
vertical-align: center;
margin-top: 50px;
`

const LeftArrow =styled.div`
display:flex;
position: relative;
justify-content: center;
vertical-align: center;
margin: auto;
font-size: 70px;

`
const RightArrow = styled.div`
position: relative;
justify-item: center;
vertical-align: center;
margin: auto;
font-size: 70px;
`

const DetailBox = styled.div`
width: 400px;
height: 200px;
border: 2px solid;
border-color: #E782FF;
border-radius: 20px;
margin-top: 20px;
padding: 40px;
position: relative;
`;

const IdBox = styled.div`
display: flex;
width: 100%
position: absolute;
font-weight: bold;
font-size: 40px;
justify-content: space-between;
`

const IdText = styled.div`
position: relative;
`
const XBox = styled.div`
position: relative;
font-weight: thin;
float: right;
margin-right: 10px;
`


const BodyBox = styled.div`
display: block;
position: relative;
border: 2px solid #d2d2d2;
border-radius: 10px;
height: 70%;
padding: 10px;
`

const Title = styled.div`
font-weight: bold;
font-size: 20px;
`

const Body = styled.div`
margin-top: 30px;
`




function Detail() {

    const navigate = useNavigate();




    let todos = useSelector((state) => state.todos)
    const { id } = useParams();

    const todo = todos.find((todo) => todo.id == id);
    const todoLength = todos.findIndex((a) => a.id == id);

    const leftId = todoLength==0 ? null : todos[todoLength-1].id
    const rightId = todoLength==todos.length-1 ? null : todos[todoLength+1].id

    return (
        <DetailLayout>
            <LeftArrow>
            {leftId===null ?'' :
            <FaChevronLeft onClick={()=>{navigate(`/detail/${leftId}`)}}/>
           } 
           </LeftArrow>
            <DetailBox>
                <IdBox>
                <IdText>ID: {todo.id}</IdText>

                <XBox onClick={()=>{navigate('/')}}><FaReply /></XBox>
                </IdBox>
                <BodyBox>
                    <Title>제목: {todo.title}</Title>
                    <Body>내용: {todo.body}</Body>
                </BodyBox>
            </DetailBox>
            <RightArrow>
            {rightId===null ? '': 
            <FaChevronRight onClick={()=>{navigate(`/detail/${rightId}`)}}/>
            }
            </RightArrow>
        </DetailLayout>


    )
}

export default Detail;
