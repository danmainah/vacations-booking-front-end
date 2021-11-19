import { Card } from 'react-bootstrap';
import '../styles/Slides.css';

const Slides = (data) => {
  console.log(data);
  return (
    <Card >
      <Card.Img variant="top" src={data.image_url} alt="Card  cap" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <small>Lorem dbkr wgbijp rg3wtwposv wrbweuhsrog sgsruehorg efskg</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-center">
          <i className="fa fa-facebook-official" />
          <i className="fa fa-twitter" />
          <i className="fa fa-linkedin-square" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Slides;
