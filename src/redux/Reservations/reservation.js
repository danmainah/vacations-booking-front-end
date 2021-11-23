const GET_RESERVATIONS = 'GET_RESERVATIONS';
const POST_RESERVATIONS = 'vacations-booking-front-end/Reservations/POST_RESERVATIONS';
const GET_ERRORS = 'vacations-booking-front-end/Reservations/GET_ERRORS';
const CLEAR_ERRORS = 'vacations-booking-front-end/Reservations/CLEAR_ERRORS';
const IS_LOADING = 'vacations-booking-front-end/Reservations/IS_LOADING';
const initialValue = {};

const getReservation = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});
export const postReservation = (payload) => ({
  type: POST_RESERVATIONS,
  payload,
});

export const getErrors = (payload) => ({
  type: GET_ERRORS,
  payload,
});

export const clearStatus = () => ({
  type: CLEAR_ERRORS,
});

const getReservationThunk = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/api/v1/reservations');
  const response = await request.json();
  const data = await response.reservation;
  if (data) {
    dispatch(getReservation(data));
  }
};

const reservationIsLoading = () => ({
  type: IS_LOADING,
});

const reservationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case POST_RESERVATIONS:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
        success: null,
        loading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export { reservationReducer, getReservationThunk, reservationIsLoading };
