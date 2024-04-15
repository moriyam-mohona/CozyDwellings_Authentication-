import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { logout, user } = useContext(AuthContext);
    // console.log("user", user);
    const handleLogout = () => {
        // console.log("inside navbar");
        logout().then().catch(error => console.log(error.message))
    }

    return (
        <div className="md:px-3 lg:px-14 my-7 ">
            <div className="navbar bg-slate-50 rounded-full px-7 py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow  rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/details'>Details</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-semibold text-green-500">Cozy Dwellings</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal bg-white px-7 rounded-full ">
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/details'>Details</NavLink></li>
                        {/* <li><button onClick={() => "handleLogout"}>Log Out</button></li> */}
                        <li><button onClick={handleLogout}>Log Out</button></li>

                    </ul>
                </div>
                <div className="navbar-end items-center ">
                    {
                        // user?.email ?
                        user ?
                            <div className="flex items-center">
                                <div tabIndex={0} role="button" className="btn tooltip btn-ghost btn-circle avatar dropdown dropdown-end" data-tip={user.displayName}>
                                    <div className="w-10 rounded-full " >
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                    <ul tabIndex={0} className="menu menu-base dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={() => console.log(user)}></button>Settings</li>
                                        <li><button onClick={handleLogout}>Log Out</button></li>
                                    </ul>
                                </div>

                            </div>
                            : <Link to='/login'><button className=" btn bg-green-400 px-7 py-2 rounded-full text-lg font-semibold text-white">Log In</button>  </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;