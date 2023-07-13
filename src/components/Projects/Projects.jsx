import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Projects.scss";
import Card from "./Card";
import ModalProject from "./ModalProject";
import imgPortfolio from "../../../public/imgPortCard.jpg";

const Projects = () => {
  return (
    <>
      <br />
      <br />
      <div className='portfolio-cards--container'>
        <Card
          color={"lightgray"}
          id={uuidv4()}
          title='Nomad'
          description='Social Network'
          imgUrl='https://www.jumpplus.com/web/image/1124866-49bb3144/nomadbanner-1.jpg?access_token=2d50ce3f-bc2f-471c-bd35-b142c15d265b'
          modalContent={
            <ModalProject
              title='Nomad'
              subtitle='Social Network for NOMADS'
              videoUrl='https://www.youtube.com/watch?v=-oA1dQe1qTs'
              text='The final project of The Bridge | Digital Talent Accelerators Crews, carried out by the team composed of Christian Meneses Álvarez, Daniel Caro, Charlotte Diaz Díaz, Laura Maria Döhle, Alberto Soto, and myself, the cybersecurity and data science team, consists of a social network called Nomad. 🌍🔒🧪

              This application allows users to create posts, comments, edit them, and delete them. Additionally, users can follow other "digital nomads" and unfollow them. The posts created on Nomad can contain AI-generated images, and a data science team-developed algorithm analyzes the content to determine the sentiment expressed in each post in the form of an icon (happy, fearful, neutral, and sad). ✍️📸🔬😊😨😐😢
              
              The application also has a countries section where users can find relevant information for digital nomads, such as data and graphics. Furthermore, if they are considering visiting a country, they can see people who have already visited it to gather information and ask them about their experiences since we, the Full Stack team, took care of creating a chat with WebSockets. Users can also add the countries they have visited to their profile to share their experiences. 🌎📊💬🌍
              
              In the posts section on the homepage, the data science team has created an algorithm to suggest friendships based on users` interests. 📝👥
              
              The cybersecurity team audited the code using processes that include Pen Testing, CD/CI tests, and guided us in the process of maintaining clean, appropriate, and secure code, both in the backend and frontend. 🔒👨‍💻🔍
              
              Finally, the team expresses gratitude to the FS professors, Jonathan Hidalgo Mora and Sofía Pinilla, for their support in carrying out the project and throughout the BootCamp. Along with Germán Molero Torrente, they accompanied us throughout the year, and without them, it would have been impossible. 🙏👨‍🏫👩‍🏫
              
              Simply put, THANK YOU! 🙌🎉
              
              GitHub links:
              🔗 https://lnkd.in/dA6mcRZ4
              🔗 https://lnkd.in/d2mBVbd5
              
              Tools, languages, and frameworks used: JavaScript, MongoDB, Mongoose, React, AntDesign, SASS, Python, CSS, Node.js, Express, Swagger, JWT, OpenAI, HTML5. 💻📚🔧🔗'
              urlFront={'https://github.com/edmondhillary/nomadSociety-frontEnd-'}
              urlBack={'https://github.com/edmondhillary/NOMAD-BACKEND'}
            />
          }
        />
        <Card
          id={uuidv4()}
          color='lightgray'
          title='SoftDent'
          description='Dental Software'
          imgUrl='https://www.appandweb.es/wp-content/uploads/2022/08/post-tipossoftware-Appandweb.jpg'
          modalContent={
            <ModalProject

              title='SoftDent'
              subtitle='Dental Clinic Software'
              videoUrl='https://www.youtube.com/watch?v=IW8zkPQlZIY'
              text='This software is a web application designed for dental clinic management. It provides different views depending on the user s role, whether they are an employee, administrator, or superadmin (the owners of the company). 💻🏥

              In each employee  s profile, users can access information about the treatments they have performed (for employees/administrators), scheduled appointments, invoices, and patients. All of these features are properly paginated in both the front-end and back-end of each tab, ensuring scalability for the company. 📄📊
              
              Additionally, the application includes a patient search feature that is always visible in the application s header, alongside the navigation buttons in the navbar and the button to add new patients in the top right corner. Within the navigation navbar, there are different lists of employees and patients, each with its own pagination and links to the respective profiles of patients and employees (only accessible by superadmins). ⚙️🔍
              
              Further navigation leads to the Calendar component, which specifically marks each employee  s assigned schedule. There are also validations in place to prevent appointments from being scheduled in the past or overlapping for the same employee. 📅❌
              
              The application also provides access to a list of treatments along with their respective prices. For superadmins, it is particularly useful to have a monthly billing overview for the clinic, which is presented on a month-by-month basis. The billing overview includes the total revenue generated and the sum of outstanding payments. 💰💼
              
              If more information is required about delinquent patients, the corresponding section provides details on patients with treatments that have not been fully paid. Additionally, exclusive to superadmins, there are graphs that depict the most common treatments, the number of initial visits made each month, and a summary of total visits for a chosen year. Another graph displays the age range and gender distribution of patients, providing valuable insights for marketing purposes and helping to focus marketing efforts effectively. 📈📊📋
              
              In the patient view, there are three tabs available to access the patient s billing history, scheduled and/or past appointments, and the odontogram. The odontogram allows for the creation of treatments for specific teeth or the entire mouth. Users can also view information about completed treatments, the responsible provider, the completion date, and whether the treatment has been invoiced. The patient  s card displays details such as age, name, gender, phone number, profession, ID number, medical conditions, allergies, email, dental history, and more. Additionally, options to delete, edit, and view patient and employee profiles are provided. 💳👥
              
              In summary, this project entails a comprehensive dental clinic management application, offering various features tailored to different user roles. It streamlines the organization and administration of treatments, appointments, invoices, and patients. 🏥💻💡 '
              urlFront={'https://github.com/edmondhillary/dental-dashboard-FRONTEND'}
              urlBack={'https://github.com/edmondhillary/dental-dashboard-BACKEND'}
              />
          }
        />

        <Card
          color='lightgray'

          id={uuidv4()}
          title='Portfolio'
          description='I love what I do'
          imgUrl={'https://previews.123rf.com/images/cherezoff/cherezoff1601/cherezoff160100293/50192566-codificaci%C3%B3n-de-la-aplicaci%C3%B3n-por-el-desarrollador-programador-c%C3%B3digo-de-programaci%C3%B3n-abstracta.jpg'}
          modalContent={
            <ModalProject
              title='Portfolio'
              subtitle='Portfolio Eduardo Gonzalez'
              videoUrl='https://www.youtube.com/watch?v=lx3oshaV4YM'
              text='This is my portfolio '
              urlFront={'https://github.com/edmondhillary/thisIsMe/tree/main'}
            />
          }
        />
        <Card
          color='darkgray'
          id={uuidv4()}
          title='Ecommerce'
          description='Surf Ecommerce '
          imgUrl='https://trilogi.com/blog/wp-content/uploads/sites/2/ecommerce2.jpg'
          modalContent={
            <ModalProject
              title='Ecommerce'
              subtitle='Ecommerce Description '
            //   videoUrl='https://www.youtube.com/watch?v=HoVH-xEAkS4'
            //   text='Lorem ipsum bal abjbd jb dfhb hdbhjbd  hd hhud dhg hdhv dfshv  dhv uyf  ds dsfh dhu d       dh d hdshu frg tfh ju jt uyj hn hj '
            />
          }
        />
          <Card
          color='darkgray'
          id={uuidv4()}
          title='🏠 Clon de FotoCasa 📸 '
          description='Clon fotocasa'
          imgUrl='https://brandemia.org/sites/default/files/inline/images/fotocasa_logo_portada.jpg'
          modalContent={
            <ModalProject
              title='🏠 Clon de FotoCasa: ¡Tu hogar virtual!📸 '
              subtitle='Copia'
              text={`¡Descubre mi clon de FotoCasa! 🏡📸 He creado una réplica de la página web de FotoCasa, enfrentándome a algunos imprevistos que he logrado solucionar con éxito. Algunas de las imágenes originales estaban guardadas localmente, así que utilicé Photoshop para incorporarlas en mi clon

              Para lograr la autenticidad, inspeccioné minuciosamente el código de la página original y lo dividí en secciones, tal como lo hace FotoCasa, incluyendo el encabezado y el pie de página. Además, todos los logotipos y gráficos SVG los extraje directamente de la página web de FotoCasa, agregando un toque de realismo.
              
              ¡Espero que les guste y valoren el arduo trabajo que conlleva crear una página de inicio tan completa como esta! 🙌🏻😊`}
              videoUrl={'https://www.youtube.com/watch?v=-2-hOzYiheU'}
              urlFront={'https://github.com/edmondhillary/fotocasa-clone'}
            />
          }
        />
      </div>
    </>
  );
};

export default Projects;
