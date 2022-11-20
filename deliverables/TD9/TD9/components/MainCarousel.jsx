import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../images/firstSlide.svg';
import secondSlide from '../images/secondSlide.svg';
import thirdSlide from '../images/thirdSlide.svg';

function DarkVariantExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/event">
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
        <img
          className="d-block w-100"
          src={secondSlide}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdSlide}
          alt="Third slide"
        />
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