import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
// import { useLoaderData } from "react-router-dom"

const Home = () => {
    // const estates = useLoaderData();
    return (
        <div className="md:p-3 lg:px-14 mb-7 flex flex-col items-center">
            <Helmet>
                <title>Cozy | Home</title>
            </Helmet>
            <h2 className="text-5xl text-green-700 mb-10 font-medium">BUILDING HOMES</h2>
            <h4 className="text-xl mb-10 font-light max-w-screen-md text-center mx-auto">With your support, We're providing quality homes to families around the world.</h4>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;