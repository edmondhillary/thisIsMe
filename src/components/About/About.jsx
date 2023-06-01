import React from "react";
import Description from "../Description/Description";
import SocialNets from "../Social/SocialNets";
import {
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    MailOutlined,
  } from "@ant-design/icons";
const About = () => {
  return (
    <section id='about'>
      <div className='about-container'>
        <Description />
      <div className='info-container'>
      <SocialNets
              link='https://www.linkedin.com/in/eduardo-gonzalez-fullstack/'
              antIconOutlined={
                <LinkedinOutlined
                  style={{ fontSize: "4rem", color: "#27ae60" }}
                />
              }
              socialNet='Linkedin'
              socialUser='Full Stack'
            />
            <SocialNets
              
              antIconOutlined={
                <MailOutlined
                  style={{ fontSize: "4rem", color: "#27ae60" }}
                />
              }
              socialNet='Email'
              socialUser='eduardog.carbonell@gmail.com'
            />
             <SocialNets
              link='https://www.instagram.com/nomadasporexcelencia/'
              antIconOutlined={
                <InstagramOutlined
                  style={{ fontSize: "4rem", color: "#27ae60" }}
                />
              }
              socialNet='Instagram'
              socialUser='@nomadasporexcelencia'
            />
             <SocialNets
              link='https://www.github.com/edmondhillary'
              antIconOutlined={
                <GithubOutlined
                  style={{ fontSize: "4rem", color: "#27ae60" }}
                />
              }
              socialNet='Github'
              socialUser='@edmondHillary'
            />
      </div>
      </div>
    </section>
  );
};

export default About;
