import './App.css';
import NaviBar from './components/common/NaviBar';
import HomePage from './components/HomePage';
import ActivitiesList from './components/ActivitiesList';
import EntertainmentsList from './components/EntertainmentsList';
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
          <Route path="/activities" element={<ActivitiesList />} />
          <Route path="/entertainments" element={<EntertainmentsList />} />
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
