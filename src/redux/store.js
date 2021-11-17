import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { destinationReducer } from './Destinations/destinations';
import { reservationReducer } from './Reservations/reservation';

const reducer = combineReducers({
  destinations: destinationReducer,
  reservations: reservationReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
