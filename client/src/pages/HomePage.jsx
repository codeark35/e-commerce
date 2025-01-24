import { Button } from "@mui/material";
import { Banner } from "../components/home/Banner";
import { HomeCategory } from "../components/home/HomeCategory";
import { IoIosArrowRoundForward } from "react-icons/io";

import { ProductItems } from "../components/products/ProductItems";

import banner1 from "../assets/banner-box.jpg";
import banner2 from "../assets/bacola-banner-04.webp";

function HomePage() {
  return (
    <main>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <Banner />
        </div>
        <HomeCategory />

        <section className="homeProducts">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="banner ms-5">
                  <img className="cursor" src={banner1} alt="" />
                </div>
              </div>
              <div className="col-md-9 productRow">
                <div className="d-flex align-items-center">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">BEST SELLER</h3>
                    <p className="text-light text-sml mb-0">
                      Do not miss the current offers until thr end of March
                    </p>
                  </div>
                  <div className="d-flex w-25 justify-content-end ">
                    <Button className="viewAllBtn">
                      View all
                      <IoIosArrowRoundForward size={24} />
                    </Button>
                  </div>
                </div>
                <div className="product_row w-100">
                  <ProductItems />
                </div>
              </div>
              <div className="col-md-3 pt-4">
                <div className="banner  ms-5">
                  <img className="cursor" src={banner2} alt="" />
                </div>
              </div>
              <div className="col-md-9 productRow">
                <div className="d-flex align-items-center mt-5">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                    <p className="text-light text-sml mb-0">
                      New products with updated stocks.
                    </p>
                  </div>
                  <div className="d-flex w-25 justify-content-end ">
                    <Button className="viewAllBtn">
                      View all
                      <IoIosArrowRoundForward size={24} />
                    </Button>
                  </div>
                </div>
                <div className="product_row w-100">
                  <ProductItems />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
