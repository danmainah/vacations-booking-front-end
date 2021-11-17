import {
  deleteReservation,
  getReservations,
  postReservation,
} from '../../helpers/getReservationData';

const LOAD_RESERVATIONS = 'vacation-booking-back-end/reservations/LOAD_RESERVATIONS';
const ADD_RESERVATION = 'vacation-booking-back-end/reservations/ADD_RESERVATION';
const CANCEL_RESERVATION = 'vacation-booking-back-end/reservations/CANCEL_RESERVATION';

const initialState = [];

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESERVATIONS:
      return action.payload;
    case ADD_RESERVATION:
      return [...state, action.payload];
    case CANCEL_RESERVATION:
      return state.filter((reservation) => reservation.destination_id === action.payload);
    default:
      return state;
  }
};

const reservationsLoadAction = (payload) => ({
  type: LOAD_RESERVATIONS,
  payload,
});

const reservationAddAction = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

const reservationCancelAction = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export const loadReservations = () => async (dispatch, getState) => {
  const state = getState();
  if (state.reservations === []) {
    dispatch(reservationsLoadAction(await getReservations(state.user.auth)));
  }
};

export const addReservation = (destinationId, startDate, endDate) => async (dispatch, getState) => {
  const state = getState();
  dispatch(reservationAddAction(await postReservation(state.user.authToken,
    destinationId,
    startDate,
    endDate)));
};

export const cancelReservation = (id) => async (dispatch, getState) => {
  const state = getState();
  dispatch(reservationCancelAction(await deleteReservation(state.user.authToken, id)));
};

export default reservationReducer;
