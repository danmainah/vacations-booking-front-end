const destinationUrl = 'http://localhost:3000/api/v1/destinations';
const token = localStorage.getItem('token');

const postDestination = (body) => {
  fetch(destinationUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  });
};

export default postDestination;
