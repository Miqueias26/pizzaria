import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/image/logorangel.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" pt-14 flex flex-col ">
      {/* Seção Principal */}
      <div className="flex flex-col md:flex-row py-6 px-4 md:px-8 lg:px-16">
        {/* Coluna 1 - Logo e Tipos de Pizza */}
        <div className="flex flex-col md:flex-row md:w-1/2">
          <div className="mb-8 md:mb-0 md:mr-10 lg:mr-20">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[60px] md:w-[100px]" />
            </Link>
          </div>
          <div className="mb-8 md:mb-0 md:mr-10 lg:mr-20">
            <h2 className="font-poppins font-bold text-base md:text-lg lg:text-xl mb-4">
              Tipos de Pizza
            </h2>
            <ul className="flex flex-col gap-2 text-sm md:text-base font-light p-0">
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
            <h2 className="font-poppins font-bold text-base md:text-lg lg:text-xl mb-4">
              Explorar
            </h2>
            <ul className="flex flex-col gap-2 text-sm md:text-base font-light p-0">
              <li className="cursor-pointer">Ofertas Especiales</li>
              <li className="cursor-pointer">Contacto</li>
              <li className="cursor-pointer">Reseñas</li>
              <li className="cursor-pointer">Sobre Nosotros</li>
            </ul>
          </div>
        </div>

        {/* Coluna 2 - Atendimento ao Cliente */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h1 className="font-poppins font-bold text-lg md:text-2xl mb-4">
            Servicio al Cliente Telepizza
          </h1>
          <div className="mb-6">
            <h3 className="font-bold text-sm md:text-base">
              Línea de atención al cliente
            </h3>
            <p className="font-bold text-xl md:text-2xl">972 527 836</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-sm md:text-base">
              Horario de atención telefónica
            </h3>
            <p className="text-[#AEB2BB] text-sm">
              De lunes a jueves: 13:00 a 00:00
            </p>
            <p className="text-[#AEB2BB] text-sm">
              De viernes a domingo: 13:00 a 00:30
            </p>
          </div>
          <div>
            <h1 className="font-bold text-sm md:text-lg">Sede Central</h1>
            <p className="text-[#AEB2BB] text-sm">
              Av. Grècia, 31, 17258 L'Estartit, Girona
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-1 px-8 bg-[#7D0E14]">
        <h2 className="text-white  font-poppins font-bold text-xs md:text-md lg:text-lg cursor-pointer m-0">
          &copy; 2024 Pizzaria Inc.
        </h2>
        <div className="flex items-center gap-3 md:gap-7 ">
          <p className="text-xs text-white font-poppins m-0">Síguenos </p>
          <BsTwitterX className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-white  cursor-pointer" />
          <a
            href="https://www.instagram.com/sabordivinopizzeria/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaInstagram className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] cursor-pointer text-white" />
          </a>
          <FiYoutube className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] cursor-pointer text-white" />
          <FaLinkedin className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
