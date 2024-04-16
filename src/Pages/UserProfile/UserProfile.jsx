import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoIosPersonAdd } from "react-icons/io";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center">
            <div className="px-7 py-16 mb-16 flex flex-col items-center rounded-3xl border-2 drop-shadow-xl border-green-700 bg-green-50">
                <Helmet>
                    <title>Cozy | Profile</title>
                </Helmet>
                <img src={user.photoURL} alt="No Image provided" className='h-40 w-40 rounded-full border-8 border-green-700 border-spacing-5' />
                <form className="mt-6">
                    <div className="mb-6 flex gap-5 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800 " htmlFor="name">Name : </label>
                        <input className="appearance-none border rounded w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={user.displayName} readOnly />
                    </div>
                    <div className="mb-14 flex gap-6 items-center">
                        <label className="block text-xl font-bold mb-2 text-green-800" htmlFor="email">Email : </label>
                        <input className="appearance-none border rounded w-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={user.email} readOnly />
                    </div>
                    <div className="flex gap-5 justify-center">
                        <button className="btn glass bg-green-700 text-white rounded-xl font-light text-lg flex "><IoIosPersonAdd className="text-xl" />Contact</button>
                        <button className="btn glass bg-green-700 text-white rounded-xl font-light text-lg">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
