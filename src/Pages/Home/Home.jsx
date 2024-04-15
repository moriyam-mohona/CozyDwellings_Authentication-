import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
// import { useLoaderData } from "react-router-dom"

const Home = () => {
    // const estates = useLoaderData();
    return (
        <div className="md:p-3 lg:px-14 mb-7">
            <Helmet>
                <title>Cozy | Home</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;