import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"; 
export function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next-arrow" onClick={onClick}>
       
        <IoIosArrowRoundForward size={24}/>
      </div>
    );
  }
  
export function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <IoIosArrowRoundBack size={24}/>
        
      </div>
    );
  }