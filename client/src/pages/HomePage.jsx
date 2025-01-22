import { Banner } from "../components/home/Banner";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

import { ProductItems } from "../components/products/ProductItems";

import banner1 from "../assets/banner-box.jpg";

function HomePage() {
  return (
    <main>
      <div className="row">
        <div className="col-md-3"></div>
        <Banner />
        <section className="homeProducts">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="banner">
                  <img className="cursor w-100" src={banner1} alt="" />
                </div>
              </div>
              <div className="col-md-8 productRow">
                {/*     <img className="cursor" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="" /> */}
                <div className="d-flex align-items-center">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">Best Seller</h3>
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
