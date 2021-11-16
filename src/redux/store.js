import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { destinationsReducer } from './Destinations/destinations';

const reducer = combineReducers({
  destinations: destinationsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
