const GET_RESERVATIONS = 'GET_RESERVATIONS';
const POST_RESERVATIONS = 'vacations-booking-front-end/Reservations/POST_RESERVATIONS';
const GET_ERRORS = 'vacations-booking-front-end/Reservations/GET_ERRORS';
const CLEAR_ERRORS = 'vacations-booking-front-end/Reservations/CLEAR_ERRORS';
const CANCEL_RESERVATION = 'vacations-booking-front-end/Reservations/CANCEL_RESERVATION';

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

const getReservationThunk = () => async (dispatch, getState) => {
  const state = getState();
  const request = await fetch('http://localhost:3000/api/v1/reservations', {
    method: 'GET',
    headers: new Headers({
      Authorization: state.user.token,
      'Content-Type': 'application/json',
    }),
  });

  const response = await request.json();
  const data = response.reservations;
  if (data) {
    dispatch(getReservation(data));
  }
};

const cancelReservationAction = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export const cancelReservation = (id) => async (dispatch, getState) => {
  const state = getState();
  const response = await fetch(`http://localhost:3000/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: state.user.token,
      'Content-Type': 'application/json',
    }),
  });
  const data = await response.json();
  console.log(data);
  if (data && data.status === 'Success!') {
    dispatch(cancelReservationAction(id));
  } else {
    console.log('No action taken');
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
      return { ...state, success: action.payload };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
        success: null,
      };
    default:
      return state;
  }
};

export { reservationReducer, getReservationThunk };
