const getDestinations = async () => {
  const request = await fetch('http://localhost:3000/api/v1/destinations');
  const response = await request.json();
  return response;
};

export default getDestinations;
