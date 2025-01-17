import Slider from "react-slick";
export const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    responsive: [
      {
  }]
  }

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        
        <div className="item">
          <img
            src="https://img.freepik.com/vector-gratis/set-banners-compras-moda_23-2148181079.jpg?t=st=1737035417~exp=1737039017~hmac=9d3e5a62d48fe408f49a25760317fd0d3278a8e4b00f06cd532d0fb552ebce32&w=1380"
            alt="img"
          />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/vector-gratis/set-banners-compras-moda_23-2148181079.jpg?t=st=1737035417~exp=1737039017~hmac=9d3e5a62d48fe408f49a25760317fd0d3278a8e4b00f06cd532d0fb552ebce32&w=1380"
            alt="img"
          />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/vector-gratis/set-banners-compras-moda_23-2148181079.jpg?t=st=1737035417~exp=1737039017~hmac=9d3e5a62d48fe408f49a25760317fd0d3278a8e4b00f06cd532d0fb552ebce32&w=1380"
            alt="img"
          />
        </div>
      
      </Slider>
    </div>
  );
};
