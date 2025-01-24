import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export const Navigation = () => {
  const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab aling-items-center"
                onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}
              >
                <span className="icon1">
                  <IoMdMenu size={24} />
                </span>

                <span className="mx-2"> ALL CATEGORIES</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isOpenSidebarNav === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Men <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu ">
                      <Link to="/">
                        <Button>T-Shirts</Button>
                      </Link>
                      <Link to="/">
                        <Button>Tops</Button>
                      </Link>
                      <Link to="/">
                        <Button>Sweaters</Button>
                      </Link>
                      <Link to="/">
                        <Button>Shirts</Button>
                      </Link>
                      <Link to="/">
                        <Button>Jackets</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Women< FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu ">
                      <Link to="/">
                        <Button>T-Shirts</Button>
                      </Link>
                      <Link to="/">
                        <Button>Tops</Button>
                      </Link>
                      <Link to="/">
                        <Button>Sweaters</Button>
                      </Link>
                      <Link to="/">
                        <Button>Shirts</Button>
                      </Link>
                      <Link to="/">
                        <Button>Jackets</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Electronics</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Beauty &amp; Health</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Sports &amp; Outdoors</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Furniture</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Garden &amp; Outdoor</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Travel &amp; Lifestyle</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Books &amp; Magazines</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ms-auto w-100">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Men</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>

                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>

                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Women</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>

                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>

                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Beauty</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>watches</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mobile</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>About us</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
