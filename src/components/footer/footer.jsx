import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/image/logorangel.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className="px-8 pt-14 flex flex-col">
      <div className="flex py-4 md:py-9 border-b-2">
        <div className="mr-4 md:mr-[10rem] lg:mr-[16.2rem]">
          <img src={Logo} alt="" className="w-[50px] md:w-[100px] mb-4" />
        </div>
        <div className="mr-4 md:mr-[10rem] lg:mr-[16.2rem]">
          <h2 className="font-poppins font-bold text-sm md:text-lg lg:text-xl mb-6">
            Tipos de Pizza
          </h2>
          <ul className="flex flex-col gap-4 text-xs md:text-sm lg:text-md font-poppins font-light">
            <li className="cursor-pointer">Pizza Margherita</li>
            <li className="cursor-pointer">Pizza Pepperoni</li>
            <li className="cursor-pointer">Pizza Hawaiana</li>
            <li className="cursor-pointer">Pizza Quattro Formaggi</li>
            <li className="cursor-pointer">Pizza Vegetariana</li>
            <li className="cursor-pointer">Pizza Barbacoa</li>
            <li className="cursor-pointer">Pizza Marinera</li>
          </ul>
        </div>
        <div>
          <h2 className="font-poppins font-bold text-sm md:text-lg lg:text-xl mb-6">
            Explorar
          </h2>
          <ul className="flex flex-col gap-4 text-xs md:text-sm lg:text-md font-poppins font-light">
            <li className="cursor-pointer">Menú</li>
            <li className="cursor-pointer">Ofertas Especiales</li>
            <li className="cursor-pointer">Contacto</li>
            <li className="cursor-pointer">Ubicación</li>
            <li className="cursor-pointer">Reseñas</li>
            <li className="cursor-pointer">Pedidos Online</li>
            <li className="cursor-pointer">Sobre Nosotros</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center py-7">
        <h2 className="text-black font-normal text-sm md:text-lg cursor-pointer">
          &copy; 2024 Pizzaria Inc.
        </h2>
        <div className="flex gap-7 items-center">
          <BsTwitterX className="md:w-[24px] md:h-[24px] cursor-pointer" />
          <a
            href="https://www.instagram.com/sabordivinopizzeria/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FaInstagram className="md:w-[24px] md:h-[24px] cursor-pointer" />
          </a>
          <FiYoutube className="md:w-[24px] md:h-[24px] cursor-pointer" />
          <FaLinkedin className="md:w-[24px] md:h-[24px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
