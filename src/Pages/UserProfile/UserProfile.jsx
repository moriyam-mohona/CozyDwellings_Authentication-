import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoIosPersonAdd } from "react-icons/io";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center ">
      <div className="px-7 sm:px-10 md:px-8 py-8 md:py-12 lg:py-16 mb-20 sm:mb-20 md:mb-20 flex flex-col items-center rounded-3xl border-2 border-green-700 bg-green-50">
        <Helmet>
          <title>Cozy | Profile</title>
        </Helmet>
        <img
          src={user?.photoURL || "https://i.ibb.co/vZyksXK/8801434.png"}
          alt="No Image provided"
          className="h-32 sm:h-40 w-32 sm:w-40 rounded-full border-4 border-green-700"
        />
        <form className="mt-6 w-full max-w-md">
          <div className="mb-6 flex sm:flex-row items-center gap-2">
            <label
              className="block text-xl  md:font-bold mb-2  text-green-800"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none w-64 md:w-80  border rounded py-3 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={user.displayName}
              readOnly
            />
          </div>
          <div className="mb-6 flex sm:flex-row items-center gap-2">
            <label
              className="block text-xl md:font-bold mb-2 text-green-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none w-64 md:w-80 border rounded py-3 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="flex gap-5 justify-center">
            <button className="btn glass bg-green-700 text-white rounded-xl font-light text-lg flex items-center">
              <IoIosPersonAdd className="text-xl mr-2" />
              Contact
            </button>
            <button className="btn glass bg-green-700 text-white rounded-xl font-light text-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
