import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-green-500 ">Login now!</h1>
                    <p className="py-6">Login Now To See Details and Manage Your Profile...</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="emial" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 text-white text-lg">Login</button>
                        </div>
                        <p>Don't Have an Account? <a className="underline font-semibold text-green-500"><Link to="/register">Register Now</Link></a></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;