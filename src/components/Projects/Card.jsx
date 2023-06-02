import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const clickOutside = (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  };
  const nodeRef = useRef(null);

  return (
    <>
      <div
        className='portfolio-cards--card'
        style={{
          
          backgroundImage: `url(${props.imgUrl})`,
        }}
      >
        <div className='portfolio-cards--card-overlay'></div>
        <div className='portfolio-cards--card-content'>
{/* <br /> */}
          <p>{props.description}</p>
          <br />
          <button className='btn btn-primary' style={{
            
          }} onClick={openModal}>
          {props.title}
          </button>
          
        </div>
      </div>

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        classNames='animation'
      >
        <div ref={nodeRef} id='modal' onClick={clickOutside}>
          <div id='modal-wrapper'>
            <i
              className='fa-solid fa-xmark'
              id='modal-close'
              onClick={closeModal}
            ></i>
            <br />
            <header id='modal-header'>
              <h1>{props.title}</h1>
            </header>
            <br />
            <div id='modal-content'>{props.modalContent}</div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Card;
