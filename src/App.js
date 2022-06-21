import './App.css';
import EntertainmentsList from './components/EntertainmentsPage/EntertainmentsList';
import RetrieveDateForm from './components/SubmitDatePage/RetrieveDateForm';
import RestaurantsList from './components/RestaurantsPage/RestaurantsList';
import ActivitiesList from './components/ActivitiesPage/ActivitiesList';
import SubmitDateForm from './components/SubmitDatePage/SubmitDateForm';
import HomeDatesList from './components/HomeDates/HomeDatesList';
import HomePage from './components/MainPage/HomePage';
import NaviBar from './components/common/NaviBar';
import Footer from './components/common/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes >
          <Route path="/" element={
            <>
              <HomePage />
              <Footer />
            </>} />

          <Route path="/activities" element={
            <>
              <ActivitiesList />
              <Footer />
            </>} />

          <Route path="/entertainments" element={
            <>
              <EntertainmentsList />
              <Footer />
            </>} />

          <Route path="/restaurants" element={
            <>
              <RestaurantsList />
              <Footer />
            </>} />

          <Route path="/homedates" element={
            <>
              <HomeDatesList />
              <Footer />
            </>} />

          <Route path="/submitadate" element={
            <>
              <SubmitDateForm />
              <Footer />
            </>} />

          <Route path="/viewdates" element={
            <>
              <RetrieveDateForm />
              <Footer />
            </>} />

        </Routes >
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
