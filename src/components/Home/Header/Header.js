import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../images/image-1.png";
import image2 from "../../../images/image-2.png";
import image3 from "../../../images/image-3.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src={image1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h1>TRAVELLING AROUND THE WORLD</h1>
            <p>Travelling make man Refresh.TO go around the world.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src={image2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h1 className="text-dark">EXPRIENCE THE NATURE'S BEAUTY</h1>
            <p className="text-dark">
              Nature is a God gifted beautiful.Enjoy the Nature and be happy.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src={image3}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h1>EXPLOR WORLD HERITAGE TURE IN SUNDORBON</h1>
            <p>
              The place between your comfort zone and your dream is where life
              takes place.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
