import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab aling-items-center">
              <span className="icon1">
                <IoMdMenu size={24} />
              </span>

              <span className="mx-2"> ALL CATEGORIES</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
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
                  <Button>Fashion</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Electronic</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Bakery</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Grocery</Button>
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
