import Carousel from 'react-bootstrap/Carousel';
import { CardGroup, Card } from 'react-bootstrap';
import '../../styles/Slides.css';

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

const Phone = () => (
  <div className="container">
    <div className="row d-md-none">
      <Carousel variant="dark">
        <Carousel.Item interval={5000}>
          <CardGroup className="">
            {DesData.slice(0, 1).map((data) => (
              <Card key={data.title}>
                <Card.Img className="rounded-circle phone" variant="top" src={data.image} alt="Card  cap" />
                <Card.Body>
                  <Card.Title>
                    <h4 className="d-flex justify-content-center ">
                      {data.title}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    <small>
                      {data.text}
                    </small>
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
            ;
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CardGroup>
            {DesData.slice(1, 2).map((data) => (
              <Card key={data.title}>
                <Card.Img className="rounded-circle" variant="top" src={data.image} alt="Card  cap" />
                <Card.Body>
                  <Card.Title>
                    <h4 className="d-flex justify-content-center ">
                      {data.title}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    <small>
                      {data.text}
                    </small>
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
            ;
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CardGroup>
            {DesData.slice(2, 3).map((data) => (
              <Card key={data.title}>
                <Card.Img className="rounded-circle" variant="top" src={data.image} alt="Card  cap" />
                <Card.Body>
                  <Card.Title>
                    <h4 className="d-flex justify-content-center ">
                      {data.title}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    <small>
                      {data.text}
                    </small>
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
            ;
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Phone;
