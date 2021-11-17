import { useEffect } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Destinations from './Destinations';
import DeleteDestinations from './DeleteDestinations';
import { fetchDestinations } from '../redux/Destinations/destinations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <Router>
      <Destinations />
      <DeleteDestinations />
    </Router>
  );
};

export default App;
