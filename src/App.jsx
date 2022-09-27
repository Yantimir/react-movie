import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { RoutesConfig } from './config/RoutesConfig';

function App() {
  return (
    <Router basename="/react-movie">
      <Route render={props => (
        <>
          <Header {...props} />
          <RoutesConfig />
          <Footer />
        </>
      )}/>
    </Router>
  );
}

export default App;
