import PizzaMain from "../../assets/image/pizzaMain.jpg";

function MainContent() {
  return (
    <div className="w-full">
      <div className="flex text-center items-center w-full py-10">
        <section className="w-full px-5">
          <p className=" text-center text-[1.84rem] font-jost">
            Imagina morder una rebanada de pizza <br /> tan deliciosa que haga
            que tu paladar <br /> dance de placer. En Sabor Divino, <br />
            cada ingrediente se elige con cariño, <br /> cada masa se prepara
            con perfección y <br /> cada horno es una promesa de <br /> un sabor
            inigualable.
          </p>
        </section>
        <section className="w-full px-5 ">
          <img src={PizzaMain} alt="" className="w-[75%] rounded-lg" />
        </section>
      </div>
    </div>
  );
}

export default MainContent;
