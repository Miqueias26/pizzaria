import PropTypes from "prop-types";

const CardContent = ({ image, title, text, text2, price }) => {
  const formattedPrice =
    typeof price === "number"
      ? new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(price)
      : "N/A"; // Exibe 'N/A' se nao passar o valor meu parceiro

<<<<<<< HEAD
const CardContent = ({ image, title, text, text2, text3 }) => {
  return (
    <div className="w-[18rem] flex-col h-auto justify-center text-center border-2 border-grey rounded-[3%]  pb-4 pl-2 pr-2   transform transition-all duration-500 hover:scale-110 hover:rotate-3 ">
      <p className="flex justify-center text-center pt-2 text-[1.3rem]">
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
      </p>
      <img
        src={image}
        alt={title}
        className=" flex justify-center text-center bg-zinc-20 "
      />
      <strong className="font-poppins text-[1.2rem] ">{text}</strong>
      <p className="font-poppins">{text2}</p>
      <p className="font-poppins text-[#D2210D] font-bold">{text3}</p>
=======
  return (
    <div className="h-[390px] flex flex-col items-center justify-between rounded-3xl bg-white shadow-sm px-4 py-1 cursor-pointer transform transition-transform duration-200 hover:scale-105">
      <img src={image} alt={title} className="w-[200px]" />
      <div>
        <p className="font-poppins text-[1.2rem] font-bold m-0">{text}</p>
        <p className="font-poppins text-sm text-[#AEB2BB] mb-1 max-w-64">
          {text2}
        </p>
        {price !== undefined && (
          <p className="text-[#D2210D] text-lg font-poppins font-extrabold">
            {formattedPrice}
          </p>
        )}
      </div>
>>>>>>> joao
    </div>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

function Card() {
  return (
<<<<<<< HEAD
    <div className="flex-col w-full text-center">
      <span className="font-jost text-[22rem] text-black tracking-wide ">
        Best-
      </span>
      <span className="font-jost text-[3.5rem] text-[#D2210D]">Sellers.</span>

      <div className="flex w-full gap-3 justify-center text-left pl-2 pr-2 pb-3 ">
=======
    <div className="flex flex-col w-full justify-center items-center px-8">
      <div className="mb-1">
        <span className="font-jost text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[22rem] text-black tracking-wide block md:inline-block">
          Best-
        </span>
        <span className="font-jost text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] text-[#D2210D] block md:inline-block">
          Sellers.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center p-4">
>>>>>>> joao
        <CardContent
          image="/public/card9.png"
          text="Marguerita"
          text2="Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva."
          title="Pizza Marguerita"
<<<<<<< HEAD
          text3="11,99€"
=======
          price={8.2}
>>>>>>> joao
        />

        <CardContent
          image="/public/card10.png"
          text="Pepperoni"
          text2="Salsa de tomate, Mozzarella, Pepperoni."
          title="Pizza Pepperoni"
<<<<<<< HEAD
          text3="12,99€"
=======
          price={8.2}
>>>>>>> joao
        />
        <CardContent
          image="/public/card6.png"
          text="Cuatro Quesos"
          text2="Mozzarella, Queso azul, Parmesano, Queso Emmental."
          title="Pizza Cuatro Quesos"
<<<<<<< HEAD
          text3="9,99€"
=======
          price={8.2}
>>>>>>> joao
        />
        <CardContent
          image="/public/card7.png"
          text="Hawaiana"
          text2="Salsa de tomate, Mozzarella, Jamón, Piña."
          title="Pizza Hawaiana"
<<<<<<< HEAD
          text3="11,99€"
=======
          price={8.2}
>>>>>>> joao
        />
        <CardContent
          image="/public/card11.png"
          text="Babacoa"
          text2="Salsa de tomate, Mozzarella, Bacon, Carne picada."
          title="Pizza Babacoa"
<<<<<<< HEAD
          text3="14,99€"
=======
          price={8.2}
>>>>>>> joao
        />
      </div>
    </div>
  );
}

export default Card;
