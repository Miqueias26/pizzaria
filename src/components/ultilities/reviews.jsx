import PerfilImage from "../../assets/image/person.png";
import { RiStarSFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

function Reviews() {
  const getAnimation = () => {
    const width = window.innerWidth;

    if (width <= 640) {
      // Mobile (sm)
      return {
        initial: { x: "-100vw", y: "-37vh" },
        animate: { x: -147, y: -315 },
        transition: { type: "spring", stiffness: 50 },
      };
    } else if (width <= 768) {
      // Tablet (md)
      return {
        initial: { x: "-170vw", y: "-40vh" },
        animate: { x: 10, y: 80 },
        transition: { type: "spring", stiffness: 60 },
      };
    } else if (width <= 1324) {
      // Desktop Pequeno (lg)
      return {
        initial: { x: "-100vw", y: "27vw" },
        animate: { x: 0, y: 0 },
        transition: { type: "spring", stiffness: 40 },
      };
    } else if (width <= 1440) {
      // Desktop Grande (xl)
      return {
        initial: { x: "-100vw", y: "-50vh" },
        animate: { x: 388, y: -389 },
        transition: { type: "spring", stiffness: 40 },
      };
    } else {
      // Ultrawide (2xl)
      return {
        initial: { x: "-100vw", y: "-50vh" },
        animate: { x: -365, y: -343.9 },
        transition: { type: "spring", stiffness: 40 },
      };
    }
  };

  const animation = getAnimation();

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div
        className="
  z-50 
  flex 
  absolute 
  justify-center 
  bg-[#f9432e]
  top-[40vh]  /* Ajuste para mobile */
  sm:top-[77px] /* Top específico para sm */
  md:top-[14Vh]  /* Retorno ao padrão em tablets ou maiores */
  lg:top-[5vh]  /* Ajuste para telas grandes */
  xl:top-[0vh]  /* Ajuste para telas extra grandes */
  2xl:top-[0] /* Ajuste para ultrawide */
  2xl:left-[99.4vh]
  left-0 
  right-0 
  w-[100vw] 
  h-[38vh]  /* Ajuste para mobile */
  sm:w-[100vw] sm:h-[80vh] /* Ajuste para sm */
  md:w-[64.3dvh] md:h-[22dvh] /* Retorno ao padrão em tablets ou maiores */
  lg:w-[100dvh] lg:h-[70vh]  /* Ajuste para telas grandes */
  xl:w-[92.6dvh] xl:h-[62.1vh]  /* Ajuste para telas extra grandes MAC */
  2xl:w-[99.5dvh] 2xl:h-[51.7vh]  /* Ajuste para ultrawide */
  py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20
"
      >
        {/* Carousel Section */}
        <Carousel
          indicators={false}
          className="relative w-full  max-w-[90%] sm:max-w-[80%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]"
        >
          <Carousel.Item>
            <section className="flex flex-col justify-center items-center text-center mt-1 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <img
                src={PerfilImage}
                alt="Profile Image"
                className="w-[80px] sm:w-[100px] md:w-[130px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
              />
            </section>

            <section className="flex flex-col justify-center items-center text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 font-poppins text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.rem] xl:text-[1rem] 2xl:text-[1rem]">
              <p className="text-white px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
                “Sabor divino” en l´Estartit es un lugar que no debes perderte
                si eres amante de la buena pizza.
              </p>
            </section>

            <section className="flex justify-center items-center text-white mt-2">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill
                  key={i}
                  className="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2.0rem] xl:text-[2rem] 2xl:text-[2.1rem]"
                />
              ))}
            </section>
          </Carousel.Item>

          {/* Repeated Items */}
          <Carousel.Item>
            <section className="flex flex-col justify-center items-center text-center mt-1 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <img
                src={PerfilImage}
                alt="Profile Image"
                className="w-[80px] sm:w-[100px] md:w-[130px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
              />
            </section>

            <section className="flex flex-col justify-center items-center text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 font-poppins text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.rem] xl:text-[1rem] 2xl:text-[1rem]">
              <p className="text-white px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
                “Sabor divino” en l´Estartit es un lugar que no debes perderte
                si eres amante de la buena pizza.
              </p>
            </section>

            <section className="flex justify-center items-center text-white mt-2">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill
                  key={i}
                  className="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2.0rem] xl:text-[2rem] 2xl:text-[2.1rem]"
                />
              ))}
            </section>
          </Carousel.Item>

          {/* Outro Carousel.Item */}
          <Carousel.Item>
            <section className="flex flex-col justify-center items-center text-center mt-1 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <img
                src={PerfilImage}
                alt="Profile Image"
                className="w-[80px] sm:w-[100px] md:w-[130px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
              />
            </section>

            <section className="flex flex-col justify-center items-center text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 font-poppins text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.rem] xl:text-[1rem] 2xl:text-[1rem]">
              <p className="text-white px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
                “Sabor divino” en l´Estartit es un lugar que no debes perderte
                si eres amante de la buena pizza.
              </p>
            </section>

            <section className="flex justify-center items-center text-white mt-2">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill
                  key={i}
                  className="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2.0rem] xl:text-[2rem] 2xl:text-[2.1rem]"
                />
              ))}
            </section>
          </Carousel.Item>
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Reviews;
