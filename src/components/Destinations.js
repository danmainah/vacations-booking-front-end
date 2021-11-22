import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Flickity from 'react-flickity-component';
import { Card } from 'react-bootstrap';
import '../styles/Flickity.css';
import '../styles/Destinations.css';
import { loadDestinationsThunk } from '../redux/Destinations/destinations';

const Destinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDestinationsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.destinations.destinations);
  const state = data.sort(() => 0.5 - Math.random());
  return (
    <div className="container-fluid">
      <div className="align-middle">
        <h4 className="d-flex justify-content-center">Latest Destinations</h4>
        <h5 className="d-flex justify-content-center">
          {' '}
          Please select Favourite Destination
          {' '}
        </h5>
        <Flickity
          className="carousel" // default ''
          elementType="div" // default 'div'
          options="flickityOptions" // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {state.map((data) => (
            <Card key={data.id}>
              <Card.Img className="rounded-circle" variant="top" src={data.image_url} alt="Card  cap" />
              <Card.Body>
                <Card.Title>
                  <h4 className="d-flex justify-content-center ">
                    {data.name}
                  </h4>
                </Card.Title>
                <Card.Text>
                  <small>Lorem dbkr tgbp rg3wtwposv wrbweuhsrog sgsruehorg efskg</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-facebook-official fa-lg" />
                  <i className="fa fa-twitter fa-lg" />
                  <i className="fa fa-linkedin-square fa-lg" />
                </div>
              </Card.Footer>
            </Card>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default Destinations;
