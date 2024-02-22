import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
const SingleBrandDetails = ({ toy,brand }) => {
    const { productName, productImage, price, ratings, type,_id } = toy;
   
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[250px]" src={productImage} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className="font-semibold">Category:{type}</p>
                <p className="font-semibold">Ratings:{ratings}</p>
                <p className="font-semibold">Price:{price}  Tk.</p>
                <div className="card-actions justify-start">
                    <Link to={`/${brand}/update/${_id}`}><button className="btn bg-[#B7C9F2]">Update<GrUpdate/></button></Link>
                    <Link  to={`/${brand}/${_id}`}><button  className="btn bg-[#B7C9F2]">Details<BiDetail /></button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleBrandDetails;