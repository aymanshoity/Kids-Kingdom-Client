import Swal from "sweetalert2";
import SharedHeadings from "../SharedPages/SharedHeadings";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const AddProduct = () => {
    const axiosPublic = UseAxiosPublic()
    const handleAddProduct = (e) => {
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
            title: "Do you want to add this Product?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't Add`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.post('/toys', toy)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire("Added!", "", "success");
                        }
                    })
                
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }
    return (
        <div className="py-10 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Add Product'}></SharedHeadings>
            <div className="card  w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleAddProduct} className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Logo URL</span>
                            </label>
                            <input type="text" name="brandLogo" placeholder="Brand Logo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" name="productImage" placeholder="Product Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="type" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" name="ratings" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Details</span>
                            </label>
                            <textarea type="text" name="productDetails" placeholder="Product Details" className="textarea textarea-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#FB88B4]">Add Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;