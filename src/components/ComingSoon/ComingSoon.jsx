import React from 'react';

const CommingSoon = () => {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        className='container'
      >
        <h3 style={{color:'#18BBA1'}} >COMING SOON</h3>
        <br />
        <br />
        <div className='bar'>
          <div className='progress'></div>
        </div>
      </div>
    );
};

export default CommingSoon;