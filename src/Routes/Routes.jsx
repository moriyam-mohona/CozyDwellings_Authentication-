import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";

import Home from "../Pages/Home/Home";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Components/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import OurWork from "../Pages/OurWork/OurWork";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute>
                    <EstateDetails></EstateDetails>
                </PrivateRoute>,
                loader: () => fetch('/estate.json'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/ourWork",
                element: <PrivateRoute>
                    <OurWork></OurWork>
                </PrivateRoute>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },


        ],
    },
]);

export default router;