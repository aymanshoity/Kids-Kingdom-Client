import { Link } from "react-router-dom";
import SharedHeadings from "../SharedPages/SharedHeadings";
import { Slide } from "react-awesome-reveal";

const AllBrands = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Our Brands'}></SharedHeadings>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Slide cascade damping={0.01} direction="left">

                    <Link to='/RFL'>
                        <div className="card card-compact   bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/RN6yZ2r/RFL.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                    <Link to='/Gazi'>
                        <div className="card card-compact  bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/Xkjyp2y/gazi.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                    <Link to='/Frank'>
                        <div className="card card-compact  bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/J5JvmGG/frank.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                </Slide>
                <Slide cascade damping={0.01} direction="right">
                    <Link to='/Funskool'>
                        <div className="card card-compact  bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/MpBf9mp/funskool.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                    <Link to='/Mattle'>
                        <div className="card card-compact  bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/Fs1ZmXH/mattle.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                    <Link to='/Winfun'>
                        <div className="card card-compact   bg-white shadow-xl">
                            <figure><img className="w-full h-[300px] rounded-xl" src="https://i.ibb.co/3B49PFY/Winfun.png" alt="Shoes" /></figure>

                        </div>
                    </Link>
                </Slide>


            </div>

        </div>
    );
};

export default AllBrands;

//
//
//
//
// 