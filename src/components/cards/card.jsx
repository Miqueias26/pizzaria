import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ScrollEffect from "../ultilities/scrolleffect";

const CardContent = ({ image, title, text, text2, price }) => {
  const formattedPrice =
    typeof price === "number"
      ? new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(price)
      : "N/A"; // Exibe 'N/A' se nao passar o valor meu parceiro

  return (
    <ScrollEffect>
      <div className="h-[390px] flex flex-col items-center justify-between rounded-3xl bg-white shadow-sm px-4 py-1 cursor-pointer transform transition-transform duration-200 hover:scale-105">
        <img src={image} alt={title} className="w-[200px]" />
        <div>
          <p className="font-poppins text-[1.2rem] font-bold m-0">{text}</p>
          <p className="font-poppins text-sm text-[#AEB2BB] mb-1 max-w-64">
            {text2}
          </p>
          {price !== undefined && (
            <p className="text-[#2bd845] text-lg font-poppins font-extrabold">
              {formattedPrice}
            </p>
          )}
        </div>
      </div>
    </ScrollEffect>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

function Card() {
  return (
    <ScrollEffect>
      <div className="flex flex-col w-full justify-center items-center px-8">
        <div className="mb-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="font-jost text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[14rem] 2xl:text-[22rem] text-black tracking-wide block md:inline-block">
              Best-
            </span>
            <span className="font-jost text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[6rem] text-[#2bd845] block md:inline-block">
              Sellers.
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center p-4">
          <CardContent
            image="/pizzaria/card9.png"
            text="Marguerita"
            text2="Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva."
            title="Pizza Marguerita"
            price={8.2}
          />

          <CardContent
            image="/pizzaria/card10.png"
            text="Pepperoni"
            text2="Salsa de tomate, Mozzarella, Pepperoni."
            title="Pizza Pepperoni"
            price={8.2}
          />
          <CardContent
            image="/pizzaria/card6.png"
            text="Cuatro Quesos"
            text2="Mozzarella, Queso azul, Parmesano, Queso Emmental."
            title="Pizza Cuatro Quesos"
            price={8.2}
          />
          <CardContent
            image="/pizzaria/card7.png"
            text="Hawaiana"
            text2="Salsa de tomate, Mozzarella, Jamón, Piña."
            title="Pizza Hawaiana"
            price={8.2}
          />
          <CardContent
            image="/pizzaria/card11.png"
            text="Babacoa"
            text2="Salsa de tomate, Mozzarella, Bacon, Carne picada."
            title="Pizza Babacoa"
            price={8.2}
          />
        </div>
      </div>
    </ScrollEffect>
  );
}

export default Card;
