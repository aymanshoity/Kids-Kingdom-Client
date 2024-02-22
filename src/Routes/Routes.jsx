import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Pages/HomePage/Home/Home";
import SignIn from "../Components/Pages/Authentication/SignIn";
import SignUp from "../Components/Pages/Authentication/SignUp";
import SingleBrand from "../Components/Pages/HomePage/SingleBrand";
import UpdateProduct from "../Components/Pages/Update/UpdateProduct";
import SingleProduct from "../Components/Pages/HomePage/SingleProduct";
import MyCart from "../Components/Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";


export const router=createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/addProduct',element:<AddProduct></AddProduct>},
        {path:'/login',element:<SignIn></SignIn>},
        {path:'/register',element:<SignUp></SignUp>},
        {path:':brand/update/:id',element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>},
        {path:'/:brand/:id',element:<SingleProduct></SingleProduct>},
        {path:'/:brand',element:<SingleBrand></SingleBrand>},
        {path:'/myCart',element:<PrivateRoute><MyCart></MyCart></PrivateRoute>},
    ]
    }
])