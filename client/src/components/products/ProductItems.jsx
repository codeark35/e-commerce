import { Button, Rating, Stack } from "@mui/material";
import Slider from "react-slick";
import { BsFullscreen } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";
import { NextArrow, PrevArrow } from "../slick/slick-custom";
import product1 from "../../assets/products/product1.jpg";
import product2 from "../../assets/products/product-2.jpg";
import product3 from "../../assets/products/product-3.jpg";
import product4 from "../../assets/products/product-4.jpg";
import product5 from "../../assets/products/product-5.jpg";
import product6 from "../../assets/products/product-6.jpg";

export const ProductItems = () => {
  var productSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Muestra 3 productos a la vez
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />, // Flecha personalizada
    prevArrow: <PrevArrow />,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Para tablets y pantallas medianas
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Para tablets pequeñas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Para móviles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...productSlider}>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product1} alt="img" />
        </div>

        <span className="badge badge-primary">28%</span>
        
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>

        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$5.00</span>
            <span className="netPrice text-danger">$3.00</span>
          </div>
        </div>
      </div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product2} alt="img" />
        </div>
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$26.00</span>
            <span className="netPrice text-danger">$24.00</span>
          </div>
        </div>
      </div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product3} alt="img" />
        </div>
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>Field Roast Chao Cheese Creamy Original</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$10.58</span>
            <span className="netPrice text-danger">$9.30</span>
          </div>
        </div>
      </div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product4} alt="img" />
        </div>
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>Blue Diamond Almonds Lightly Salted</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$13.00</span>
            <span className="netPrice text-danger">$11.99</span>
          </div>
        </div>
      </div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product5} alt="img" />
        </div>
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>USDA Choice Angus Beef Stew Meat</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$50.00</span>
            <span className="netPrice text-danger">$44.00</span>
          </div>
        </div>
      </div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product6} alt="img" />
        </div>
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          {/*  <Button className="btn btn-outline-primary">Add to Cart</Button> */}
          <Button className="btn btn-primary">
            <BsFullscreen size={16} />
          </Button>
          <Button>
            <SlHeart size={16} className="ml-2" />
          </Button>
        </div>
        <div className="info">
          <h4>Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar</h4>
          <span className="text-success">
            <b>In Stock</b>
          </span>
          <Stack spacing={1}>
            <Rating
              className="mt-2"
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
            />
          </Stack>
          <div className="d-flex">
            <span className="oldPrice">$30.00</span>
            <span className="netPrice text-danger">$24.00</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
