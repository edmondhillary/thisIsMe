import React from 'react';
import { Progress } from 'antd';
import './WebDeveloper.css';
import { useNavigate } from 'react-router-dom';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';


const WebDeveloper = () => {
const navigate = useNavigate()

  const skillsData = [
      { name: 'JAVASCRIPT ', percent: 85 },
      { name: 'React', percent: 75 },
      { name: 'JAVA / TYPESCRIPT / SQL / Rabbit  MQ', percent: 55 },
      { name: 'Mongo / Express / Node j.s', percent: 80 },
      { name: 'HTML5 / CSS / SASS', percent: 95 },
  ];

  return (
    <div>
    <div className='logo-container'>
          <span className='logo' onClick={()=>navigate('/')}>Sir Edwards</span>
        </div>
        <br />
        <br />
      <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>Skills</h2>
      <br />
      {skillsData.map((skill, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2 style={{ letterSpacing: '0.3rem' }}>{skill.name}</h2>
          <Progress
            percent={skill.percent}
            strokeColor={{
              from: '#27ae60',
              to: '#27ae60',
            }}
            format={(percent) => (
              <span style={{ color: '#FFFFFF' }}>{percent} %</span>
            )}
            trailColor="#212121"
          />
        </div>
      ))}
      <Experience/>
      <br /><br />
      <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>Projects</h1>      {/* //SEGUIR AÑADIENDO CONTENIDO//  */}
      <Projects/>
      <br /><br />
    </div>
  );
};

export default WebDeveloper;
