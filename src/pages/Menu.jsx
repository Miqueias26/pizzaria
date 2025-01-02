import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosStarOutline } from "react-icons/io";

const items = [
  {
    id: 1,
    category: "Pizza",
    image: "/public/card10.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 2,
    category: "Pizza",
    image: "/public/card2.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 3,
    category: "Pizza",
    image: "/public/card3.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 4,
    category: "Pizza",
    image: "/public/card11.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 5,
    category: "Pizza",
    image: "/public/card5.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 6,
    category: "Pizza",
    image: "/public/card6.png",
    title: "Pizza Marguerita",
    text: "Marguerita",
    text2: "Salsa de tomate, Mozzarella, Albahaca, Aceite de oliva.",
  },
  {
    id: 7,
    category: "Sobremesas",
    image: "/public/postresmorango.png",
    title: "Pizza Morango",
    text: "Pizza Morango",
    text2: "",
  },
  {
    id: 8,
    category: "Refrigerante",
    image: "/public/cocacola.png",
    title: "Coca Cola",
    text: "Coca Cola",
    text2: "",
  },
];

const CardContent = ({ image, title, text, text2 }) => {
  return (
    <div className="w-[18rem] flex-col h-auto justify-center text-center border-2 border-grey rounded-[3%] pb-4 pl-2 pr-2 transform transition-all duration-500 hover:scale-110 hover:rotate-3">
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
        className="flex justify-center text-center bg-zinc-20"
      />
      <strong className="font-poppins text-[1.2rem]">{text}</strong>
      <p className="font-poppins">{text2}</p>
      <button className="bg-[#D2210D] text-white px-3 py-1 rounded-[7%] hover:bg-black">
        comprar
      </button>
    </div>
  );
};

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  text2: PropTypes.string,
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center p-2 bg-[#F4EFE5] rounded-full justify-center gap-9 mb-4">
        <button
          className={`border-none text-lg font-bold bg-none py-2 px-3 rounded-full hover:bg-[#D2210D] hover:text-white ${
            selectedCategory === "Pizza" ? "text-[#D2210D]" : "text-black"
          }`}
          onClick={() => handleCategoryChange("Pizza")}
        >
          Pizzas
        </button>
        <button
          className={`border-none text-lg font-bold bg-none py-2 px-3 rounded-full hover:bg-[#D2210D] hover:text-white ${
            selectedCategory === "Sobremesas" ? "text-[#D2210D]" : "text-black"
          }`}
          onClick={() => handleCategoryChange("Sobremesas")}
        >
          Postres
        </button>
        <button
          className={`border-none text-lg font-bold bg-none py-2 px-3 rounded-full hover:bg-[#D2210D] hover:text-white ${
            selectedCategory === "Refrigerante"
              ? "text-[#D2210D]"
              : "text-black"
          }`}
          onClick={() => handleCategoryChange("Refrigerante")}
        >
          Bebidas
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <CardContent
            key={item.id}
            image={item.image}
            text={item.text}
            text2={item.text2}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
