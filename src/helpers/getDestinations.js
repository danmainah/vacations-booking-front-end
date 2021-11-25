const getDestinations = async () => {
  const request = await fetch('https://booking-vacations.herokuapp.com/api/v1/destinations');
  const response = await request.json();
  return response;
};

export default getDestinations;
