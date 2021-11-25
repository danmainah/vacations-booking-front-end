const destroyDestination = async (id, token) => {
  const request = await fetch(`https://booking-vacations.herokuapp.com/api/v1/destinations/${id}`,
    {
      method: 'DELETE',
      headers: new Headers({
        Authorization: token,
        'Content-Type': 'application/json',
      }),
    });
  const response = await request.json();
  return response;
};

export default destroyDestination;
