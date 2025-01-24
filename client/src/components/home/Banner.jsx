import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../slick/slick-custom";
export const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />, // Flecha personalizada
    prevArrow: <PrevArrow />,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    responsive: [{}],
  };

  return (
 
      <div className="homeBannerSection ms-5 mt-4">
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
              alt="img"
              
            />
          </div>
          <div className="item">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
              alt="img"
            />
          </div>
          <div className="item">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
              alt="img"
            />
          </div>
        </Slider>
      </div>
  
  );
};
