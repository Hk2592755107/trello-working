
import MainLayout from "@/Layouts/MainLayout.jsx";
import React from 'react'
import BoardList from "@/Pages/BoardList.jsx";
import Board from "@/Pages/Board.jsx";

const Index = () => {
    return (
        <>
            <MainLayout />
            <BoardList />
            <Board />

        </>
    )
}
export default Index

