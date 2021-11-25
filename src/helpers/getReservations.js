const getReservations = async (token) => {
  try {
    const request = await fetch('https://booking-vacations.herokuapp.com/api/v1/reservations',
      {
        method: 'GET',
        headers: new Headers({
          Authorization: token,
          'Content-Type': 'application/json',
        }),
      });
    const response = await request.json();
    return response;
  } catch (err) {
    return err;
  }
};

export default getReservations;
