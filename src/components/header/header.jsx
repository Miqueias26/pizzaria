import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/image/logopizza.png";
import Pizza from "../../assets/image/pizzaHeader.png";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [ShowModel, setShowModel] = useState(false);

  const handleOpen = () => {
    setShowModel(true);
  };
  const handleClose = () => {
    setShowModel(false);
  };

  useEffect(() => {
    if (ShowModel) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [ShowModel]);

  return (
    <div className="flex flex-col justify-center items-center py-4 mb-3">
      {ShowModel && (
        <div className="animate-slideDown flex flex-col gap-9 justify-center items-center absolute top-0 left-0 z-10 w-full h-[80vh] bg-white">
          <IoCloseOutline
            className="absolute top-3 right-3 text-3xl"
            onClick={handleClose}
          />
          <ul className=" flex flex-col gap-12 text-lg font-bold">
            <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
              Home
            </li>
            <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
              Menu
            </li>
            <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
              Contacto
            </li>
            <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
              Nosotros
            </li>
          </ul>
          <button className="flex justify-center items-center bg-[#D2210D] text-white w-[138px] h-[33px] font-bold rounded">
            Hacer Pedido
          </button>
        </div>
      )}
      <header className="flex items-center justify-between px-8  w-full mb-4">
        <img src={Logo} alt="" className="w-[110px] cursor-pointer" />
        <ul className=" hidden md:flex gap-14 text-lg font-bold">
          <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
            Home
          </li>
          <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
            Menu
          </li>
          <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
            Contacto
          </li>
          <li className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer">
            Nosotros
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="hidden md:flex justify-center items-center bg-[#D2210D] text-white w-[138px] h-[33px] font-bold rounded">
            Hacer Pedido
          </button>
          {!ShowModel && (
            <HiOutlineMenuAlt3
              className="md:hidden text-2xl"
              onClick={handleOpen}
            />
          )}
        </div>
      </header>
      <img src={Pizza} alt="" className="w-[500px]" />
      <h1 className="text-7xl md:text-[10rem] lg:text-[16.2rem] text-[#CF210D] font-bold font-jockey">
        Sabor Divino
      </h1>
      <p className="text-sm md:text-xl font-md font-poppins ">
        Porque la vida sabe mejor con una pizza divina.
      </p>
    </div>
  );
}

export default Header;
