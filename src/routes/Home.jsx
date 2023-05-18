import React from "react";
import ContainerAbout from "../components/ContainerAbout";
import ContainerExperience from "../components/ContainerExperience";
import ContainerPortfolio from "../components/ContainerPortfolio";

const Home = () => {
  return (
    <>
      <ContainerAbout />
      <ContainerExperience />
      <ContainerPortfolio />
    </>
  );
};

export default Home;
