
import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
export const SearchBox = () => {
  return (
    <div className="headerSearch ms-3 me-3">
    <input type="text" placeholder="Search for products..." />
    <Button>
      <IoIosSearch size={24} />
    </Button>
  </div>
  )
}
