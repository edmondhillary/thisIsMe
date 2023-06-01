import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Experience.scss";
import imgDent from "../../../public/dienticonok.png";
import mafaldaLogo from "../../../public/mafaldaLogo.png";
import theBridgeLogo from "../../../public/theBridge.png";
import humboldt from "../../../public/humboldt.png";
const Experience = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(
      ".experience-content.hidden"
    );

    hiddenElements.forEach((element) => {
      element.classList.remove("hidden");
    });
  }, []);

  const fadeIn = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -21 },
    config: { duration: 1000 },
  });

  return (
    <section style={{ color: "transparent" }} className='experience'>
      <div className='content'>
        <span style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <h1 style={{marginLeft: '2rem', fontSize: '25px', letterSpacing: '0.1rem'}} >Education IT</h1>
          <h1  style={{marginRight: '2rem', fontSize: '25px', letterSpacing: '0.1rem'}} >Work Experience</h1>
        </span>
        <ul>
          <li>
            <animated.div className='experience-content hidden' style={fadeIn}>
              <h2>Freelance - SoftDent </h2>{" "}
              <img
                style={{ width: "2rem", heigth: "2rem" }}
                src={imgDent}
                alt={imgDent}
              />
              <div className='experience-time'> 2022 - 2023 </div>
              <p style={{overflowX: 'scroll'}}>
                On the back-end, I work with Node.js, Express, and MongoDB,
                while the front-end is powered by React, SCSS, Tailwind CSS, and
                Ant Design. I recently developed and sold a dental software with
                scalable models for treatment, patients, appointments, and
                calendar. Deployed on AWS, Vercel, and Railway. The software's
                success is attributed to its comprehensive technology stack and
                user-friendly features.
              </p>
            </animated.div>
          </li>
          <li>
            <animated.div className='experience-content hidden' style={fadeIn}>
              <h2>The Bridge || Digital Talent Acelerator</h2>
              <img
                style={{ width: "40px", heigth: "70px" }}
                src={
                  "https://media.licdn.com/dms/image/D4D3DAQGBzJjv1nla9Q/image-scale_191_1128/0/1673263485427?e=1686088800&v=beta&t=sLZO9Uv2pDXMb95hFHdjaIJ7SC0ty8N2drWV0oAxDWw"
                }
                alt={theBridgeLogo}
              />
              <div className='experience-time'>2022</div>
              <p style={{overflowX: 'scroll'}}>
                Full Stack Web Development BootCamp, specializing in the MERN
                STACK +1000 hours of practical training in Full Stack web
                development. Front-end programming in JavaScript. Use of
                frameworks and databases such as MySQL and MongoDB. App
                deployment in a Cloud Testing environment. DevOps. Photoshop +
                Camera + Drone || The Core School 2021 United States Theory &
                training: cameras, drones, and Photoshop & Davinci Resolve
                Editing. Acquired skills in lens and objective management,
                capturing visuals, and advanced editing techniques. Proficient
                in photography and videography
              </p>
            </animated.div>
          </li>
          <li>
            <animated.div className='experience-content hidden' style={fadeIn}>
              <h2>Road & Manager Mafalda Band </h2>
              <img
                style={{ width: "2rem", heigth: "2rem" }}
                src={mafaldaLogo}
                alt={mafaldaLogo}
              />
              <div className='experience-time'>2022 - now </div>{" "}
              <p style={{overflowX: 'scroll'}}>
                Managed and coordinated an international band in the local music
                scene, specializing in logistics, communication, social media
                marketing, and event organization.
              </p>
            </animated.div>
          </li>
          <li>
            <animated.div className='experience-content hidden' style={fadeIn}>
              <h2>BigSeo academy </h2>{" "}
              <img
                style={{ width: "3rem", heigth: "3rem" }}
                src={
                  "https://yt3.googleusercontent.com/rhe8w_7rJdyMO-1O4WkdXQrTKs2MXemmKVE24-nvGW6wViJWTsI5s8KSdvoHU-LcRlyMf3nTYw=s900-c-k-c0x00ffffff-no-rj"
                }
                alt={"bigSeo"}
              />
              <div className='experience-time'>2017-2018</div>
              <p style={{overflowX: 'scroll'}}>
                I utilized my expertise in TSA, Sendinblue, Hubspot, and Google
                Analytics to manage successful digital marketing campaigns. I
                developed visually appealing websites using WordPress,
                optimizing them with SEO and web analytics. I created visually
                engaging content using Canva and effectively collaborated within
                teams using Slack.
              </p>
            </animated.div>
          </li>
          <li>
            <animated.div className='experience-content hidden' style={fadeIn}>
              <h2>Humboldt Boyz TLL </h2>{" "}
              <img
                style={{ width: "2rem", heigth: "2rem" }}
                src={humboldt}
                alt={humboldt}
              />
              <div className='experience-time'>2016 - 2021 </div>
              <p style={{overflowX: 'scroll'}}>
                Experienced in property management and administration,
                marketing, SEO, social media management, and economic
                management. Skilled in leading and managing teams of over 30
                individuals.
              </p>
            </animated.div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
