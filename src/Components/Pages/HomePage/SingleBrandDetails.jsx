import { GrUpdate } from "react-icons/gr";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleBrandDetails = ({ toy }) => {
    const { productName, productImage, price, ratings, type,_id } = toy;

    const handleAddtoCart=(id)=>{
        Swal.fire({
            title: `Are you sure you want to buy ${productName}?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes,Sure",
            denyButtonText: `Not,Sure`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Added!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Product is not added to your cart", "", "info");
            }
          });

    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[250px]" src={productImage} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className="font-semibold">Category:{type}</p>
                <p className="font-semibold">Ratings:{ratings}</p>
                <p className="font-semibold">Price:{price}  Tk.</p>
                <div className="card-actions justify-start">
                    <Link to='/update'><button className="btn bg-[#B7C9F2]">Update<GrUpdate/></button></Link>
                    <button onClick={()=>handleAddtoCart(_id)}  className="btn bg-[#B7C9F2]">Add to Cart<RiShoppingBag3Line /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandDetails;