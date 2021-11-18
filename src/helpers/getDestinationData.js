import { getDestination } from '../redux/Destinations/destinations';
// import axios from 'axios';
// const url = 'http://localhost:3000/';
const destinationUrl = 'http://localhost:3000/api/v1/destinations';
// export const getDestinations = () => async () => {
//     axios.get(url).then((response) => {
//     const { data } = response;
//     return data
//   });
// };

const getDestinationThunk = () => async (dispatch) => {
  const request = await fetch(destinationUrl);
  const data = await request.json();
  dispatch(getDestination(data));
};

export default getDestinationThunk;
