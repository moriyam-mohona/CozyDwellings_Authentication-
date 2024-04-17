import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
// import { useLoaderData } from "react-router-dom"

const Home = () => {
  // const estates = useLoaderData();
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-14 mb-5 flex flex-col items-center">
      <Helmet>
        <title>Cozy | Home</title>
      </Helmet>
      <h2 className="text-4xl md:text-5xl text-green-700 sm:font-semibold mb-10 font-medium">
        BUILDING HOMES
      </h2>
      <h4 className="md:text-xl font-light max-w-screen-md mx-auto text-center mb-14">
        With your support, We`re providing quality homes to families around the
        world.
      </h4>
      <Banner></Banner>
      <Estates></Estates>
    </div>
  );
};

export default Home;
