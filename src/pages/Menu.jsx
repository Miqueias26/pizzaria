import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosStarOutline } from "react-icons/io";
import { CiPizza } from "react-icons/ci";

import { LuCupSoda, LuIceCreamBowl } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";

const items = [
  {
    id: 1,
    category: "Pizza",
    image: "/pizzaria/card10.png",
    price: 8.0,
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
    onPromotion: false,
  },
  {
    id: 2,
    category: "Pizza",
    image: "/pizzaria/card2.png",
    price: 8.0,
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
    onPromotion: false,
  },
  {
    id: 3,
    category: "Pizza",
    image: "/pizzaria/card3.png",
    price: 8.0,
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
    onPromotion: false,
  },
  {
    id: 4,
    category: "Pizza",
    image: "/pizzaria/card11.png",
    price: 8.0,
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
    onPromotion: true,
  },
  {
    id: 5,
    category: "Pizza",
    image: "/pizzaria/card5.png",
    price: 8.0,
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
    onPromotion: false,
  },
  {
    id: 6,
    category: "Pizza",
    image: "/pizzaria/card6.png",
    price: 8.0,
    text: "Beef Pizza",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva",
    onPromotion: false,
  },
  {
    id: 7,
    category: "Sobremesas",
    image: "/pizzaria/postresmorango.png",
    price: 8.0,
    text: "Pizza Morango",
    text2: "",
    onPromotion: false,
  },
  {
    id: 8,
    category: "Refrigerante",
    image: "/pizzaria/cocacola.png",
    price: 8.0,
    text: "Coca Cola",
    text2: "",
    onPromotion: false,
  },
];

const CardContent = ({ image, price, text, text2 }) => {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return (
    <div className="h-[390px] flex flex-col items-center justify-between rounded-3xl bg-white shadow-sm px-4 py-1 cursor-pointer transform transition-transform duration-200 hover:scale-105">
      <img src={image} className=" w-[200px]   " />
      <div>
        <p className="font-poppins text-[1.2rem] font-bold m-0">{text}</p>
        <p className="font-poppins text-sm text-[#AEB2BB] mb-1 max-w-64">
          {text2}
        </p>
        <p className="text-[#D2210D] text-lg font-poppins font-extrabold">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "Promociones") {
      return item.onPromotion; // Exibe apenas itens em promoção
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center p-2 bg-[#D2210D] justify-center gap-4 mb-4">
        <button
          className={`flex items-center border-none text-lg font-bold bg-none py-2 px-3 rounded-full ${
            selectedCategory === "Promociones"
              ? "text-white border-2 border-white"
              : "text-white"
          }`}
          onClick={() => handleCategoryChange("Promociones")}
        >
          <BiSolidOffer className="text-3xl" /> Promociones
        </button>
        <button
          className={`flex items-center border-none text-lg font-bold bg-none py-2 px-3 rounded-full ${
            selectedCategory === "Pizza"
              ? "text-white border-2 border-white"
              : "text-white"
          }`}
          onClick={() => handleCategoryChange("Pizza")}
        >
          <CiPizza className="text-3xl" /> Pizzas
        </button>
        <button
          className={`flex items-center border-none text-lg font-bold bg-none py-2 px-3 rounded-full ${
            selectedCategory === "Sobremesas"
              ? "text-white border-2 border-white"
              : "text-white"
          }`}
          onClick={() => handleCategoryChange("Sobremesas")}
        >
          <LuIceCreamBowl className="text-3xl" /> Postres
        </button>
        <button
          className={`flex items-center border-none text-lg font-bold bg-none py-2 px-3 rounded-full ${
            selectedCategory === "Refrigerante"
              ? "text-white border-2 border-white"
              : "text-white"
          }`}
          onClick={() => handleCategoryChange("Refrigerante")}
        >
          <LuCupSoda className="text-3xl" /> Bebidas
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <CardContent
            key={item.id}
            image={item.image}
            text={item.text}
            text2={item.text2}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
