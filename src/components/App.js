import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Destinations from './Destinations';
import UserDetails from './UserDetails';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/user" element={<UserDetails />} />
    </Routes>
  </Router>
);

export default App;
