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
    const response = await fetch(`${LOAD_RESERVATIONS_URL}`, {
      method: 'GET',
      headers: {
        Authorization: state.user.auth_token,
      },
    });
    const reservations = await response.json();
    dispatch(reservationsLoadAction(reservations));
  }
};

export const addReservation = (id) => async (dispatch, getState) => {
  const state = getState();
  const response = await fetch(`${ADD_RESERVATION_URL}`, {
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
  const response = await fetch(`${CANCEL_RESERVATION_URL}`, {
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
