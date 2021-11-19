import { getDestination } from '../redux/Destinations/destinations';

const destinationUrl = 'http://localhost:3000/api/v1/destinations';

const getDestinationThunk = () => async (dispatch) => {
  const request = await fetch(destinationUrl);
  const data = await request.json();
  dispatch(getDestination(data));
};

export default getDestinationThunk;
