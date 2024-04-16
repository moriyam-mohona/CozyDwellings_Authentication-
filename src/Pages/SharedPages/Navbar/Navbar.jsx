import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { logout, user } = useContext(AuthContext);
    const handleLogout = () => {
        logout().then().catch(error => console.error(error.message))
    }

    return (
        <div className="p-8 md:px-12 my-7 mb-16 ">
            <div className="navbar bg-green-700 rounded-xl px-7 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-green-200 mt-3 z-50 p-2 shadow rounded-box w-36">
                            <li><NavLink to='/' style={({ isActive }) => ({
                                backgroundColor: isActive ? "#22c55e " : "", color: isActive ? "white" : "black", borderRadius: "9999px"
                            })}>Home</NavLink></li>
                            <li><NavLink to='/ourWork' style={({ isActive }) => ({
                                backgroundColor: isActive ? "#22c55e " : "", color: isActive ? "white" : "black", borderRadius: "9999px"
                            })}>Our Work</NavLink></li>
                            <li><NavLink to='/userProfile' style={({ isActive }) => ({
                                backgroundColor: isActive ? "#22c55e " : "", color: isActive ? "white" : "black", borderRadius: "9999px"
                            })}>User Profile</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-medium text-white">Cozy Dwellings</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal bg-white px-7 rounded-full ">
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? "#22c55e " : "",
                                    color: isActive ? "white" : "black",
                                    borderRadius: "9999px"
                                })}
                            >Home</NavLink></li>
                        <li>
                            <NavLink
                                to="/ourWork"
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? "#22c55e " : "",
                                    color: isActive ? "white" : "black",
                                    borderRadius: "9999px"
                                })}
                            >Our Work</NavLink></li>
                        <li>
                            <NavLink
                                to="/userProfile"
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? "#22c55e " : "",
                                    color: isActive ? "white" : "black",
                                    borderRadius: "9999px"
                                })}
                            >User Profile</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end items-center ">
                    {
                        user ?
                            <div className="flex items-center">
                                <div tabIndex={0} role="button" className="btn tooltip btn-ghost btn-circle avatar dropdown dropdown-end" data-tip={user.displayName}>
                                    <div className="w-10 rounded-full " >
                                        <img alt="" src={user.photoURL} />
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-green-200 mt-3 z-50 p-2 shadow rounded-box w-36">
                                        <li><NavLink to='/userProfile' style={({ isActive }) => ({
                                            backgroundColor: isActive ? "#22c55e " : "", color: isActive ? "white" : "black", borderRadius: "9999px"
                                        })}>User Profile</NavLink></li>
                                        <li><button onClick={handleLogout}>Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                            : <Link to='/login'><button className=" btn glass bg-green-500 px-7 py-2 rounded-full text-lg font-medium text-white">Log In</button>  </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;