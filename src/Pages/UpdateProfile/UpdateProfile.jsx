import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    const { name, photo } = data;
    updateUserProfile(name, photo).then(() => {
      setUser((prevUser) => {
        toast.success("Profile Updated successfully");
        return { ...prevUser, displayName: name, photoURL: photo };
      });
    });
  };

  setValue("name", user.displayName || "");
  setValue("photo", user.photoURL || "");

  return (
    <div className="flex justify-center ">
      <div className=" sm:px-5 md:px-8 py-8 md:py-12 lg:py-16 mb-20 sm:mb-20 md:mb-20 flex flex-col items-center rounded-3xl border-2 border-green-700 bg-green-50">
        <Helmet>
          <title>Cozy | Update Profile</title>
        </Helmet>
        <h1 className="btn glass px-6 py-2 rounded-full bg-green-700 font-semibold text-3xl mb-10 text-white">
          Update Profile
        </h1>
        <img
          src={user?.photoURL || "https://i.ibb.co/vZyksXK/8801434.png"}
          alt="No Image provided"
          className="h-32 sm:h-40 w-32 sm:w-40 rounded-full border-4 border-green-700"
        />
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex gap-10 items-center">
            <label
              className="block text-xl font-bold mb-2 text-green-800"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border rounded w-72 md:w-80 py-3 px-3 text-gray-700"
              {...register("name")}
            />
          </div>
          <div className="mb-6 flex gap-10 items-center">
            <label
              className="block text-xl font-bold mb-2 text-green-800"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-72 md:w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="mb-6 flex gap-2 items-center">
            <label
              className="block text-xl font-bold mb-2 text-green-800"
              htmlFor="photo"
            >
              Photo URL:
            </label>
            <input
              className="appearance-none border rounded w-72 md:w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              {...register("photo")}
            />
          </div>

          <div className="mb-6 flex gap-5 justify-center">
            <button
              type="submit"
              className="btn glass bg-green-700 text-white rounded-xl font-light text-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
