import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { CardGroup } from 'react-bootstrap';
import Slides from './Slides';
import getDestinationThunk from '../helpers/getDestinationData';

const Destinations = () => {
  // let destinations = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDestinationThunk());
  }, [dispatch]);

  const state = useSelector((state) => state.destinations.destination);
  console.log(state);
  // if (state) {
  //   destinations = state.map((dest) => (
  //     <h1 key={dest.image_url}>{dest.location}</h1>
  //   ));
  // }

  return (
    <div className="container">
      <div className="align-middle">
        <h4 className="d-flex justify-content-center">Latest Destinations</h4>
        <h5 className="d-flex justify-content-center"> Please select Favourite Destination </h5>
        <div className="row d-none d-lg-block">
          <Carousel variant="dark">
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.map((data) => (
                  <Slides key={data.id} data={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.map((data) => (
                  <Slides key={data.id} data={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
