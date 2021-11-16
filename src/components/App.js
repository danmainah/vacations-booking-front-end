import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Destinations from './Destinations';

const App = () => (
  <Router>
    <Destinations />
  </Router>
);

export default App;
