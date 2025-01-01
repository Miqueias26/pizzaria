import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/image/logopizza.png";

import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div className="flex items-center justify-between px-8 py-3  ">
      {ShowModel && (
        <div className="animate-slideDown flex flex-col gap-9 justify-center items-center absolute top-0 left-0 z-10 w-full h-[80vh] bg-white">
          <IoCloseOutline
            className="absolute top-3 right-3 text-3xl"
            onClick={handleClose}
          />
          <ul className="flex flex-col gap-9 items-center justify-center w-full">
            <Link to="/" className="no-underline text-black">
              <li className="pb-1 border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/menu" className="no-underline text-black">
              <li className="pb-1 border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
                Menu
              </li>
            </Link>
            <Link to="/contact" className="no-underline text-black">
              <li className="pb-1 border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
                Contacto
              </li>
            </Link>
            <Link to="/nosotros" className="no-underline text-black">
              <li className="pb-1 border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
                Nosotros
              </li>
            </Link>
          </ul>
          <button className="flex justify-center items-center bg-[#D2210D] text-white w-[138px] h-[33px] font-bold rounded">
            Hacer Pedido
          </button>
        </div>
      )}

      <img src={Logo} alt="" className="w-[110px] cursor-pointer" />
      <ul className="hidden md:flex gap-14 items-center">
        <Link to="/" className="no-underline text-black">
          <li className=" border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/menu" className="no-underline text-black">
          <li className=" border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
            Menu
          </li>
        </Link>
        <Link to="/contact" className="no-underline text-black">
          <li className=" border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
            Contacto
          </li>
        </Link>
        <Link to="/nosotros" className="no-underline text-black">
          <li className=" border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer">
            Nosotros
          </li>
        </Link>
      </ul>

      <div className="flex items-center gap-2">
        <button className="hidden md:flex justify-center items-center px-4 py-2 bg-[#D2210D] text-white font-bold rounded">
          Hacer Pedido
        </button>
        {!ShowModel && (
          <HiOutlineMenuAlt3
            className="md:hidden text-2xl"
            onClick={handleOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
