import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto font-poppins">
      <h1 className="font-bold text-5xl my-4">Servicio al cliente Telepizza</h1>
      <h3 className="font-bold text-xl">Línea de atención al cliente</h3>
      <p className="font-bold text-4xl">972 527 836</p>
      <h3 className="font-bold text-xl">Horario de atención telefónica</h3>
      <div className="mb-7">
        <p className="text-[#AEB2BB] font-bold">De lunes a jueves </p>
        <p className="text-[#AEB2BB] "> de 13:00 a 00:00</p>
      </div>
      <div className="mb-7">
        <p className="text-[#AEB2BB] font-bold">De viernes a domingo </p>
        <p className="text-[#AEB2BB] "> de 13:00 a 00:30</p>
      </div>

      <h1 className="font-bold text-3xl">Sede Central</h1>
      <p className="text-[#AEB2BB]">Av. Grècia, 31, 17258 L'Estartit, Girona</p>
    </div>
  );
};

export default Contact;
