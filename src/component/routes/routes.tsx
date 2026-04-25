// import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BodyLayout } from "../body/bodyLayout";
import { Home } from "../pages/Homepage/home";
import { ServicesPage } from "../pages/Services/service";
import { AboutPage } from "../pages/About/about";
import { ConsultationPage } from "../pages/reservation/reservation";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BodyLayout />} >
                    <Route index element={<Home />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="consultation" element={<ConsultationPage />} />
                </Route>
            </Routes>
        </>
    )
}