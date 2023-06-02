import React, { useState } from 'react';

export const Tile = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const _clickHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const _mouseEnter = (e) => {
    e.preventDefault();
    if (!mouseOver) {
      console.log(data.name);
      setMouseOver(true);
    }
  };

  const _mouseLeave = (e) => {
    e.preventDefault();
    if (mouseOver) {
      setMouseOver(false);
    }
  };

  let tileStyle = {};
  if (open) {
    tileStyle = {
      width: '62vw',
      height: '62vw',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '0',
      marginTop: '-31vw',
      marginLeft: '-31vw',
      boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
      transform: 'none'
    };
  } else {
    tileStyle = {
      width: '18vw',
      height: '18vw'
    };
  }

  return (
    <div className="tile">
      <img
        onMouseEnter={_mouseEnter}
        onMouseLeave={_mouseLeave}
        onClick={_clickHandler}
        src={data.url}
        alt={data.name}
        style={tileStyle}
      />
    </div>
  );
};
