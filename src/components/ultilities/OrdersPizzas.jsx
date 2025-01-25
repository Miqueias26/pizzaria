import React, { useState } from "react";

const OrdersSystem = () => {
  // Definimos o estado inicial usando useState.
  // Cada item possui: id (identificador único), title (nome do produto), price (preço para tamanho médio),
  // priceLarge (preço para tamanho grande), quantity (quantidade inicial) e size (tamanho padrão inicial como "média").
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: "Marguerita",
      price: 10,
      priceLarge: 15,
      quantity: 0,
      size: "média",
    },
    {
      id: 2,
      title: "Pepperoni",
      price: 10,
      priceLarge: 15,
      quantity: 0,
      size: "média",
    },
    {
      id: 3,
      title: "Hawaiana",
      price: 10,
      priceLarge: 15,
      quantity: 0,
      size: "média",
    },
    {
      id: 4,
      title: "Cuatro quesos",
      price: 10,
      priceLarge: 15,
      quantity: 0,
      size: "média",
    },
    {
      id: 5,
      title: "Pepsi",
      price: 10,
      priceLarge: 15,
      quantity: 0,
      size: "média",
    },
  ]);

  // Função responsável por alterar a quantidade de um item no pedido.
  // Recebe como parâmetros o `id` do item a ser modificado e o `change`, que pode ser 1 (incrementar) ou -1 (decrementar).
  const basketOperator = (id, change) => {
    setOrders((orders) =>
      orders.map(
        (order) =>
          order.id === id // Verifica se o id do item corresponde ao id passado.
            ? {
                ...order, // Copia os dados do item.
                quantity: Math.max(0, Math.min(5, order.quantity + change)), // Atualiza a quantidade, garantindo que esteja entre 0 e 5.
              }
            : order // Caso o id não corresponda, mantém o item inalterado.
      )
    );
  };

  // Função responsável por alterar o tamanho (média ou grande) de um item.
  // Recebe o `id` do item e o novo tamanho (`newSize`).
  const changeSize = (id, newSize) => {
    setOrders((orders) =>
      orders.map(
        (order) =>
          order.id === id // Verifica se o id do item corresponde ao id passado.
            ? { ...order, size: newSize } // Atualiza o tamanho do item.
            : order // Mantém os outros itens inalterados.
      )
    );
  };

  // Calcula o total a pagar pelos pedidos.
  // Usamos o método `reduce` para somar os valores. Ele percorre o array de pedidos (orders).
  const total = orders.reduce(
    (initialValue, order) =>
      // Verifica o tamanho do item e usa o preço correspondente (média ou grande), multiplicando pela quantidade.
      initialValue +
      (order.size === "média" ? order.price : order.priceLarge) *
        order.quantity,
    0 // O valor inicial da soma é 0.
  );

  return (
    <div className="flex flex-col">
      {/* Mapeamos o array `orders` para exibir cada item na interface. */}
      {orders.map((order) => (
        <div key={order.id}>
          <div className="flex justify-between">
            {/* Exibimos o título do item e seu preço correspondente ao tamanho selecionado. */}
            <div className="flex items-center text-center relative">
              <p>{order.title}</p>
              <p className="absolute left-40">
                {order.size === "média" ? order.price : order.priceLarge}€
              </p>
            </div>
            {/* Controles para adicionar ou remover itens do pedido. */}
            <div className="flex items-center text-center relative">
              {/* Botão para incrementar a quantidade. */}
              <button
                onClick={() => basketOperator(order.id, 1)} // Chama `basketOperator` com +1.
                className="absolute right-8"
              >
                +
              </button>
              {/* Exibe a quantidade atual do item. */}
              <span className="absolute right-3">{order.quantity}</span>
              {/* Botão para decrementar a quantidade. */}
              <button
                onClick={() => basketOperator(order.id, -1)} // Chama `basketOperator` com -1.
                className="absolute"
              >
                -
              </button>
            </div>
          </div>
          {/* Botões para selecionar o tamanho do item (média ou grande). */}
          <div className="flex space-x-2 mt-2">
            {/* Botão para selecionar o tamanho "média". */}
            <button
              onClick={() => changeSize(order.id, "média")} // Altera o tamanho para "média".
              className={`px-4 py-2 border rounded ${
                order.size === "média"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Média
            </button>
            {/* Botão para selecionar o tamanho "grande". */}
            <button
              onClick={() => changeSize(order.id, "grande")} // Altera o tamanho para "grande".
              className={`px-4 py-2 border rounded ${
                order.size === "grande"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Grande
            </button>
          </div>
        </div>
      ))}
      <hr />
      {/* Exibe o valor total a pagar. */}
      <div>
        <p>
          O total a pagar é: <strong>{total}€</strong>
        </p>
      </div>
    </div>
  );
};

export default OrdersSystem;
