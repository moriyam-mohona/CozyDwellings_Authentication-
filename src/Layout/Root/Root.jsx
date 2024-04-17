import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/SharedPages/Navbar/Navbar";
import Footer from "../../Pages/SharedPages/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </div>
  );
};

export default Root;
