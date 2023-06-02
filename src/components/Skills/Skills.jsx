import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Skills = ({  textUp, textDown, route , icon}) => {
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
      <span className='skill-icon' > {icon}</span>
      <span  className='skill-name'>
        {textUp} <br />
        {textDown}
      </span>
      <Button type='secondary' size='large' style={{ color: "#fff" }}>
        <MoreOutlined rotate={90} style={{color: "#D9B6DF",fontSize:'30px'}} />
      </Button>
    </div>
  );
};

export default Skills;
