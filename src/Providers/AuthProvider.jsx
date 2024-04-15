import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Layout/FireBase/FireBase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const loginUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        // setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logout = () => {
        // setLoading(true);
        setUser(null)
        // console.log("logout")
        return signOut(auth)

    }

    const authInfo = {
        user, loading, createUser, loginUser, googleLogin, githubLogin, logout,
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;