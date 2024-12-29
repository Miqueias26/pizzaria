import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/image/logopizza.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className="px-8 py-14 flex border-t-2">
      <div className="flex  flex-col items-center mr-[15rem]">
        <img src={Logo} alt="" className="w-[100px] mb-4" />
        <div className="flex gap-3 items-center">
          <BsTwitterX className="w-[24px] h-[24px] cursor-pointer" />
          <FaInstagram className="w-[24px] h-[24px] cursor-pointer" />
          <FiYoutube className="w-[24px] h-[24px] cursor-pointer" />
          <FaLinkedin className="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </div>
      <div className="mr-[15rem]">
        <h2 className="font-poppins font-bold text-xl mb-6">Tipos de Pizza</h2>
        <ul className="flex flex-col gap-4 text-md font-poppins font-light">
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
        <h2 className="font-poppins font-bold text-xl mb-6">Explorar</h2>
        <ul className="flex flex-col gap-4 text-md font-poppins font-light">
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
  );
}

export default Footer;
