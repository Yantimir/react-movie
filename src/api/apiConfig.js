const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: `${API_KEY}`,
  language: 'ru',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;