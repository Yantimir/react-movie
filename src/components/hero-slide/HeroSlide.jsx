import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './hero-slide.scss';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
import Preloader from '../preloader/Preloader';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


const HeroSlide = () => {

  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(response.results.slice(1, 4));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div className='hero-slide'>
      {isLoading
        ? (<Preloader />)
        : (<>
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
          >
            {
              movieItems.map((item) => (
                <SwiperSlide key={item.id}>
                  {({ isActive }) => (
                    <HeroSlideItem
                      item={item}
                      className={`${isActive ? 'active' : ''}`}
                    />
                  )}
                </SwiperSlide>
              ))
            }
          </Swiper>
          {
            movieItems.map((item) => (
              <TrailerModal key={item.id} item={item} />
            ))
          }
        </>)
      }

    </div>
  );
}

const HeroSlideItem = props => {

  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive = async () => {

    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
    } else {
      modal.querySelector('.modal__content__error').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
  }

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='hero-slide__item__content container'>
        <div className='hero-slide__item__content__info'>
          <h2 className='title'>{item.title}</h2>
          <div className='overview'>{item.overview}</div>
          <div className='btns'>
            <Button onClick={() => history.push('/movie/' + item.id)}>
              ????????????????
            </Button>
            <OutlineButton onClick={setModalActive}>
              ??????????????
            </OutlineButton>
          </div>
        </div>
        <div className='hero-slide__item__content__poster'>
          <img src={apiConfig.w500Image(item.poster_path)} alt="img" />
        </div>
      </div>
    </div>
  );
}

const TrailerModal = props => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width='100%' height='500px' title='trailer'></iframe>
      </ModalContent>
    </Modal>
  );
}

export default HeroSlide;