import { GiPriceTag } from "react-icons/gi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EstateCard = ({ estate }) => {
  const { image, estate_title, segment_name, status, price, id } = estate;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="rounded-3xl p-5 card bg-base-100 border-2 border-green-500 shadow-xl flex flex-col justify-between mx-1 mb-1"
    >
      <img
        src={image}
        alt={estate_title}
        className="object-cover object-center w-full h-60 mb-5 rounded-xl"
      />
      <div className="flex flex-col items-start justify-between w-full gap-2">
        <h2 className="text-2xl font-semibold">{segment_name}</h2>
        <p className="font-light text-start">{estate_title}</p>
        <div className="flex justify-between w-full">
          <p className="text-xl text-red-500 flex gap-2 items-center">
            <GiPriceTag />
            {price}
          </p>
          <p className="text-xl font-medium">#{status}</p>
        </div>
      </div>
      <div className="mt-3 lg:mt-5">
        <Link to={`/estate/${id}`}>
          <button className="btn glass bg-green-500 text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg">
            View Property →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EstateCard;
