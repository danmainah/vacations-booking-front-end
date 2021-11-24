const destinationUrl = 'http://localhost:3000/api/v1/destinations';
const token = localStorage.getItem('token');

const postDestination = (body) => async () => {
  const request = await fetch(destinationUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  });
  const response = await request.json();
  return response.message;
};

export default postDestination;
