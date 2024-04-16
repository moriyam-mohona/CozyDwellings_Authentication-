import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const allEstates = useLoaderData();
    const { id } = useParams();
    const currentEstate = allEstates.find(e => e.id === id);

    return (
        <div className="lg:p-8">
            <Helmet>
                <title>Cozy | Estate</title>
            </Helmet>
            {currentEstate && (
                <div className="flex lg:flex-row rounded-xl px-8 mb-16 gap-8 ">
                    <img src={currentEstate.image} className="rounded-xl h-96 w-svw" alt={currentEstate.segment_name} />
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* <p className="text-5xl text-green-700 mb-10 font-medium">Manage Your Property</p>
                            <h4 className="text-xl mb-10 font-light max-w-screen-md text-center mx-auto">We offer a scalable, efficient, established model for empowering local leaders & construction teams to build homes for at risk members of their own communities.
                            </h4> */}
                            <h1 className="text-5xl text-green-700 mb-6 font-medium">{currentEstate.segment_name}</h1>
                            <p className="text-xl mb-5 font-light max-w-screen-md ">{currentEstate.estate_title}</p>
                            <hr className="my-7" />
                            <div className="mb-4">
                                <p className="text-2xl text-green-700 mb-3 font-semibold">Details:</p>
                                <p className="text-md mb-5 font-light ">{currentEstate.description}</p>
                            </div>
                            <div className="flex flex-col mb-4 text-xl">
                                {currentEstate.facilities.map((facility, index) => (
                                    <span key={index} className="flex items-center gap-3 text-green-600 font-medium"><FaArrowAltCircleRight />{facility}</span>
                                ))}
                            </div>
                            <hr className="my-4" />
                        </div>
                        <div>
                            <p className="mb-2 text-lg font-light"><span className="text-xl text-green-700 mb-3 font-semibold">Price:</span> {currentEstate.price}</p>
                            <p className="mb-2 text-lg font-light"><span className="text-xl text-green-700 mb-3 font-semibold">Area:</span> {currentEstate.area}</p>
                            <p className="mb-2 text-lg font-light"><span className="text-xl text-green-700 mb-3 font-semibold">Location:</span> {currentEstate.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EstateDetails;
