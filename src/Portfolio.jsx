
import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import TecnichSkills from "./components/Skills/TecnichSkills";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contact/ContactForm";

const Portfolio = () => {
    return (
        <>
        <Header />
        <Main/>
        <About /> 
        <Services />
        <TecnichSkills />
        {/* <ContactForm/> */}
        <Footer />
        </>
    );
};

export default Portfolio;