import { span } from "framer-motion/client";
import React, { useState } from "react";

const OrdersPizzas = () => {
  const [order, setOrder] = useState(0);

  const AddUnit = () => {
    setOrder((Order) => Math.min(Order + 1, 9));
  };

  const LetsRemove = () => {
    setOrder((Order) => Math.max(Order - 1, 0));
    {
      /*Math.max evita que fique negativo */
    }
  };

  return (
    <div className="flex gap-3 items-center justify-between relative">
      <button onClick={AddUnit} className="absolute right-10 top-[10px]">
        +
      </button>
      <div className="absolute  right-4">{order > 0 && <span>{order}</span>}</div>
      <button onClick={LetsRemove} className="absolute ">
        -
      </button>
    </div>
  );
};

export default OrdersPizzas;
