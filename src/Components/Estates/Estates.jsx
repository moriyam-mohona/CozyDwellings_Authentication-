import { useLoaderData } from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";

const Estates = () => {
    const estates = useLoaderData();
    return (
        <div className="text-center ">
            <button className="btn rounded-full px-7 py-0 bg-green-200 text-green-600 text-base block mx-auto mb-4">Estates</button>
            <p className="text-green-500 text-5xl font-bold mb-4">Manage Your Property</p>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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