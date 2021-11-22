import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { reservationReducer } from './Reservations/reservation';
import authReducer from './Auth/auth';
import { destinationsReducer } from './Destinations/destinations';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  reservations: reservationReducer,
  destinations: destinationsReducer,
  user: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store);

export default store;
