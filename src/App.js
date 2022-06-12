import './App.css';
import NaviBar from './components/common/NaviBar';
import HomePage from './components/HomePage';
import Activities from './components/Activities';
import Entertainments from './components/Entertainments';
import Restaurants from './components/Restaurants';
import HomeDates from './components/HomeDates';
import Footer from './components/common/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/entertainments" element={<Entertainments />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/homedates" element={<HomeDates />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

{/* <Route path="/submitadate" element={<SubmitADate />} /> */ }
export default App;
