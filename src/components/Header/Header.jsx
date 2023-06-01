import React from 'react';

const Header = () => {
    return (
        <header>
        <div className='logo-container'>
          <span className='logo'>Sir Edwards</span>
        </div>
        <nav>
          <a href='#about' className='nav-link'>
            About me
          </a>
          <a href='#services' className='nav-link'>
            Services
          </a>
          <a href='#skills' className='nav-link'>
            Languages
          </a>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </nav>
      </header>
    );
};

export default Header;