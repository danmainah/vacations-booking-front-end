const async getReservations = (auth_token) => {
  const response = await fetch('http://localhost:port_number/api/v1/reservations', {
    method: 'GET',
    headers: {
      Authorization: auth_token,
    },
  });
  return await response.json();
};