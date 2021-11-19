/* eslint-disable camelcase */
import { Card } from 'react-bootstrap';
import '../styles/Slides.css';

const Slides = (info) => {
  const { info: { name, image_url } } = info;
  console.log(info);
  return (
    <Card>
      <Card.Img className="rounded-circle" variant="top" src={image_url} alt="Card  cap" />
      <Card.Body>
        <Card.Title>
          <h4 className="d-flex justify-content-center ">
            {name}
          </h4>
        </Card.Title>
        <Card.Text>
          <small>Lorem dbkr wgbijp rg3wtwposv wrbweuhsrog sgsruehorg efskg</small>
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
  );
};

export default Slides;
