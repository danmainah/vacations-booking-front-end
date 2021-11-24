import React from 'react';
import { useSelector } from 'react-redux';
import Flickity from 'react-flickity-component';
import { Card } from 'react-bootstrap';
import '../styles/Flickity.css';
import '../styles/Destinations.css';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const data = useSelector((state) => state.destinations.destinations);
  let state = [];
  if (data) state = data.sort(() => 0.5 - Math.random());
  const isLoading = useSelector((state) => state.destinations.loading);

  return (
    <>
      { isLoading ? (
        <img className="w-100" src="rotate-pulsating-loading-animation.webp" alt="spinner" />
      ) : (
        <div className="container-fluid align-items-center d-flex">
          <div className="align-middle w-100">
            <h4 className="d-flex justify-content-center mb-5 text-info fw-bold">Latest Destinations</h4>
            <h5 className="d-flex justify-content-center mb-5 text-info fw-bold">
              {' '}
              Please select Favourite Destination
              {' '}
            </h5>
            <Flickity
              className="carousel" // default ''
              elementType="div" // default 'div'
            // options="flickityOptions" // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static
            >
              {state.map((data) => (
                <Card key={data.id}>
                  <Link to={`/destinations/${data.id}`} className="dest-link">
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
                  </Link>
                </Card>
              ))}
            </Flickity>
          </div>
        </div>
      )}
    </>
  );
};

export default Destinations;
