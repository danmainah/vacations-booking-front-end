const GET_DESTINATIONS = 'GET_DESTINATIONS';

const initialValue = {};

const getDestination = (payload) => ({
  type: GET_DESTINATIONS,
  payload,
});

const getDestinationThunk = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/api/v1/destinations');
  const data = await request.json();
  dispatch(getDestination(data));
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
