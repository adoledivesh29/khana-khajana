// src/router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRouter;