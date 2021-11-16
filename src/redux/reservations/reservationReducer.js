import { getReservations } from "../../helpers/getReservationData";

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
    dispatch(reservationsLoadAction(getReservations(state.user.auth)));
  }
};

export const addReservation = (id) => async (dispatch, getState) => {
  const state = getState();
  const response = await fetch('http://localhost:port_number/api/v1/reservations', {
    method: 'POST',
    headers: {
      Authorization: state.user.auth_token,
    },
    body: JSON.stringify({
      destination_id: id,
    }),
  });
  if (response.status === 200) {
    const reservation = await response.json();
    dispatch(reservationAddAction(reservation));
  }
};

export const cancelReservation = (id) => async (dispatch, getState) => {
  const state = getState();
  const response = await fetch('http://localhost:port_number/api/v1/reservations/destination_id', {
    method: 'DELETE',
    headers: {
      Authorization: state.user.auth_token,
    },
    body: JSON.stringify({
      destination_id: id,
    }),
  });
  if (response.status === 200) {
    dispatch(reservationCancelAction(id));
  }
};

export default reservationReducer;
