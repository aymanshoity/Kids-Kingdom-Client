import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";


const Root = () => {
    return (
        <div className="light-theme bg-[#B7C9F2]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;