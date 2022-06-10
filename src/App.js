import './App.css';
import Hero from './components/Hero';
import NaviBar from './components/NaviBar';
import Activities from './components/Activities';
import Entertainments from './components/Entertainments';
import Restaurants from './components/Restaurants';
import HomeDates from './components/HomeDates';
import Footer from './components/Footer';

import { BrowserRouter, Routers, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Hero />
        <div>

        </div>
        {/* <Activities />
      <Restaurants />
      <Entertainments />
      <HomeDates />
    <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
