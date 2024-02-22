import { useParams } from "react-router-dom";
import SharedHeadings from "../SharedPages/SharedHeadings";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const axiosPublic = UseAxiosPublic()
    const { brand, id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axiosPublic.get(`/toys/${brand}/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })

    }, [axiosPublic,brand,id])


    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brandName.value;
        const brandLogo = form.brandLogo.value;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const type = form.type.value;
        const productDetails = form.productDetails.value;

        const toy = { brandName, brandLogo, productName, productImage, productDetails, price, ratings, type };

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.patch(`/toys/${id}`, toy)
                    .then(res=>{
                        console.log(res.data)
                        if (res.data.modifiedCount>0) {
                            Swal.fire("Saved!", "", "success");
                        }
                    })
                
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }
    return (
        <div className="py-10 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Update Product'}></SharedHeadings>
            <div className="card  w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateProduct} className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" defaultValue={product.brandName} name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Logo URL</span>
                            </label>
                            <input type="text" defaultValue={product.brandLogo} name="brandLogo" placeholder="Brand Logo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" defaultValue={product.productName} name="productName" placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" defaultValue={product.productImage} name="productImage" placeholder="Product Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={product.type} name="type" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" defaultValue={product.ratings} name="ratings" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={product.price} name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Details</span>
                            </label>
                            <textarea type="text" defaultValue={product.productDetails} name="productDetails" placeholder="Product Details" className="textarea textarea-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#FB88B4]">Update Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;