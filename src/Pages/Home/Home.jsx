import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import { useLoaderData } from "react-router-dom"

const Home = () => {
    const estates = useLoaderData();
    console.log(estates)
    return (
        <div className="md:p-3 lg:px-14 mb-7">
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;