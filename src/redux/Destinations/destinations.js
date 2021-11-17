import getDestinations from '../../helpers/getDestinations';
import destroyDestination from '../../helpers/destroyDestination';

const FETCH_DATA = 'vacations-booking-front-end/destinations/FETCH_DATA';
const DELETE = 'vacations-booking-front-end/destinations/DELETE';
const initialState = [];

const deleteDestination = (payload) => ({
  type: DELETE,
  payload,
});

const deleteThunkDestination = (destinationId) => async (dispatch) => {
  const response = await destroyDestination();
  if (response.status === 'Success!') {
    dispatch(deleteDestination(destinationId));
  }
};

export const fetchDestinations = () => async (dispatch) => {
  const destinations = await getDestinations();
  dispatch({ type: FETCH_DATA, payload: destinations });
};

export const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        destinations: payload,
      };
    case DELETE:
      return {
        ...state,
        ...state.filter((destination) => destination.id !== action.payload),
      };
    default:
      return state;
  }
};

export { deleteThunkDestination };
