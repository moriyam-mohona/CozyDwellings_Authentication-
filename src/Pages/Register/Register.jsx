import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {

    const { createUser } = useContext(AuthContext)



    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen mb-7">
            <div className="hero-content flex-col lg:col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-green-500 ">Register Now</h1>
                    <p className="py-6">Please provide accurate information and create an account to access all the details</p>
                </div>
                <div className="card w-4/5 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500text-sm  mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered"{...register("image")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                            <label className="label flex justify-end">
                                <a href="#" className="label-text-alt link link-hover  text-base">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 text-white text-lg">Register</button>
                        </div>
                        <p>Already Have an Account? <a className="underline font-semibold text-green-500"><Link to="/login">Login</Link></a></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;