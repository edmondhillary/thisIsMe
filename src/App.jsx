import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import TecnichSkills from "./components/Skills/TecnichSkills";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contact/ContactForm";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

   <Routes/>
    </BrowserRouter>
    
  );
}

export default App;
