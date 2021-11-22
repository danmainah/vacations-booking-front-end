import { useEffect } from 'react';
import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Destinations from './Destinations';
import DestForm from './AddDestinationForm';
import { loadDestinationsThunk } from '../redux/Destinations/destinations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDestinationsThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dest" element={<DestForm />} />
          <Route exact path="/" element={<Destinations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
