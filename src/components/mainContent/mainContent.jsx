import bgMain2 from "/public/bgMain2.png";
import ButtonUi from "../../components/ultilities/button";
import ScrollEffect from "../ultilities/scrolleffect";

function MainContent() {
  return (
    <ScrollEffect>
      <div className="w-full flex flex-col lg:flex-row text-center items-center bg-white relative">
        <section className="w-full lg:w-[50%] px-6 lg:px-10 flex flex-col items-center text-center">
          <p className="text-[1.2rem] lg:text-[1.7rem] font-jost text-black leading-relaxed text-wrap">
            Imagina morder una rebanada de pizza tan deliciosa que haga que tu
            paladar dance de placer. En
            <strong className="text-[#D2210D]"> Sabor Divino</strong>, cada
            ingrediente se elige con cariño, cada masa se prepara con perfección
            y cada horno es una promesa de un sabor inigualable.
          </p>
          <ButtonUi />
        </section>

        {/* Seção de Imagem */}
        <section className="w-full lg:w-[50%] flex items-center justify-center bg-[#f9432e] mt-6 lg:mt-0">
          <img
            src={bgMain2}
            alt=""
            className="w-full max-w-[250px] lg:max-w-[450px] object-contain"
          />
        </section>
      </div>
    </ScrollEffect>
  );
}

export default MainContent;
