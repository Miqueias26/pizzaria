import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/image/logorangel.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className=" pt-14 flex flex-col ">
      <div className="flex py-4 px-8 md:py-9 ">
        <div className="mr-4 md:mr-[10rem] lg:mr-[16.2rem]">
          <img src={Logo} alt="" className="w-[50px] md:w-[100px] mb-4" />
        </div>
        <div className="mr-4 md:mr-[10rem] lg:mr-[16.2rem]">
          <h2 className="font-poppins font-bold text-sm md:text-lg lg:text-xl mb-6">
            Tipos de Pizza
          </h2>
          <ul className="flex flex-col gap-4 text-xs md:text-sm lg:text-md font-poppins font-light p-0 m-0">
            <li className="cursor-pointer">Pizza Margherita</li>
            <li className="cursor-pointer">Pizza Pepperoni</li>
            <li className="cursor-pointer">Pizza Hawaiana</li>
            <li className="cursor-pointer">Pizza Quattro Formaggi</li>
            <li className="cursor-pointer">Pizza Vegetariana</li>
            <li className="cursor-pointer">Pizza Barbacoa</li>
            <li className="cursor-pointer">Pizza Marinera</li>
          </ul>
        </div>
        <div className="mr-4 md:mr-[10rem] lg:mr-[16.2rem]">
          <h2 className="font-poppins font-bold text-sm md:text-lg lg:text-xl mb-6">
            Explorar
          </h2>
          <ul className="flex  flex-col gap-4 text-xs md:text-sm lg:text-md font-poppins font-light p-0 m-0">
            <li className="cursor-pointer">Ofertas Especiales</li>
            <li className="cursor-pointer">Contacto</li>

            <li className="cursor-pointer">Reseñas</li>

            <li className="cursor-pointer">Sobre Nosotros</li>
          </ul>
        </div>
        <div className="font-poppins">
          <h1 className="font-bold text-3xl mb-4">
            Servicio al cliente Telepizza
          </h1>
          <h3 className="font-bold text-lg">Línea de atención al cliente </h3>
          <p className="font-bold text-2xl">972 527 836</p>
          <h3 className="font-bold text-lg">Horario de atención telefónica</h3>
          <div className="mb-7">
            <p className="text-[#AEB2BB] font-bold text-sm">
              De lunes a jueves{" "}
            </p>
            <p className="text-[#AEB2BB] text-sm "> de 13:00 a 00:00</p>
          </div>
          <div className="mb-7">
            <p className="text-[#AEB2BB] font-bold text-sm">
              De viernes a domingo{" "}
            </p>
            <p className="text-[#AEB2BB] text-sm "> de 13:00 a 00:30</p>
          </div>

          <h1 className="font-bold text-xl">Sede Central</h1>
          <p className="text-[#AEB2BB] text-sm">
            Av. Grècia, 31, 17258 L'Estartit, Girona
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center py-1 px-8 bg-[#7D0E14]">
        <h2 className="text-white  font-poppins font-bold text-sm md:text-md cursor-pointer m-0">
          &copy; 2024 Pizzaria Inc.
        </h2>
        <div className="flex items-center gap-7 ">
          <p className="text-white font-poppins m-0">Síguenos : </p>
          <BsTwitterX className="md:w-[18px] md:h-[18px] text-white  cursor-pointer" />
          <a
            href="https://www.instagram.com/sabordivinopizzeria/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaInstagram className="md:w-[18px] md:h-[18px] cursor-pointer text-white" />
          </a>
          <FiYoutube className="md:w-[18px] md:h-[18px] cursor-pointer text-white" />
          <FaLinkedin className="md:w-[18px] md:h-[18px] cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
