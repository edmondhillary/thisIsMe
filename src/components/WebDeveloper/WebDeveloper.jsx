import React from "react";
import { Progress } from "antd";
import "./WebDeveloper.css";
import { useNavigate } from "react-router-dom";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import { PandaIcon } from "../Header/Header";

const WebDeveloper = () => {
  const navigate = useNavigate();

  const skillsData = [
    { name: "JAVASCRIPT / REACT ", percent: 75 },
    // { name: "React", percent: 75 },
    { name: "JAVA / TYPESCRIPT / SQL / Rabbit  MQ", percent: 50 },
    { name: "Mongo / Express / Node j.s", percent: 80 },
    { name: "HTML5 / CSS / SASS", percent: 95 },
  ];

  return (
    <div>
      <div className='logo-container'>
        {/* <span className='logo'>Sir Edwards</span> */}
        <PandaIcon
          onClick={() => navigate("/")}
          style={{
            position: "fixed",
            left: "3rem",
            fontSize: "46px",
          }}
        />
      </div>
      <br />
      <br />
      <h2
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        Skills
      </h2>
      <br />
      {skillsData.map((skill, index) => (
        <div key={index} style={{margin: '3rem', marginBottom: "20px" }}>
          <h2 style={{ letterSpacing: "0.3rem" }}>{skill.name}</h2>
          <Progress
            percent={skill.percent}
            strokeColor={{
              from: "#D9B6DF",
              to: "#D9B6DF",
            }}
            format={(percent) => (
              <span style={{ color: "#FFFFFF" }}>{percent} %</span>
            )}
            trailColor='#212121'
          />
        </div>
      ))}
      <Experience />
      <br />
      <h1
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        Projects
      </h1>
      <br />
      <br /> {/* //SEGUIR AÑADIENDO CONTENIDO//  */}
      <Projects />
      <br />
      <br />
    </div>
  );
};

export default WebDeveloper;
