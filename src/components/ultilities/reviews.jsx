import PerfilImage from "../../assets/image/person.png";
import { RiStarSFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

function Reviews() {
  return (
    <motion.div
      initial={{ x: "-100vw, ", y: "-29.1vw" }}
      animate={{ x: 390 }}
      transition={{ type: "spring", stiffness: 40 }}
    >
      <div className="z-50 flex absolute justify-center bg-[#f9432e] top-[0] left-[0] right-[0] w-[94.4dvh] h-[62.1dvh]">
        {/*Start Carrousel boots */}
        <Carousel indicators={false} className="relative">
          <Carousel.Item>
            <section className=" flex justify-center items-center text-center mt-20">
              <img
                src={PerfilImage}
                alt="Image Perfil"
                className="w-[130px] "
              />
            </section>

            <section className=" flex-col text-center items-center mt-10 font-poppins text-[1rem]">
              <p className="text-white break-words ">
                “Sabor divino” en l´Estarit es un lugar que no debes perderte si
                eres amante de la buena pizza. Con su ambiente acogedor y
                servicio impecable. Sin duda repetiremos.
              </p>
            </section>
            <section className="flex text-center items-center justify-center text-white mt-2">
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className=" flex justify-center items-center text-center mt-20">
              <img
                src={PerfilImage}
                alt="Image Perfil"
                className="w-[130px] "
              />
            </section>
            <section className=" flex-col text-center items-center mt-10 font-poppins text-[1rem]">
              <p className="text-white px-10 ">
                La pizza más deliciosa de todo el Bajo Empordá. 🤤 elaborada
                fresca y por su propio dueño. Negocio familiar y excelente
                servicio.
              </p>
            </section>
            <section className="flex text-center items-center justify-center text-white mt-2">
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className=" flex justify-center items-center text-center mt-20">
              <img
                src={PerfilImage}
                alt="Image Perfil"
                className="w-[130px] d-block "
              />
            </section>
            <section className=" flex-col text-center items-center mt-10 font-poppins text-[1rem]">
              <p className="text-white px-10">
                “Sabor divino” en l´Estarit es un lugar que no debes perderte si
                eres amante de la buena pizza. Con su ambiente acogedor y
                servicio impecable. Sin duda repetiremos.
              </p>
            </section>
            <section className="flex text-center items-center justify-center text-white mt-2">
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />{" "}
              <RiStarSFill className="size-6" />
              <RiStarSFill className="size-6" />
            </section>
          </Carousel.Item>
        </Carousel>
      </div>
    </motion.div>
  );
}
export default Reviews;
