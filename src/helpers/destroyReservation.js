const destroyReservation = async (id, token) => {
  const request = await fetch(`http://localhost:3000/api/v1/reservations/${id}`,
    {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json', Authentication: token }),
    });
  const response = await request.json();
  return response;
};

export default destroyReservation;
