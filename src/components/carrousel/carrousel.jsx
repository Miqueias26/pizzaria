import ScrollEffect from "../ultilities/scrolleffect";

function Carrousel() {
  return (
    <ScrollEffect>
      <div className="px-5 py-4 w-full bg-black overflow-hidden font-jockey ">
        <span className="text-white text-[1.7rem] inline-block whitespace-nowrap animate-move font-poppins">
          Sabor Divino <strong className="text-[#e24b3b]">2025</strong> &nbsp;
          &nbsp; Sabor Divino <strong className="text-[#e24b3b]">2025</strong>{" "}
          &nbsp; &nbsp; Sabor Divino{" "}
          <strong className="text-[#e24b3b]">2025</strong> &nbsp; &nbsp; Sabor
          Divino <strong className="text-[#e24b3b]">2025</strong> &nbsp; &nbsp;
          Sabor Divino <strong className="text-[#e24b3b]">2025</strong> &nbsp;
          &nbsp; Sabor Divino <strong className="text-[#e24b3b]">2025</strong>{" "}
          &nbsp; &nbsp; Sabor Divino{" "}
          <strong className="text-[#e24b3b]">2025</strong> &nbsp; &nbsp; Sabor
          Divino 2025&nbsp; &nbsp; Sabor Divino{" "}
          <strong className="text-[#e24b3b]">2025</strong>
        </span>
      </div>
    </ScrollEffect>
  );
}

export default Carrousel;
