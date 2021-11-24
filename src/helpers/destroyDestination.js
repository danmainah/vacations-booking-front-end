const destroyDestination = async (id, token) => {
  const request = await fetch(`http://localhost:3000/api/v1/destinations/${id}`,
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
