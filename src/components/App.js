import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Destinations from './Destinations';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Destinations />
  </Router>
);

export default App;
