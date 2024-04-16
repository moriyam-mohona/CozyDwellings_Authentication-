import { useLoaderData } from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";
import { Helmet } from "react-helmet-async";

const Estates = () => {
    const estates = useLoaderData();
    return (
        <div className="text-center ">
            {/* <button className="btn btn-lg rounded-full px-7 py-0 bg-green-200 text-green-600 text-base block mx-auto mb-4">Estates</button> */}
            <p className="text-5xl text-green-700 mb-10 font-medium">Manage Your Property</p>
            <h4 className="text-xl mb-10 font-light max-w-screen-md text-center mx-auto">We offer a scalable, efficient, established model for empowering local leaders & construction teams to build homes for at risk members of their own communities.
            </h4>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    estates.map(estate => (
                        <EstateCard estate={estate} key={estate.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Estates;