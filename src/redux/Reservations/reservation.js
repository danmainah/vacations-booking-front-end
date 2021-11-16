const GET_RESERVATIONS = 'GET_RESERVATIONS';

const initialValue = {};

const getReservation = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});

const getReservationThunk = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/v1/reservations');
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
    default:
      return state;
  }
};

export { reservationReducer, getReservationThunk };
