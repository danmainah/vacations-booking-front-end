import { getErrors, postReservation } from '../redux/Reservations/reservation';

const reservationURL = 'http://localhost:3000/api/v1/reservations';

const postReservationThunk = (token, data) => async (dispatch) => {
  console.log(JSON.stringify(data));
  const req = await (fetch(reservationURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).catch((e) => {
    console.log(e);
  });

  const res = await req.json();
  console.log(res);

  if (res && res.status !== 'Error!') {
    dispatch(postReservation(res));
  } else {
    dispatch(getErrors(res.message));
  }
};

export default postReservationThunk;
