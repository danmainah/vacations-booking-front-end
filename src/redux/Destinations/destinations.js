import getDestinations from '../../helpers/getDestinations';
import destroyDestination from '../../helpers/destroyDestination';

// Actions
const LOAD = 'vacations-booking-front-end/destinations/LOAD';
const DELETE = 'vacations-booking-front-end/destinations/DELETE';
const POST = 'vacations-booking-front-end/destinations/POST';
const IS_LOADING = 'vacations-booking-front-end/destinations/IS_LOADING';
const initialState = [];
const token = localStorage.getItem('token');

// Action creators
const deleteDestination = (payload) => ({
  type: DELETE,
  payload,
});

const deleteThunkDestination = (destinationId) => async (dispatch) => {
  const response = await destroyDestination(destinationId, token);
  if (response.status === 'Success!') {
    dispatch(deleteDestination(destinationId));
  }
};

const loadDestinations = (payload) => ({
  type: LOAD,
  payload,
});

export const postDestinations = (payload) => ({
  type: POST,
  payload,
});

const loadDestinationsThunk = () => async (dispatch) => {
  const data = await getDestinations();
  if (data) {
    dispatch(loadDestinations(data));
  }
};

const destIsLoading = () => ({
  type: IS_LOADING,
});

// reducer
const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD:
      return {
        ...state,
        destinations: payload,
        loading: false,
      };
    case DELETE:
      return {
        ...state,
        destinations: state.destinations.filter((destination) => destination.id !== action.payload),
        loading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST:
      return {
        ...state,
        destintinations: state.destinations.push(action.payload),
      };

    default:
      return state;
  }
};

export {
  destinationsReducer, loadDestinationsThunk, deleteThunkDestination, destIsLoading,
};
