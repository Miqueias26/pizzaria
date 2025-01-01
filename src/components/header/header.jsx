import Pizza from "../../assets/image/pizzaHeader.png";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center py-1 mb-3">
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
