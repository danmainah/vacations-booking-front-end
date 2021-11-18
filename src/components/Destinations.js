import Phone from './slides/Phone';
import Tablet from './slides/Tablet';
import Large from './slides/Large';

const DesData = [
  {
    image:
      './one.jpg',
    title: 'Beach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      './two.jpg',
    title: 'Forest',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      './three.jpg',
    title: 'Desert',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Destinations = () => (
  <div className="container">
    <div className="align-middle position-absolute mt-5 pt-5">
      <h4 className="d-flex justify-content-center">Latest Destinations</h4>
      <h5 className="d-flex justify-content-center"> Please select Favourite Destination </h5>
      <Phone />
      <Tablet data={DesData} />
      <Large />
    </div>
  </div>
);

export default Destinations;
