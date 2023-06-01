import React from 'react';

const CommingSoon = () => {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        class='container'
      >
        <h3>COMING SOON</h3>
        <br />
        <br />
        <div class='bar'>
          <div class='progress'></div>
        </div>
      </div>
    );
};

export default CommingSoon;