import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm();
  // const {  setValue } = useForm();

  const onSubmit = (data) => {
    const { name, photo } = data;
    updateUserProfile(name, photo).then(() => {
      setUser((prevUser) => {
        toast.success("Profile Updated successfully");
        return { ...prevUser, displayName: name, photoURL: photo };
      });
    });

    // .then((result) => {
    //     if (result.user) {

    //         toast.success('Profile Updated successfully');
    //     }
    // })
    // .catch(error => {
    //     toast.error(error.message);

    // });
  };

  setValue("name", user.displayName || "");
  setValue("photo", user.photoURL || "");

  return (
    <div className="px-14">
      <div className="w-1/2 mx-auto px-5 py-10 mb-16 flex justify-center rounded-3xl border-2 drop-shadow-xl border-green-700 bg-green-50">
        <Helmet>
          <title>Cozy | Update Profile</title>
        </Helmet>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex gap-20 items-center">
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
              className="border rounded w-80 py-3 px-3 text-gray-700"
              {...register("name")}
            />
          </div>
          <div className="mb-6 flex gap-20 items-center">
            <label
              className="block text-xl font-bold mb-2 text-green-800"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="mb-6 flex gap-10 items-center">
            <label
              className="block text-xl font-bold mb-2 text-green-800"
              htmlFor="photo"
            >
              Photo URL:
            </label>
            <input
              className="appearance-none border rounded w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
