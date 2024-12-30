import PropTypes from "prop-types";

const CardContent = ({ image, title, text, text2 }) => {
  return (
    <div className="w-15 h-auto text-center border-2 border-grey rounded-[10%] p-3">
      <img src={image} alt={title} className="" />
      <strong className="">{text}</strong>
      <p className="">{text2}</p>
      <button className=" bg-green-500 text-white px-3 py-1 rounded-sm">
        comprar
      </button>
    </div>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

function Card() {
  return (
    <div className="flex w-full gap-3">
      <CardContent
        image="../../../public/card1.png"
        text="Marguerita"
        text2="Salsa de tomate,
Mozzarella,
Albahaca fresca,
Aceite de oliva."
        title="Pizza Marguerita"
      />

      <CardContent
        image="../../../public/card1.png"
        text="Pepperoni"
        text2="Salsa de tomate,
Mozzarella,
Pepperoni."
        title="Pizza Pepperoni"
      />
      <CardContent
        image="../../../public/card1.png"
        text="Cuatro Quesos"
        text2="Mozzarella,
Queso azul,
Parmesano,
Queso Emmental. "
        title="Pizza Cuatro Quesos"
      />
      <CardContent
        image="../../../public/card1.png"
        text="Hawaiana"
        text2="Salsa de tomate
Mozzarella
Jamón
Piña"
        title="Pizza Hawaiana"
      />
    </div>
  );
}

export default Card;
