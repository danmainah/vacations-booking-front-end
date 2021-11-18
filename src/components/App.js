import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Destinations from './Destinations';
import Reservation from './Reservation';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Destinations />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserve" element={<Reservation />} />
      </Routes>
    </Router>
  </div>
);

export default App;
