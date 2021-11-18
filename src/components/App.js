import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Destinations from './Destinations';
import DestForm from './addDestinationForm';

const App = () => (
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

export default App;
