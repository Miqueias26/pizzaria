import React from "react";
import Carrousel from "../components/carrousel/carrousel";
import MainContent from "../components/mainContent/mainContent";
import Card from "../components/cards/card";
import Section from "../components/section/section";
import Header from "../components/header/header";

const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <MainContent />
      <Card />
      <Section />
    </>
  );
};

export default Home;
