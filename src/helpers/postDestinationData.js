import { postDestinations, addDestinations } from '../redux/Destinations/destinations';

const destinationUrl = 'http://localhost:3000/api/v1/destinations';
const token = localStorage.getItem('token');
// eslint-disable-next-line
export let serverResponse = '';

const postDestination = (body) => async (dispatch) => {
  const request = await fetch(destinationUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  });
  const response = await request.json();
  dispatch(postDestinations(response));
  if (response.status === 'Success!') {
    dispatch(addDestinations(body));
  }
  return response.message;
};

export default postDestination;
