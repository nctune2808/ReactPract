import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { Switch, Router } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import MyRoute from './routes/Route';

function App() {
  return (

    // <div><Header/></div>

    <BrowserRouter>
      <Router>
        <Route render={props => (
          <>
            <Header {...props} />
            <MyRoute />
            <Footer />
          </>
        )} />
      </Router>
    </BrowserRouter>

  );
}

export default App;
