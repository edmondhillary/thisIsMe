import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "+34617680026"; // Reemplaza con tu número de teléfono
    const message =
      "Hola, estoy interesado en tus servicios, ¿Podríamos concretar una cita?"; // Mensaje opcional
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <header>
      <div className='logo-container'>
        <span className='logo'>Sir Edwards</span>
      </div>
      <nav>
       
        <a href='#services' className='nav-link'>
          Services
        </a>
        <a href='#skills' className='nav-link'>
          Languages
        </a>
        <Link to={"/dev"} className='nav-link'>
          {" "}
          Experience 
        </Link>
        <a href='#contact' className='nav-link' onClick={handleWhatsApp}>
          Contact
        </a>
        <a href='#about' className='nav-link'>
          About me
        </a>
      </nav>
    </header>
  );
};

export default Header;
