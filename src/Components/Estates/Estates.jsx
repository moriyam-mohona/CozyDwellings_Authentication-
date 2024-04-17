import { useLoaderData } from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";

const Estates = () => {
  const estates = useLoaderData();
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl text-green-700 mb-10 font-medium">
        Manage Your Property
      </p>
      <h4 className="md:text-xl font-light max-w-screen-md mx-auto">
        We offer a scalable, efficient, established model for empowering local
        leaders & construction teams to build homes for at risk members of their
        own communities.
      </h4>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto">
        {estates.map((estate) => (
          <EstateCard estate={estate} key={estate.id} />
        ))}
      </div>
    </div>
  );
};

export default Estates;
