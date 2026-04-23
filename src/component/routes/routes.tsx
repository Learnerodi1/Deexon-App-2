import React,{Component, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { BodyLayout } from "../body/bodyLayout";

export const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<BodyLayout/>} >
            
            </Route>
        </Routes>
        </>
    )
}