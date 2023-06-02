import React from "react";
import Skills from "../Skills/Skills";
import iconCamera from "../../../public/iconoCamera.png";
import iconsWeb from "../../../public/iconsWeb.png"
import { GlobalOutlined, YoutubeOutlined } from "@ant-design/icons";


const Services = () => {



  return (
    <section id='services'>
      <div className='services-container'>
        <h2 className='section-title'>What I do</h2>
        <div className='skills-container'>
          <Skills   
           route='dev'
          icon={<GlobalOutlined style={{color:'#D9B6DF'}}/>} textUp='Web' textDown='Developer'  />
          <Skills
          route='audiovisuals'
          icon={<YoutubeOutlined style={{color:'#D9B6DF'}} />} 
            
            textUp='Content'
            textDown={'   Creator  + MD '}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
