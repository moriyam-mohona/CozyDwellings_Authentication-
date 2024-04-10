import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const { githubLogin } = useContext(AuthContext)

    return (
        <>
            <div className="divider" >continue with</div>
            <div className="flex gap-3 mx-auto ">
                <button onClick={googleLogin} className="text-xl text-green-500"><FaGoogle /></button>
                <button onClick={githubLogin} className="text-xl text-green-500"><FaGithub /></button>
            </div>
        </>
    );
};

export default SocialLogin;