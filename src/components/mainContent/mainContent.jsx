import PizzaMain from "../../assets/image/pizzaMain.jpg";
import { motion } from "framer-motion";

function MainContent() {
  return (
    <div className="w-full">
      <div className="flex text-center items-center w-full py-10">
        <section className="w-full px-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Estado inicial
            animate={{ opacity: 1, x: 0 }} // Estado final
            transition={{ duration: 1.5 }} // Duração da animação
          >
            <p className=" text-center text-[1.84rem] font-jost">
              Imagina morder una rebanada de pizza <br /> tan deliciosa que haga
              que tu paladar <br /> dance de placer. En Sabor Divino, <br />
              cada ingrediente se elige con cariño, <br /> cada masa se prepara
              con perfección y <br /> cada horno es una promesa de <br /> un
              sabor inigualable.
            </p>
          </motion.div>
        </section>

        <section className="w-full px-5 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Estado inicial
            animate={{ opacity: 1, x: 0 }} // Estado final
            transition={{ duration: 1.9 }} // Duração da animação
          >
            <img src={PizzaMain} alt="" className="w-[75%] rounded-lg" />
          </motion.div>
        </section>

        <div></div>
      </div>
    </div>
  );
}

export default MainContent;
