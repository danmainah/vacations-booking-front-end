const GET_RESERVATIONS = 'GET_RESERVATIONS';
const POST_RESERVATIONS = 'vacations-booking-front-end/Reservations/POST_RESERVATIONS';
const GET_ERRORS = 'vacations-booking-front-end/Reservations/GET_ERRORS';

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

const getReservationThunk = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/api/v1/reservations');
  const response = await request.json();
  const data = await response.reservation;
  if (data) {
    dispatch(getReservation(data));
  }
};

const reservationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    case POST_RESERVATIONS:
      return state;
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export { reservationReducer, getReservationThunk };
