import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './Auth/auth';
import { destinationsReducer } from './Destinations/destinations';

const reducer = combineReducers({
  destinations: destinationsReducer,
  user: authReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
