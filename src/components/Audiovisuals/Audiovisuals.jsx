import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommingSoon from '../ComingSoon/ComingSoon';
import { HomeOutlined } from '@ant-design/icons';

const Audiovisuals = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='logo-container'>
          <span className='logo' onClick={()=>navigate('/')}><HomeOutlined/></span>
        </div>
               <CommingSoon/>
        </div>
    );
};

export default Audiovisuals;