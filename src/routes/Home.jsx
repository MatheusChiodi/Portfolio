import ContainerAbout from "../components/ContainerAbout";
import ContainerExperience from "../components/ContainerExperience";
import ContainerPortfolio from "../components/ContainerPortfolio";
import Header from "../templates/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ContainerAbout />
      <ContainerExperience />
      <ContainerPortfolio />
    </>
  );
};

export default Home;
