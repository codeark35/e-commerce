import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

export const Country = () => {
  return (
    <Button className="countryDrop">
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <p className="name">España</p>
      </div>
      <span className="ml-auto">
        <FaAngleDown />
      </span>
    </Button>
  );
};
