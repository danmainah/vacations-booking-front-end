import { useSelector } from 'react-redux';
import Slides from './Slides';

const Destinations = () => {
  let destinations;

  const state = useSelector((state) => state.destinations.destination);

  if (state) {
    destinations = state.map((dest) => (
      <h1 key={dest.image_url}>{dest.location}</h1>
    ));
  }

  return (
    <div className="container">
      <div className="align-middle">
        <h4 className="d-flex justify-content-center">Latest Destinations</h4>
        <h5 className="d-flex justify-content-center"> Please select Favourite Destination </h5>
        <Slides />
        {destinations}
      </div>
    </div>
  );
};

export default Destinations;
