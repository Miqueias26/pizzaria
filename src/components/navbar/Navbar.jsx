import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/image/logorangel.png";

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
    <div className="flex items-center justify-between px-8 ">
      {ShowModel && (
        <div className="animate-slideDown flex flex-col gap-9 justify-center items-center absolute top-0 left-0 z-10 w-full h-[80vh] bg-white">
          <IoCloseOutline
            className="absolute top-3 right-3 text-3xl"
            onClick={handleClose}
          />
          <nav className="flex flex-col gap-14 items-center">
            <Link
              to="/"
              className=" border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer no-underline text-black"
              onClick={handleClose}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer no-underline text-black"
              onClick={handleClose}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer no-underline text-black"
              onClick={handleClose}
            >
              Contacto
            </Link>
            <Link
              to="/nosotros"
              className="border-b-2 border-transparent text-lg font-bold hover:border-black cursor-pointer no-underline text-black"
              onClick={handleClose}
            >
              Nosotros
            </Link>
          </nav>
          <button className="flex justify-center items-center bg-[#D2210D] text-white w-[138px] h-[33px] font-bold rounded">
            Hacer Pedido
          </button>
        </div>
      )}

      <img src={Logo} alt="" className="w-[104px] cursor-pointer" />
      <nav className="hidden md:flex gap-14 items-center bg-[#FFFFFF] py-3 px-36 shadow-sm rounded">
        <Link
          to="/"
          className=" border-b-2 border-transparent text-lg font-bold hover:border-[#717171] cursor-pointer no-underline text-[#717171]"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="border-b-2 border-transparent text-lg font-bold hover:border-[#717171] cursor-pointer no-underline text-[#717171]"
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className="border-b-2 border-transparent text-lg font-bold hover:border-[#717171] cursor-pointer no-underline text-[#717171]"
        >
          Contacto
        </Link>
        <Link
          to="/nosotros"
          className="border-b-2 border-transparent text-lg font-bold hover:border-[#717171] cursor-pointer no-underline text-[#717171]"
        >
          Nosotros
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <button className="hidden md:flex justify-center items-center px-4 py-2 bg-[#D2210D] text-white font-bold rounded-full">
          Comenzar Pedido
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
