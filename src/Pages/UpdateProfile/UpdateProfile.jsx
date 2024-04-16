import { useContext } from "react";
import { Helmet } from "react-helmet-async";
// import { IoIosPersonAdd } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";
import { register } from "swiper/element";


const UpdateProfile = () => {
    // const { updateProfile, user } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    // updateProfile()
    // const { updateProfile } = useContext(AuthContext);
    return (
        <div className="px-14 py-16">
            <div className=" w-full mb-16 flex justify-center rounded-3xl border-2 drop-shadow-xl border-green-700 bg-green-50">
                < Helmet >
                    <title>Cozy | Profile</title>
                </Helmet >
                <form className="mt-6">
                    <div className="mb-6 flex gap-5 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800 " htmlFor="name">Name : </label>
                        {/* <input className=" border rounded w-80 py-3 px-3 text-gray-700 " id="name" type="text" value={user.displayName} /> */}
                        <input type="text" name="name" placeholder="Enter Your Name" className="border rounded w-80 py-3 px-3 text-gray-700 " value="" {...register("name", { required: true })} />
                    </div>
                    <div className="mb-14 flex gap-6 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800" htmlFor="email">Email : </label>
                        <input className="appearance-none border rounded w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={user.email} readOnly />
                        <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered"{...register("photo")} />
                    </div>
                    <div className="mb-14 flex gap-6 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800" htmlFor="email">Email : </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" {...register("email", { required: true })} />
                    </div>
                    <div className="mb-14 flex gap-6 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800" htmlFor="email">Email : </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered pr-10 w-full"{...register("password", { required: true })} readOnly />
                    </div>

                    <div className="flex gap-5 justify-center">
                        <button className="btn glass bg-green-700 text-white rounded-xl font-light text-lg">Update</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;