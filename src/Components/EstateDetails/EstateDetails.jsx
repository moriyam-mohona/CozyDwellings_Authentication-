import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {

    const allEstates = useLoaderData();
    console.log(allEstates)
    const { id } = useParams();
    const currentEstate = allEstates.find(e => e.id === id);

    console.log("ID:", id);
    console.log("Current Estate:", currentEstate);

    return (
        <div className="lg:p-8">
            {currentEstate && (
                <div className=" flex flex-col lg:flex-row">
                    <img src={currentEstate.image} className="p-6 w-1/2 h-fit" />
                    <div>
                        <h1 className="text-3xl font-bold mb-4 font-play">{currentEstate.segment_name}</h1>
                        <p className="text-lg font-medium mb-2"> {currentEstate.estate_title}</p>
                        <hr className="my-4" />
                        <div className="mb-4">
                            <p><span className='font-bold'>Details: </span>{currentEstate.description}</p>
                        </div>
                        <div className="mb-4 flex flex-wrap">
                            {currentEstate.facilities.map((facility, index) => (
                                <span key={index} className="bg-gray-100 text-[#23BE0A] px-4 py-1 rounded-full mr-2 mb-2 font-semibold">{facility}</span>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4">
                            <p className=""><span className="font-bold">Price: </span>  {currentEstate.price}</p>
                            {/* <p className=""> <span className="font-bold">Publisher:</span> {currentEstate.status}</p> */}
                            <p className=""> <span className="font-bold">Area:  </span>{currentEstate.area}</p>
                            <p className=""><span className="font-bold">Location: </span> {currentEstate.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EstateDetails;
