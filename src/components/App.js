import { useEffect } from 'react';
import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Destinations from './Destinations';
import Reservation from './Reservation';
import MyReservations from './MyReservations';
import DestForm from './AddDestinationForm';
import { destIsLoading, loadDestinationsThunk } from '../redux/Destinations/destinations';
import DeleteDestinations from './DeleteDestinations';
import Navbar from './Navbar';
import DestinationDetails from './DestinationDetails';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destIsLoading());
    dispatch(loadDestinationsThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/dest" element={<DestForm />} />
            <Route exact path="/" element={<Destinations />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reserve" element={<Reservation />} />
            <Route path="/reserve/:destination_id" element={<Reservation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destinations/delete" element={<DeleteDestinations />} />
            <Route path="/destinations/:destinationId" element={<DestinationDetails />} />
            <Route path="/reservations" element={<MyReservations />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
