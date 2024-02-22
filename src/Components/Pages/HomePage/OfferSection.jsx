import { Zoom } from "react-awesome-reveal";
import SharedHeadings from "../SharedPages/SharedHeadings";


const OfferSection = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Our Offers'}></SharedHeadings>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 ">
                <Zoom>
                    <div className="rounded-xl bg-red-100 p-5  ">
                        <div className="">
                            <h1 className="text-2xl font-semibold mb-5">Exclusive offer in Gazi Toys</h1>
                            <button className="btn">Shop now</button>
                        </div>
                        <div>
                            <img className=" rounded-xl" src="../../../../public/Humpty-Dumpty.png" alt="" />
                        </div>
                    </div>
                </Zoom>

                <div className="">
                    <Zoom>
                        <div className="rounded-xl bg-yellow-100 p-5 flex justify-between mb-6">
                            <div className="">
                                <h1 className="text-2xl font-semibold mb-5">Checkout theBlack Friday Special Offers</h1>
                                <button className="btn">Shop now</button>
                            </div>
                            <div>
                                <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/RFL4.jpg" alt="" />
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="rounded-xl bg-red-200 p-5 flex flex-col justify-around">

                            <h1 className="text-2xl font-semibold mb-5"></h1>
                            <button className="btn">Shop now</button>
                            <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/h8-img3.png" alt="" />
                        </div>
                    </Zoom>

                </div>
            </div>

        </div>
    );
};

export default OfferSection;