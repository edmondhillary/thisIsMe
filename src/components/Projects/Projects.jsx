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
              urlFront={
                "https://github.com/edmondhillary/nomadSociety-frontEnd-"
              }
              urlBack={"https://github.com/edmondhillary/NOMAD-BACKEND"}
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
              urlFront={
                "https://github.com/edmondhillary/dental-dashboard-FRONTEND"
              }
              urlBack={
                "https://github.com/edmondhillary/dental-dashboard-BACKEND"
              }
            />
          }
        />
        <Card
          color='darkgray'
          id={uuidv4()}
          title='Agencia de viajes'
          description='Agencia de viajes,solo BACKEND'
          imgUrl='https://previews.123rf.com/images/khwaneigq/khwaneigq1902/khwaneigq190200068/118547099-destino-de-viaje-explorar-la-planificaci%C3%B3n-del-viaje-de-vacaciones-dise%C3%B1o-de-la-programaci%C3%B3n-de.jpg'
          modalContent={
            <ModalProject
              title='✈️ Back-end Agencia de Viajes: ¡La infraestructura detrás de tus aventuras!🌍'
              subtitle='Backend de Agencia'
              text={`¡Explora los entresijos del back-end de nuestra Agencia de Viajes! 🛫🌐 He diseñado y desarrollado la infraestructura detrás de cada aventura, gestionando notificaciones, modelos de booking, destinos, reviews de viajes, trips y usuarios.

    He implementado funcionalidades esenciales como las notificaciones para informar a los usuarios sobre cambios en sus reservas, o actualizaciones en los destinos populares. El sistema de reviews permite a los viajeros compartir sus experiencias y consejos, mientras que los modelos de booking garantizan transacciones fluidas y seguras.

    En cuanto a seguridad, he tomado medidas para proteger los datos de los usuarios, garantizando que sus detalles de viaje y perfiles sean tratados con el máximo cuidado y confidencialidad.

    ¡Espero que aprecies la robustez y la flexibilidad de este back-end y reconozcas el empeño y dedicación que implica construir la columna vertebral de una agencia de viajes tan completa! 🌟🌐`}
              videoUrl={'https://github.com/edmondhillary/travelAgency-BACKEND'}
              urlBack={"https://github.com/edmondhillary/travelAgency-BACKEND"}
            />
          }
        />
        <Card
          color='lightgray'
          id={uuidv4()}
          title='Portfolio'
          description='I love what I do'
          imgUrl={
            "https://previews.123rf.com/images/cherezoff/cherezoff1601/cherezoff160100293/50192566-codificaci%C3%B3n-de-la-aplicaci%C3%B3n-por-el-desarrollador-programador-c%C3%B3digo-de-programaci%C3%B3n-abstracta.jpg"
          }
          modalContent={
            <ModalProject
              title='Portfolio'
              subtitle='Portfolio Eduardo Gonzalez'
              videoUrl='https://www.youtube.com/watch?v=lx3oshaV4YM'
              text='This is my portfolio '
              urlFront={"https://github.com/edmondhillary/thisIsMe/tree/main"}
            />
          }
        />

        <Card
          color='darkgray'
          id={uuidv4()}
          title='Clon de FotoCasa'
          description='Clon fotocasa'
          imgUrl='https://s36027.pcdn.co/wp-content/uploads/2021/03/fotocasa-anuncio.jpg'
          modalContent={
            <ModalProject
              title='🏠 Clon de FotoCasa: ¡Tu hogar virtual!📸 '
              subtitle='Copia'
              text={`¡Descubre mi clon de FotoCasa! 🏡📸 He creado una réplica de la página web de FotoCasa, enfrentándome a algunos imprevistos que he logrado solucionar con éxito. Algunas de las imágenes originales estaban guardadas localmente, así que utilicé Photoshop para incorporarlas en mi clon

              Para lograr la autenticidad, inspeccioné minuciosamente el código de la página original y lo dividí en secciones, tal como lo hace FotoCasa, incluyendo el encabezado y el pie de página. Además, todos los logotipos y gráficos SVG los extraje directamente de la página web de FotoCasa, agregando un toque de realismo.
              
              ¡Espero que les guste y valoren el arduo trabajo que conlleva crear una página de inicio tan completa como esta! 🙌🏻😊`}
              videoUrl={"https://www.youtube.com/watch?v=-2-hOzYiheU"}
              urlFront={"https://github.com/edmondhillary/fotocasa-clone"}
            />
          }
        />

        <Card
          color='darkblue'
          id={uuidv4()}
          title='Calendario React 📅'
          description='Construcción de un calendario desde cero con React JS y SCSS'
          imgUrl='https://pypaprint.com/wp-content/uploads/2020/01/calendario-pared-pypa-espiral_Mesa-de-trabajo-1.jpg'
          modalContent={
            <ModalProject
              title='📆 Calendario React: ¡Gestionando tu tiempo al estilo Google!🕰️'
              subtitle='Desarrollo de Calendario'
              text={`¡Sumérgete en el proceso de creación de mi calendario React! 📅⚙️ Desarrollar este proyecto desde cero, "inspirado" en Google Calendar, ha sido un desafío emocionante y gratificante. Usando React y SCSS, he logrado un diseño limpio y funciones que facilitan la planificación y organización de tareas.

        Entre sus características, he incorporado vistas mensuales, semanales y diarias, así como la capacidad de agregar eventos, recordatorios y notas. Además, con SCSS, pude estilizar el calendario para que sea responsivo y estéticamente agradable en diferentes dispositivos.

        Uno de los mayores desafíos fue gestionar el estado de los eventos y asegurarme de que la interacción del usuario fuera fluida e intuitiva. También tuve que considerar zonas horarias y fechas recurrentes.

        ¡Espero que disfrutes de este proyecto y valores el detalle y esfuerzo que conlleva desarrollar una herramienta de calendario tan completa desde cero!
        Aunque aun tengo algunas cosas que tocar y pincelar 🛠️🎨`}
              videoUrl={'https://react-calendar-phi.vercel.app/'}
              urlFront={"https://github.com/edmondhillary/react-calendar"}
            />
          }
        />

        {/* //empezar a añadir aquí //
//aqui// */}
  <Card
    id={uuidv4()}
    color='lightgray'
    title='CRM  V2.0'
    description='Dental CRM Software'
    imgUrl='https://media.istockphoto.com/id/613771462/es/foto/diente-en-la-tecla-del-teclado-de-la-computadora.jpg?s=612x612&w=0&k=20&c=LwUSVDTtrW4hB5ctt0op9vdE3WFtvzHq-OwbxpdwRkI='
    modalContent={
      <ModalProject
        title='CRM V2.0'
        subtitle='Dental Clinic CRM Solution'
        videoUrl='https://crm-mn-dent-pbeb.vercel.app/'
        text={`Welcome to the second version of SoftDent, our state-of-the-art CRM tailored for dental clinics! 🎉🦷

        Our application caters to various user roles including employees, administrators, and superadmins (owners of the clinic), delivering personalized interfaces and functionalities. 💼✨

        Within each profile, users can explore information on treatments, scheduled appointments, invoices, and patient details. All data is elegantly paginated for both front-end and back-end, ensuring swift performance and scalability. 📄🚀

        Key features include a persistent patient search in the app's header, efficient navigation buttons, and the ability to swiftly add new patient data. Superadmins have exclusive privileges to access comprehensive lists of employees and patients. ⚙️🔍

        One of the software's highlights is the Calendar component which details each employee’s schedule, ensuring no overlaps or retrospective bookings. 📅🔐

        Price lists for treatments are accessible, and superadmins benefit from an invaluable monthly billing summary. Financial overviews showcase revenue streams and any outstanding debts. 💰📊

        For an in-depth analysis, sections are dedicated to patients with pending payments. Superadmins have access to analytical graphs that depict treatment trends, patient visits, age and gender demographics – invaluable for effective marketing strategies. 📈📌

        Patient profiles are intricately detailed with billing history, appointments, and an interactive odontogram for specific dental treatments. From patient data like allergies and dental history to flexible options to manage patient and employee profiles – everything is just a click away. 📋👥

        Explore the CRM yourself! Visit our [live site](https://crm-mn-dent-pbeb.vercel.app/) and test the platform using the superadmin role with email: edu1493@gmail.com and password: 123456. For more roles and credentials, kindly refer to the README in the frontend repository. 🌐🔑

        In essence, CRM SoftDent V2.0 embodies an all-inclusive dental clinic management solution, enhancing the administrative experience while prioritizing patient care. 🌟🖥️`}
        urlFront={
          "https://github.com/edmondhillary/crm-mn-dent"
        }
        urlBack={
          "https://github.com/edmondhillary/dental-dashboard-BACKEND"
        }
      />
    }
/>

        <Card
          color='darkgray'
          id={uuidv4()}
          title='Ecommerce'
          description='Surf Ecommerce '
          imgUrl='https://res.cloudinary.com/dte7upwcr/image/upload/blog/blog/imagens-ecommerce.png'
          modalContent={
            <ModalProject
              title='Ecommerce'
              subtitle='Ecommerce Description '
            />
          }
        />
      </div>
    </>
  );
};

export default Projects;
