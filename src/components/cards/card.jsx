import PropTypes from "prop-types";

import { IoIosStarOutline } from "react-icons/io";

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
    </div>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

function Card() {
  return (
    <div className="flex-col w-full text-center">
      <span className="font-jost text-[22rem] text-black tracking-wide ">
        Best-
      </span>
      <span className="font-jost text-[3.5rem] text-[#D2210D]">Sellers.</span>

      <div className="flex w-full gap-3 justify-center text-left pl-2 pr-2 pb-3 ">
        <CardContent
          image="/public/card9.png"
          text="Marguerita"
          text2="Salsa de tomate,
Mozzarella,
Albahaca,
Aceite de oliva."
          title="Pizza Marguerita"
          text3="11,99€"
        />

        <CardContent
          image="/public/card10.png"
          text="Pepperoni"
          text2="Salsa de tomate,
Mozzarella,
Pepperoni."
          title="Pizza Pepperoni"
          text3="12,99€"
        />
        <CardContent
          image="/public/card6.png"
          text="Cuatro Quesos"
          text2="Mozzarella,
Queso azul,
Parmesano,
Queso Emmental. "
          title="Pizza Cuatro Quesos"
          text3="9,99€"
        />
        <CardContent
          image="/public/card7.png"
          text="Hawaiana"
          text2="Salsa de tomate,
Mozzarella,
Jamón,
Piña."
          title="Pizza Hawaiana"
          text3="11,99€"
        />
        <CardContent
          image="/public/card11.png"
          text="Hawaiana"
          text2="Salsa de tomate,
Mozzarella, Bacon,
Carne picada."
          title="Pizza Babacoa"
          text3="14,99€"
        />
      </div>
    </div>
  );
}

export default Card;
