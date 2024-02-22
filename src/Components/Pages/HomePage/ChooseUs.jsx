import { RiCoupon3Line } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import SharedHeadings from "../SharedPages/SharedHeadings";
import { Slide } from "react-awesome-reveal";
const ChooseUs = () => {
    return (
        <div className="lg:w-[1280px]  mx-auto my-10 md:px-10 px-2">
            <SharedHeadings heading={'Why Kids Kingdom?'}></SharedHeadings>
            <Slide>
                <div className=" bg-[#f89ec1] py-5  rounded-xl grid grid-cols-1 lg:grid-cols-2  gap-4">

                    <div className="flex flex-row items-center lg:w-[450px] w-[300px] mx-auto  bg-white p-2 rounded-lg ">
                        <div>
                            <GiTakeMyMoney className="lg:text-7xl mr-2"></GiTakeMyMoney>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-xl">Low Price</h2>
                            <p >All our products, from laptops to smartphones, are offered at affordable prices for everyone</p>
                        </div>

                    </div>
                    <div className="flex items-center bg-white lg:w-[450px] w-[300px] mx-auto  p-2 rounded-lg ">
                        <div>
                            <TbTruckDelivery className="lg:text-7xl mr-2"></TbTruckDelivery>

                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-xl">Free Delivery</h2>
                            <p >We provide free shipping on special days to all our registered clients and customers.</p>
                        </div>

                    </div>
                    <div className="flex items-center bg-white lg:w-[450px] w-[300px] mx-auto  p-2 rounded-lg">
                        <div>
                            <RiCoupon3Line className="lg:text-7xl mr-2"></RiCoupon3Line>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-xl">5% cash back</h2>
                            <p >Regular customers of Kids Kingdom can get 5% cash back for every purchase at our store.</p>
                        </div>

                    </div>
                    <div className="flex items-center bg-white lg:w-[450px] w-[300px] mx-auto  p-2 rounded-lg">
                        <div>
                            <TbTruckReturn className="lg:text-7xl mr-2"></TbTruckReturn >
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-xl">Easy Return</h2>
                            <p >Regular customers of Kids Kingdom can get easy Return on each purchase within a single day.</p>
                        </div>

                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default ChooseUs;