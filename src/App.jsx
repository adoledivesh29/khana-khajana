// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import "./styles/index.scss"; // global styles

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </Router>
  );
}

export default App;