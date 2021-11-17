import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Destinations from './Destinations';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>

    <Router>
      <Destinations />
    </Router>
  </Provider>
);

export default App;
