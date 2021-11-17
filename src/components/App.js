import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Destinations from './Destinations';

const App = () => (
  <Router>
    <div className="App">
      <Destinations />
    </div>
  </Router>
);

export default App;
