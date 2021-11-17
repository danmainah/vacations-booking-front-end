const destroyDestination = async (id, token) => {
  const request = await fetch(`/api/v1/destinations/${id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authentication: token },
    });
  const response = await request.json();
  return response;
};

export default destroyDestination;
