import React from 'react';

const SocialNets = ({link, antIconOutlined , socialNet, socialUser}) => {
    return (
        <a
        href={link}
        target='blank'
      >
        <div className='info-item'>
          <div className='info-icon'>
            <div className='gre'>
              {antIconOutlined}
            </div>
          </div>
          <span className='item-title'>{socialNet}</span>
          <br />
          <span className='item-description'>{socialUser}</span>
        </div>
      </a>
    );
};

export default SocialNets;