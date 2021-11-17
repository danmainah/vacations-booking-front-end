const GET_DESTINATIONS = 'vacations-booking-front-end/Destination/GET_DESTINATIONS';

const initialValue = {};

const getDestination = (payload) => ({
  type: GET_DESTINATIONS,
  payload,
});

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

export { destinationReducer, getDestination };
