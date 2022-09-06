import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderPage from '../components/header-page/HeaderPage';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

export const CatalogPage = () => {

  const { category } = useParams();

  return (
    <>
      <HeaderPage>
        {category === cate.movie ? 'Фильмы' : 'Сериалы'}
      </HeaderPage>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}
