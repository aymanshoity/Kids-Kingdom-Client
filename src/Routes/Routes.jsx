import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Pages/HomePage/Home/Home";
import SignIn from "../Components/Pages/Authentication/SignIn";
import SignUp from "../Components/Pages/Authentication/SignUp";
import SingleBrand from "../Components/Pages/HomePage/SingleBrand";


export const router=createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<SignIn></SignIn>},
        {path:'/register',element:<SignUp></SignUp>},
        {path:'/:brand',element:<SingleBrand></SingleBrand>,loader:({params})=>fetch(`http://localhost:5000/toys/${params.brand}`)},
    ]
    }
])