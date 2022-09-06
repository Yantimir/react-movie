import React from 'react';
import './header-page.scss';
import bg from '../../assets/footer-bg.jpg';

const HeaderPage = props => {
  return (
    <div className='header-page' style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default HeaderPage;