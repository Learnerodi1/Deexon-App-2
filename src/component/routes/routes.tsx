import React,{Component, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { BodyLayout } from "../body/bodyLayout";
import { Home } from "../pages/Homepage/home";

export const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<BodyLayout/>} >
            <Route index element={<Home/>} />
            </Route>
        </Routes>
        </>
    )
}