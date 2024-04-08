import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:px-3 lg:px-14 my-7 ">
            <div className="navbar bg-slate-50 rounded-full px-7 py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            <li><NavLink><a>Home</a></NavLink></li>
                            <li><NavLink><a>Update Profile</a></NavLink></li>
                            <li><NavLink><a>User Profile</a></NavLink></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-semibold text-green-500">Cozy Dwellings</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal bg-white px-7 rounded-full ">
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
                        <li><NavLink to='userProfile'>User Profile</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end items-center ">
                    <button className=" btn bg-green-400 px-7 py-2 rounded-full text-lg font-semibold text-white"><Link to='/login' >Log In </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;