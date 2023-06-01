import React from "react";
import Skills from "../Skills/Skills";
import iconCamera from "../../../public/iconoCamera.png";
import iconsWeb from "../../../public/iconsWeb.png"


const Services = () => {



  return (
    <section id='services'>
      <div className='services-container'>
        <h2 className='section-title'>What I do</h2>
        <div className='skills-container'>
          <Skills   
           route='dev'
          src={iconsWeb} textUp='Web' textDown='Developer'  />
          <Skills
          route='audiovisuals'
          src={iconCamera} 
            
            textUp='Content'
            textDown={'   Creator '}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
