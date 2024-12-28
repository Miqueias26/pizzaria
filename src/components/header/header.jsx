import Logo from "../../assets/image/logopizza.png";
import Pizza from "../../assets/image/pizzaHeader.png";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex items-center justify-between px-8 py-4 w-full mb-2">
        <img src={Logo} alt="" className="w-[90px] cursor-pointer" />
        <ul className="flex gap-14 text-lg font-bold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Contacto</li>
          <li className="cursor-pointer">Nosotros</li>
        </ul>

        <button className="bg-[#D2210D] text-white w-[138px] h-[33px] font-bold">
          Hacer Pedido
        </button>
      </header>
      <img src={Pizza} alt="" />
      <h1 className="text-[10.5rem] text-[#CF210D] font-bold">SABOR DIVINO</h1>
      <p className="text-lg font-sm ">
        Porque la vida sabe mejor con una pizza divina.
      </p>
    </div>
  );
}

export default Header;
