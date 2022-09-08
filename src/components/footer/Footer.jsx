import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
// import logo from '../../assets/tmovie.png';
import logo from '../../assets/green-play.webp';

export const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to='/'>tmdbMovies</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Главная</Link>
            <Link to='/'>Контакты</Link>
            <Link to='/'>Служба поддержки</Link>
            <Link to='/'>О нас</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Лицензия</Link>
            <Link to='/'>Часто задаваемые вопросы</Link>
            <Link to='/'>Оферта</Link>
            <Link to='/'>Политика конфиденциальности</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Рекомендуем</Link>
            <Link to='/'>Новинки</Link>
            <Link to='/'>Топ IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
