import Logo from "../../assets/image/logopizza.png";
import Pizza from "../../assets/image/pizzaHeader.png";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center py-4 mb-3">
      <header className="flex items-center justify-between px-8  w-full mb-4">
        <img src={Logo} alt="" className="w-[110px] cursor-pointer" />
        <ul className="flex gap-14 text-lg font-bold">
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

        <button className="bg-[#D2210D] text-white w-[138px] h-[33px] font-bold rounded">
          Hacer Pedido
        </button>
      </header>
      <img src={Pizza} alt="" className="w-[500px]" />
      <h1 className="text-[16.5rem] text-[#CF210D] font-bold font-jockey">
        Sabor Divino
      </h1>
      <p className="text-xl font-md font-poppins ">
        Porque la vida sabe mejor con una pizza divina.
      </p>
    </div>
  );
}

export default Header;
