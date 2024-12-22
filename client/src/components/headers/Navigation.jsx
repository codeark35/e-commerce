import { Link } from 'react-router-dom';
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
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Fashion</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Electronic</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Bakery</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Grocery</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Mobile</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">About us</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Contact</Link>
            </li>
         
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
