import Pizza from "../../assets/image/pizzaHeader.png";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollEffect from "../ultilities/scrolleffect";

function Header() {
  return (
    <ScrollEffect>
      <div className="flex flex-col justify-center items-center py-1 mb-3">
        <button className="hidden md:flex lg:flex justify-center gap-2 items-center px-4 py-2 bg-[#D2210D] text-white  font-bold rounded-full fixed right-[-38px] top-[50%] rotate-90 z-20 transform transition-transform duration-200 hover:scale-105 ">
          <FaPhoneAlt className="text-white " /> 972 527 836
        </button>
        <img src={Pizza} alt="" className="w-[500px]" />
        <h1 className="text-7xl md:text-[10rem] lg:text-[16.2rem] text-[#D2210D] font-bold font-jockey">
          Sabor Divino
        </h1>
        <p className="text-sm md:text-xl font-md font-poppins ">
          Porque la vida sabe mejor con una pizza divina.
        </p>
      </div>
    </ScrollEffect>
  );
}

export default Header;
