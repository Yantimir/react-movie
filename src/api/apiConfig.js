// import * as dotenv from 'dotenv';
// dotenv.config();

// const API_KEY = process.env.TMDB_API_KEY;
// console.log(API_KEY)

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '6defce3ca480047a3467cc5c658b28aa',
  language: 'ru',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;