// import { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: `${user.displayName} Logged Out`,
                    timer: 1500,
                })
            })
            .catch()
    }

    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-black text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Home</NavLink>
        <NavLink to='/addProduct' className={({ isActive }) => (isActive ? 'text-black text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Add Product</NavLink>
        <NavLink to='/My Cart' className={({ isActive }) => (isActive ? 'text-black text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>My Cart</NavLink>
        {
            user ?
                <><NavLink onClick={handleLogOut} className="text-white text-xl font-semibold mr-4 flex flex-row items-center">Logout<RiLogoutCircleLine className="ml-2"/></NavLink>

                </> :
                <>

                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-black text-xl font-semibold mr-4 flex flex-row items-center' : 'text-white text-xl font-semibold mr-4 flex flex-row items-center ')}>Login<RiLoginCircleLine className="ml-2" /></NavLink>
                </>
        }
    </>
    return (
        <div className=" p-10 lg:w-[1280px] lg:mx-auto mx-10">
            <div className="navbar bg-[#FB88B4] rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FB88B4] rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link to='/'><img className="w-[50px] h-[50px] rounded-full mr-4" src="../../../../public/kids kingdom logo.jpeg" alt="" /></Link>
                        <h1 className="text-white text-2xl font-bold"><span className="text-3xl">K</span>ids <span className="text-3xl">K</span>ingdom</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <h1 className="text-xl text-white mr-4">{user.displayName}</h1>
                            <img className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] mr-2 rounded-full" src={user.photoURL} alt="" />
                        </> : <>
                            <Link to='/register' className="btn rounded-full bg-white text-xl font-bold  text-[#523906]">Register</Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;