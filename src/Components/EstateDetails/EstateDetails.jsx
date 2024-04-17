import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const allEstates = useLoaderData();
  const { id } = useParams();
  const currentEstate = allEstates.find((e) => e.id === id);

  return (
    <div className="px-3 md:px-10">
      <Helmet>
        <title>Cozy | Estate</title>
      </Helmet>
      {currentEstate && (
        <div className="flex flex-col lg:flex-row rounded-xl px-4 lg:px-8 mb-16 lg:gap-8">
          <img
            src={currentEstate.image}
            className="rounded-xl h-64 lg:h-96 w-full lg:w-96 object-cover object-center mb-4 lg:mb-0"
            alt={currentEstate.segment_name}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl text-green-700 mb-6 font-medium">
                {currentEstate.segment_name}
              </h1>
              <p className="text-lg lg:text-xl mb-5 font-light max-w-screen-md">
                {currentEstate.estate_title}
              </p>
              <hr className="my-7" />
              <div className="mb-4">
                <p className="text-lg lg:text-xl text-green-700 mb-3 font-semibold">
                  Details:
                </p>
                <p className="text-base lg:text-lg mb-5 font-light ">
                  {currentEstate.description}
                </p>
              </div>
              <div className="flex flex-col mb-4 text-lg lg:text-xl">
                {currentEstate.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-3 text-green-600 font-medium"
                  >
                    <FaArrowAltCircleRight />
                    {facility}
                  </span>
                ))}
              </div>
              <hr className="my-4" />
            </div>
            <div>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className="text-lg lg:text-xl text-green-700 mb-3 font-semibold">
                  Price:
                </span>{" "}
                {currentEstate.price}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className="text-lg lg:text-xl text-green-700 mb-3 font-semibold">
                  Area:
                </span>{" "}
                {currentEstate.area}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className="text-lg lg:text-xl text-green-700 mb-3 font-semibold">
                  Location:
                </span>{" "}
                {currentEstate.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstateDetails;
