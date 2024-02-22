import { useContext, useEffect, useState } from "react";
import SharedHeadings from "../SharedPages/SharedHeadings";
import CartItems from "./CartItems";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const MyCart = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        // fetch(`https://kids-kingdom-server.vercel.app/Cart/:${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     setCartItem(data)    
        // })
        axiosPublic.get(`/Cart/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setCartItem(res.data)
            })
    }, [axiosPublic, user.email])
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'My Cart'}></SharedHeadings>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    cartItem.map(item => <CartItems key={item._id} item={item}></CartItems>)
                }
            </div>

        </div>
    );
};

export default MyCart;