import destroyReservation from '../../helpers/destroyReservation';
import getReservations from '../../helpers/getReservations';

const GET_RESERVATIONS = 'vacations-booking-front-end/Reservations/GET_RESERVATIONS';
const POST_RESERVATIONS = 'vacations-booking-front-end/Reservations/POST_RESERVATIONS';
const GET_ERRORS = 'vacations-booking-front-end/Reservations/GET_ERRORS';
const CLEAR_ERRORS = 'vacations-booking-front-end/Reservations/CLEAR_ERRORS';
const IS_LOADING = 'vacations-booking-front-end/Reservations/IS_LOADING';
const DELETE = 'vacations-booking-front-end/Reservations/DELETE';
const initialValue = {};

const loadReservations = (payload) => ({
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

const loadReservationsThunk = (token) => async (dispatch) => {
  const data = await getReservations(token);
  if (data) {
    dispatch(loadReservations(data));
  }
};

const reservationIsLoading = () => ({
  type: IS_LOADING,
});

const deleteReservation = (payload) => ({
  type: DELETE,
  payload,
});

const deleteReservationThunk = (reservationId, token) => async (dispatch) => {
  const response = await destroyReservation(reservationId, token);
  if (response.status === 'Success!') {
    console.log('resId', reservationId);
    dispatch(reservationIsLoading());
    dispatch(deleteReservation(reservationId));
  }
};

const reservationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload.reservations,
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
    case DELETE:
      console.log('payload', action.payload);
      return {
        ...state,
        reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export {
  reservationReducer, loadReservationsThunk, reservationIsLoading, deleteReservationThunk,
};
