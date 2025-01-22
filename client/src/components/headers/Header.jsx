import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Logo from "../../assets/image2.png";
import { Country } from "./CountryDropdown";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { SearchBox } from "./SearchBox";
import { Navigation } from "./Navigation";
import { useCountry } from "../../context/countryContext";
export function Header() {
    const { getCountries, countries } = useCountry();
    
    useEffect(() =>{
      getCountries();
    },[]);

  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container mb-2">
          <p className="mb-0 mt-0 text-center">
            {" "}
            Este sitio estara <b>ATR</b> cualquier momento{" "}
          </p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex aling-items-center col-sm-2">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <Country countries={countries}/>
              {/** Header Search Here */}
              <SearchBox />
              {/**  Header Search Here */}
              <div className="d-flex align-items-center ms-auto part3">
                <Button className="circle me-3">
                  <FiUser size={24} />
                </Button>
                <div className="ms-auto carTab d-flex align-items-center">
                  <span className="price"> $20</span>
                  <div className="position-relative ms-2">
                    <Button className="circle">
                      <IoBagOutline size={24} />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation/>
     
    </div>
  );
}
