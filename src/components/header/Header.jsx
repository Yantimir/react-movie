import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
// import logo from '../../assets/tmovie.png';
import logo from '../../assets/green-play.webp';

const headerNav = [
  {
    display: 'Главная',
    path: '/'
  },
  {
    display: 'Фильмы',
    path: '/movie'
  },
  {
    display: 'Сериалы',
    path: '/tv'
  }
];

export const Header = () => {

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    }
  }, [])
  

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to='/'>tmdbMovies</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((elem, index) => (
              <li key={index} className={`${index === active ? 'active' : ''}`}>
                <Link to={elem.path}>
                  {elem.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
