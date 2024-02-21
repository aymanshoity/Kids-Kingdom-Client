import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SingleBrand = () => {
    const { brands } = useParams()
    const loadedBrand = useLoaderData();
    const [brandData, setBrandData] = useState(loadedBrand)
    console.log({ brands }, brandData)
    const bannerImage=brandData[0].brandLogo
    console.log(bannerImage)
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={bannerImage} className="w-full rounded-lg" />
            </div>
            {
                brandData.map(toy=><SingleBrand key={toy._id} toy={toy}></SingleBrand>)
            }

        </div>
    );
};

export default SingleBrand;