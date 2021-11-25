import { getErrors, postReservation } from '../redux/Reservations/reservation';

const reservationURL = 'http://localhost:3000/api/v1/reservations';

const postReservationThunk = (token, data) => async (dispatch) => {
  const req = await (fetch(reservationURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).catch((e) => e);

  const res = await req.json();

  if (res && res.status !== 'Error!') {
    dispatch(postReservation(res));
  } else {
    dispatch(getErrors(res.message));
  }
};

export default postReservationThunk;
