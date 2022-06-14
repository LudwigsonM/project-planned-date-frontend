import './App.css';
import NaviBar from './components/common/NaviBar';
import HomePage from './components/MainPage/HomePage';
import ActivitiesList from './components/ActivitiesPage/ActivitiesList';
import EntertainmentsList from './components/EntertainmentsPage/EntertainmentsList';
import RestaurantsList from './components/RestaurantsPage/RestaurantsList';
import HomeDatesList from './components/HomeDates/HomeDatesList';
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
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route path="/homedates" element={<HomeDatesList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

{/* <Route path="/submitadate" element={<SubmitADate />} /> */ }
export default App;
