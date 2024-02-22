import { Zoom } from "react-awesome-reveal";
import SharedHeadings from "../SharedPages/SharedHeadings";
import { FaArrowRight } from "react-icons/fa";

const OfferSection = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Our Offers'}></SharedHeadings>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 ">
                <Zoom>
                    <div className="rounded-xl bg-red-100 p-5  flex flex-col justify-around text-center">
                        <div className="">
                            <h1 className="text-2xl font-semibold mb-5">Exclusive offer in Gazi Toys</h1>
                            <p className="text-red-800 mb-5">Grab the coupon card (up to 25% cashback) on each purchase </p>
                            <button className="btn">Shop now<FaArrowRight /></button>
                        </div>
                        <div className="flex flex-col justify-around text-center">
                            <img className=" rounded-xl h-[400px]" src="../../../../public/Humpty-Dumpty.png" alt="" />
                        </div>
                    </div>
                </Zoom>

                <div className="">
                    <Zoom>
                        <div className="rounded-xl bg-yellow-100 p-5 flex justify-between mb-6">
                            <div className="">
                                <h1 className="text-2xl font-semibold mb-5">Checkout theBlack Friday Special Offers</h1>
                                <p className="text-red-800 mb-5">10% discount on Black friday Deals</p>
                                <button className="btn">Shop now<FaArrowRight /></button>
                            </div>
                            <div>
                                <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/RFL4.jpg" alt="" />
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="rounded-xl bg-red-200 p-5 flex  justify-around">
                            <div className="">
                                <h1 className="text-2xl font-semibold mb-5">Enjoy the Early Bird Offer</h1>
                                <p className="text-red-800 mb-5">20% discount of new products</p>
                                <button className="btn">Shop now<FaArrowRight /></button>
                            </div>

                            <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/h8-img3.png" alt="" />
                        </div>
                    </Zoom>

                </div>
            </div>

        </div>
    );
};

export default OfferSection;