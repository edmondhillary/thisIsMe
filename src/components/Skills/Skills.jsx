import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Skills = ({ src, textUp, textDown, route }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/${route}`);
    window.scrollTo(0, 0); // Ajustar la posición de desplazamiento a la parte superior
  };
  return (
    <div
      onClick={handleRedirect}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "350px",
        height: "314px",
      }}
      className='skill-card'
    >
      <img className='skill-icon' src={src} alt={src} />
      <span className='skill-name'>
        {textUp} <br />
        {textDown}
      </span>
      <Button type='secondary' size='large' style={{ color: "#fff" }}>
        + Info
      </Button>
    </div>
  );
};

export default Skills;
