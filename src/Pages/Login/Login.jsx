import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;

        loginUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-green-500 ">Login now!</h1>
                    <p className="py-6">Login Now To See Details and Manage Your Profile...</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />

                            {errors.email && <span>This field is required</span>}</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <label className="label flex justify-end">
                                <a href="#" className="label-text-alt link link-hover  text-base">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 text-white text-lg">Login</button>
                        </div>
                        <p>Do not Have an Account? <a className="underline font-semibold text-green-500"><Link to="/register">Register Now</Link></a></p>
                        <SocialLogin></SocialLogin>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;