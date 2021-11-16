export const getReservations = async (authToken) => {
  const response = await fetch('http://localhost:port_number/api/v1/reservations', {
    method: 'GET',
    headers: {
      Authorization: authToken,
    },
  });
  
  return response.json();
};

export const postReservation = async (authToken, id) => {
  const response = await fetch('http://localhost:port_number/api/v1/reservations', {
    method: 'POST',
    headers: {
      Authorization: authToken,
    },
    body: JSON.stringify({
      destination_id: id,
    }),
  });
  return response.json();
};

export const deleteReservation = async (authToken, id) => {
  await fetch('http://localhost:port_number/api/v1/reservations/destination_id', {
    method: 'DELETE',
    headers: {
      Authorization: authToken,
    },
    body: JSON.stringify({
      destination_id: id,
    }),
  });
  return id;
};
