import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Carousel from 'react-bootstrap/Carousel';
// import { CardGroup } from 'react-bootstrap';
import Flickity from 'react-flickity-component';
import { Card } from 'react-bootstrap';
// import Slides from './Slides';
import '../styles/Flickity.css';
import '../styles/Slides.css';
import { loadDestinationsThunk } from '../redux/Destinations/destinations';

const Destinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDestinationsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.destinations.destinations);
  const state = data.sort(() => 0.5 - Math.random());
  return (
    <div className="">
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
        {/* <div className="row d-none d-lg-block">
          <Carousel variant="light">
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 3).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 3).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row d-none d-md-block d-lg-none">
          <Carousel variant="dark">
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 2).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 2).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row d-md-none">
          <Carousel variant="dark">
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 1).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 1).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default Destinations;
