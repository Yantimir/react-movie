import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { RoutesConfig } from './config/RoutesConfig';

function App() {
  return (
    <HashRouter basename="/react-movie">
      <Route render={props => (
        <>
          <Header {...props} />
          <RoutesConfig />
          <Footer />
        </>
      )}/>
    </HashRouter>
  );
}

export default App;
