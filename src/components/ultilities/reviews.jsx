import PerfilImage from "../../assets/image/person.png";
import { RiStarSFill } from "react-icons/ri";

function Reviews() {
  return (
    <div className="z-50 flex absolute justify-center bg-[#f9432e] top-[0] left-[] right-[0] w-[91.1dvh] h-[62.1dvh]">
      <div className=" flex-col text-center items-center">
        <section className=" flex justify-center items-center text-center mt-10">
          <img src={PerfilImage} alt="Image Perfil" className="w-[130px] " />
        </section>

        <section className=" flex-col text-center items-center mt-10 font-poppins text-[1rem]">
          <p className="text-white ">
            “Sabor divino” en l´Estarit es un lugar que no debes perderte si
            eres amante de la buena pizza. Con su ambiente acogedor y servicio
            impecable. Sin duda repetiremos.
          </p>
        </section>
        <section className="flex text-center items-center justify-center text-white mt-2">
          <RiStarSFill className="size-6" /> <RiStarSFill className="size-6" />
          <RiStarSFill className="size-6" /> <RiStarSFill className="size-6" />
          <RiStarSFill className="size-6" />
        </section>
      </div>
    </div>
  );
}
export default Reviews;
