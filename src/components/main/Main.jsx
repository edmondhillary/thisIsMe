import React from "react";
import imgPortfolio from "../../../public/fotoPortfolio.jpg";
import pdfCV from "../../../public/CVENGLISH.pdf";
import { WhatsAppOutlined } from "@ant-design/icons";

const Main = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdfCV;
    link.download = "CV.pdf";
    link.click();
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+34617680026"; // Reemplaza con tu número de teléfono
    const message = "Hola, estoy interesado en tus servicios, ¿Podríamos concretar una cita?"; // Mensaje opcional
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main>
      <div className='main-left'>
        <h1 className='welcome-text'>
          Hi, I am <br />
          Eduardo G
        </h1>
        <h3 className='job-text'>Full stack developer</h3>
        <div className='btn-container'>
          <button className='btn btn-primary' onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className='btn btn-secondary' onClick={handleWhatsApp}>
            <WhatsAppOutlined style={{ color: "#29AE60", fontSize: "25px" }} />
          </button>
        </div>
      </div>
      <div className='main-right'>
        <div className='image-container'>
          <img className='portrait' src={imgPortfolio} alt='edu,s portrait' />
        </div>
      </div>
    </main>
  );
};

export default Main;
