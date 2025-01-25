import { div, p } from "framer-motion/client";
import React, { useState } from "react";

{
  /*FUNCION GENERAL DEL CODIGO */
}
const OrdersSystem = () => {
  {
    /*ARRAY QUE HACE EL USO DEL USESTATE PARA PERCORRER LOS OBJETOS CON ID, TITLE, PRECIOS E LA CUANTIDAD QUE INICIALMENTE EMPEZA EN 0 */
  }
  const [orders, setOrders] = useState([
    { id: 1, title: "Marguerita", price: 10, quantity: 0 },
    { id: 2, title: "Pepperoni", price: 10, quantity: 0 },
    { id: 3, title: "Hawaiana", price: 10, quantity: 0 },
    { id: 4, title: "Cuatro quesos", price: 10, quantity: 0 },
    { id: 5, title: "Pepsi", price: 10, quantity: 0 },
  ]);

  {
    /*1º FUNCCION QUE TIENE COMO ARGUMENTO EL ID DE LOS OBJETOS E EL VALOR "CHANGE" QUE ALMACENA LOS ESTADOS DE LAS CANTIDADES DE ADICION O DISMINUICION*/
  }
  {
    /*2º DESPUES DE PASAR LOS ARGUMENTOS EN UNA ARROW FUCNTION SE HACE EL USO DEL SELECTOR DE ESTADO "SETORDERS" Y COMO ARGUMENTO EL ESTADO "ORDERS"
      TENDRÁ UNA ARROW FUNCTION QUE RECIBIRA EL VALOR ORDER COMO ARGUMENTO/*
      3º EL ORDER DEL ARGUMENTO SIRVE COMO OBJETO DESTRACTORIN DE CADA CONPONENTE DEL OBJETO EJ: ORDER.PRICE*/
    /* 4º EL ORDER HACE UN TEST CONDICIONAL CON LAS CLAVES ID Y CON OPERADORES CONDICIONAIS  */
  }
  const basketOperator = (id, change) => {
    setOrders((orders) =>
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              quantity:
                Math.max(0, order.quantity + change) &&
                Math.min(5, order.quantity + change),
            }
          : order
      )
    );
  };
  {
    /*EL TOTAL ES RESPONSABLE POR LA SUMA GENERAL DE LOS PRODUCTOS, SE USA EL REDUCE PARA PERCORRER EL ARRAY E REDUCIR EN LA SUMA */
  }
  {
    /*COMO ARGUMENTO SE PASA UN NUEVO ARGUMENTO CON VALOR INICAL EN 0 Y EL ORDER QUE ES ARGUMENTO DE ORDERS.MAP LA SUMA SE HACE ENTRE PARENTESIS Y MULTIPLICADA EN LA CANTIDAD*/
  }
  const total = orders.reduce(
    (initialValue, order) => initialValue + order.price * order.quantity,
    0
  );
  return (
    <div className="flex flex-col">
      {/*COMO RETORNO DE LA LOGICA EL ORDERNS.MAP ES ACCIONADO EN CHAVES {} Y EL ORDER PASADO COMO UN ARGUMENTO SUSEQUENTE UNA ARROW FUNCTION ES ANADIDA Y ENTRE ASPAS UNA DIV CON LA KEY DEL MAP Y EL ID*/}
      {orders.map((order) => (
        <div key={order.id}>
          <div className="flex justify-between">
            <div className="flex items-center text-center relative ">
              {/*DESTRACTORIN DE LOS TITULOS DEL OBJETO */}
              <p className="">{order.title}</p>
              {/*DESTRACTORIN DE PRICE DEL OBJETO */}
              <p className="absolute left-40">{order.price}€</p>
            </div>
            <div className="flex items-center text-center relative">
              {/*BUTTON INCREMENTAR QUE ACIONA LA FUNCTION BASKETOPERADOR Y QUE TINE COMO ARGUMENTO EL DESTRACTORIN DEL ID, 1*/}
              <button
                onClick={() => basketOperator(order.id, 1)}
                className="absolute right-8"
              >
                +
              </button>
              {/*DESTRACTORIN DE LA CUANTIDADE DE LOS PRODUCTOS*/}
              <span className="absolute right-3">{order.quantity}</span>
              {/*BUTTON DECREMENTAR QUE ACIONA LA FUNCTION BASKETOPERADOR Y QUE TINE COMO ARGUMENTO EL DESTRACTORIN DEL ID, PERO CON -1*/}
              <button
                onClick={() => basketOperator(order.id, -1)}
                className="absolute"
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div>
        <p>
          o total a pagar é: <strong>{total}€</strong>
        </p>
      </div>
    </div>
  );
};

export default OrdersSystem;
