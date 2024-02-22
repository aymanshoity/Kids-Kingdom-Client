import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBrandDetails from "./SingleBrandDetails";
import SharedHeadings from "../SharedPages/SharedHeadings";


const SingleBrand = () => {
    
    const {brand}=useParams()
    const [products, setProducts] = useState([])
    const [image, setImage] = useState()
    
    useEffect(()=>{
        fetch(`http://localhost:5000/toys/${brand}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
            setImage(data[0].brandLogo)})
        
    },[brand])
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={image} className="h-[300px] w-full rounded-lg mb-10" />
            </div>
            <SharedHeadings heading={`All  Products`}></SharedHeadings>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                products.map(toy=><SingleBrandDetails key={toy._id} toy={toy}></SingleBrandDetails>)
            }
            </div>

        </div>
    );
};

export default SingleBrand;