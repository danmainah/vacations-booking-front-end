import '../styles/postForm.css';

const destinationUrl = 'http://localhost:3000/api/v1/destinations';
const token = localStorage.getItem('token');
// eslint-disable-next-line
export let serverResponse = '';

const postDestination = async (body) => {
  const request = await fetch(destinationUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  });
  const response = await request.json();
  console.log(response);
};

export default postDestination;
