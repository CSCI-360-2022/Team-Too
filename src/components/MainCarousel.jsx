import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router';
import firstSlide from '../images/slide1.jpg';
import secondSlide from '../images/slide2.jpg';
import thirdSlide from '../images/slide3.jpg';
import './styles.css';


function DarkVariantExample({eventFunctions}) {
  const {selectEvent} = eventFunctions
  const history = useHistory()
  const imageClick = (x) =>{
    selectEvent(x);
    history.push ('/event')
  }
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <a onClick={()=>imageClick(1)}>
          <img
            className="d-block w-100"
            src={firstSlide}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libdero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a onClick={()=>imageClick(2)}>
        <img
          className="d-block w-100"
          src={secondSlide}
          alt="Second slide"
        />
        </a>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a onClick={()=>imageClick(3)}>
        <img
          className="d-block w-100"
          src={thirdSlide}
          alt="Third slide"
        />
        </a>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;