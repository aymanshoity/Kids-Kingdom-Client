import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

import { RiShoppingBag3Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";

const SingleProduct = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)
    const { brand, id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${brand}/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [brand, id])
    const handleAddtoCart = (product) => {
        if (!user) {
            navigate('/login')
        } else {
            const cart = {
                ClientName: user.displayName,
                ClientEmail: user.email,
                brandName: product.brandName,
                productName: product.productName,
                productImage: product.productImage,
                price: product.price,

            }
            Swal.fire({
                title: `Are you sure you want to buy ?`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes,Sure",
                denyButtonText: `Not,Sure`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axiosPublic.post('/Cart', cart)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                Swal.fire("Added!", "", "success");
                            }
                        })


                } else if (result.isDenied) {
                    Swal.fire("Product is not added to your cart", "", "info");
                }
            });
        }



    }
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.productImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Product Name: {product.productName}</h2>
                    <p className="font-semibold">Product Category: {product.type}</p>
                    <p className="font-semibold">Product Details: {product.productDetails}</p>
                    <p className="font-semibold" >Product Ratings: {product.ratings}</p>
                    <p className="font-semibold text-red-600">Product Price: {product.price} Tk.</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddtoCart(product)} className="btn bg-[#B7C9F2]">Add to Cart<RiShoppingBag3Line /></button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;