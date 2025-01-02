import React from "react";
import Video from "../../assets/video/videoOficial.webm";

function Section() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] relative">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full z-10"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-12 items-center justify-center bg-black w-full md:w-[50%] px-6 md:px-12 lg:px-24 py-5">
          <h2 className="text-white text-center font-jost text-lg md:text-2xl font-light">
            Imagina morder una rebanada de pizza tan deliciosa que haga que tu
            paladar dance de placer. En Sabor Divino, cada ingrediente se elige
            con cariño, cada masa se prepara con perfección y cada horno es una
            promesa de un sabor inigualable.
          </h2>
          <div className="flex gap-6 md:gap-12">
            <button className="hidden md:flex justify-center items-center px-4 py-2 bg-[#D2210D] text-white font-bold rounded-full">
              Comenzar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
