import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import { Card } from 'react-bootstrap';
import { deleteReservationThunk, reservationIsLoading, loadReservationsThunk } from '../redux/Reservations/reservation';
import '../styles/Flickity.css';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.reservations.loading);
  const userLogged = useSelector((state) => state.user.logged_in);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(reservationIsLoading());
    dispatch(loadReservationsThunk(token));
  }, [dispatch]);

  useEffect(() => {
    if (!userLogged) {
      navigate('/login');
    }
  }, [!userLogged]);

  const handleCancelClick = (id, token) => {
    dispatch(reservationIsLoading());
    dispatch(deleteReservationThunk(id, token));
  };

  return (
    <>
      { isLoading ? (
        <img className="w-100" src="rotate-pulsating-loading-animation.webp" alt="spinner" />
      ) : (
        <div className="container-fluid">
          <div className="align-middle">
            <h4 className="d-flex justify-content-center m-4 fw-bold text-info">MY RESERVATIONS</h4>

            <Flickity
              className="carousel" // default ''
              elementType="div" // default 'div'
            // options="flickityOptions" // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static
            >
              {reservations
              && reservations.map((data) => (
                <Card key={data.id} className="text-center">
                  <Card.Img className="rounded-circle" variant="top" src={data.image_url} alt="Card  cap" />
                  <Card.Body>
                    <Card.Title>
                      <h4 className="d-flex justify-content-center ">
                        {data.name}
                      </h4>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      <h6>
                        Check in:
                        {' '}
                        <small>
                          {data.startingDay}
                        </small>
                      </h6>
                      <h6>
                        Check out:
                        {' '}
                        <small>
                          {data.endingDay}
                        </small>
                      </h6>
                      <big>
                        Total cost:
                        {' '}
                        {data.cost}
                        $
                      </big>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleCancelClick(data.id, token)}
                    >
                      Cancel reservation
                    </button>
                  </Card.Footer>
                </Card>
              ))}
            </Flickity>
          </div>
        </div>
      )}
    </>
  );
};

export default MyReservations;
