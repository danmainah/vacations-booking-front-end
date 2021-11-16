import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { destinationsReducer } from './Destinations/destinations';
import reservationReducer from './reservations/reservationReducer';

const reducer = combineReducers({
  destinations: destinationsReducer,
  reservations: reservationReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
