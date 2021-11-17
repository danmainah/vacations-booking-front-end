const GET_DESTINATIONS = 'GET_DESTINATIONS';

const initialValue = {};

const getDestination = (payload) => ({
  type: GET_DESTINATIONS,
  payload,
});

const getDestinationThunk = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/v1/Destinations');
  const response = await request.json();
  const data = await response.destination;
  if (data) {
    dispatch(getDestination(data));
  }
};

const destinationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      return {
        ...state,
        destination: action.payload,
      };
    default:
      return state;
  }
};

export { destinationReducer, getDestinationThunk };
