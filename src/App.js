import './App.css';
import Hero from './components/Hero';
import NaviBar from './components/NaviBar';
import Activities from './components/Activities';
import Entertainments from './components/Entertainments';
import Restaurants from './components/Restaurants';
import HomeDates from './components/HomeDates';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />

        <Hero />
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/entertainments" element={<Entertainments />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/homedates" element={<HomeDates />} />
          {/* <Activities />
      <Restaurants />
      <Entertainments />
      <HomeDates /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

{/* <Route path="/submitadate" element={<SubmitADate />} /> */ }
export default App;
