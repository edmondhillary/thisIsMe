import React from "react";
import { useNavigate } from "react-router-dom";
import CommingSoon from "../ComingSoon/ComingSoon";
import { HomeOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

// import ContentCreator from '../ContentCreator/ContentCreator';
import { Tiles } from "../ContentCreator/Tiles";
import "../ContentCreator/ContentCreator.scss";
import Card from "../Projects/Card";
import ModalProject from "../Projects/ModalProject";
import { PandaIcon } from "../Header/Header";
const Audiovisuals = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className='logo-container'>
          <span className='logo' onClick={() => navigate("/")}>
            <PandaIcon
              style={{
                position: "fixed",
                left: "3rem",
                fontSize: "48px",
              }}
            />
          </span>
        </div>
      </div>
      <div className='portfolio-cards--container'>
        <Card
          color={"tomato"}
          id={uuidv4()}
          title='Costa Rica '
          description='MARKETING AND CONTENT CREATOR'
          imgUrl='https://costarica.org/wp-content/uploads/2017/03/animals.jpg'
          modalContent={
            <ModalProject
              title='FULL HD'
              subtitle='Social Network for NOMADS'
              videoUrl='https://www.youtube.com/watch?v=HoVH-xEAkS4'
              text='
¡Bienvenidos a nuestro increíble viaje por Costa Rica! 🌅 En este video, te llevamos a explorar los hermosos paisajes de este exuberante país centroamericano, capturados desde el aire con drones y con nuestras cámaras en tierra. 🚁🎥

Desde las playas paradisíacas hasta las majestuosas montañas y cascadas, Costa Rica nos deslumbra con su biodiversidad y sus increíbles vistas panorámicas. 🏞️ 🌊

Nos enorgullece haber sido contratados para realizar una campaña publicitaria en este hermoso país, y queremos compartir contigo las maravillas que hemos capturado en video. 🌟🎬

Sumérgete en la belleza natural de Costa Rica mientras sobrevolamos sus selvas exuberantes, surcamos los ríos caudalosos y nos maravillamos con sus animales salvajes. 🦜🐒🌿

Únete a nosotros en esta aventura y déjate sorprender por los paisajes asombrosos y la diversidad de Costa Rica. ¡Prepárate para una experiencia inolvidable llena de emoción y belleza! 🌴😍

No olvides darle a "Me gusta", suscribirte a nuestro canal y compartir este video con tus amigos para que también puedan disfrutar de este viaje virtual por Costa Rica. ¡Gracias por acompañarnos en esta emocionante travesía! 🎉✈️🌎
            '
            />
          }
        />
        <Card
          color={"tomato"}
          id={uuidv4()}
          title='Padel'
          description='CONTENT CREATOR'
          imgUrl='https://worldpadeltour.com/assets/themes/worldpadeltour.com/img/posts/1679273075_Arturo%20Coello_Agust%C3%ADn%20Tapia_Chile%202023_Final_GP2_7019.jpg'
          modalContent={
            <ModalProject
              title='FULL HD'
              subtitle='Padel'
              videoUrl='https://www.youtube.com/watch?v=LT2amdINnHA'
              text='
¡Championship in Spain:

"We had a blast covering the 🏆 European Under-18 Padel Championship in Spain! 🎥🌍🎾 It was an incredible experience capturing the intense matches and showcasing the young talents in action. 📸✨ Stay tuned for the exciting highlights and behind-the-scenes footage of this thrilling tournament! 📽️🔥⚡️ #PadelChampionship #YouthPower"

Note: Emojis may not appear the same way on all devices or platforms, but the corresponding emoji names should be recognizable.! 🎉✈️🌎
            '
            />
          }
        />
      </div>
      <br /> <br />
      <Tiles />
    </>
  );
};

export default Audiovisuals;
