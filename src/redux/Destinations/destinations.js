import { getDestinations } from '../../helpers/getDestinationData';

const FETCH_DATA = 'FETCH_DATA';
const initialState = [];

export const getCorona = () => async (dispatch) => {
  const destinations = await getDestinations();
  dispatch({ type: FETCH_DATA, payload: destinations });
};

export const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    default:
      return state;
  }
};
