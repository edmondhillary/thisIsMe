import React from 'react';

const StatItem = ({percent, language, src }) => {
    return (
        <div className='stat-item'>
            <img src={src} alt={src} />
        <span className='stat-number'>{percent}%</span>
        <span className='stat-label' style={{color:'#D9B6DF'}}>{language}</span>
      </div>
    );
};

export default StatItem;