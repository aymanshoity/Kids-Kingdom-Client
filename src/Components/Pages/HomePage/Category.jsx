import { Fade, Slide, Zoom } from "react-awesome-reveal";
import SharedHeadings from "../SharedPages/SharedHeadings";


const Category = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'Our Categories'}></SharedHeadings>

            <Slide direction="up">
                <div className="rounded-xl bg-white p-10 text-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font">

                    <button className="btn bg-pink-300 ">Small Toys</button>
                    <button className="btn bg-pink-300 ">Baby Rider</button>
                    <button className="btn bg-pink-300 ">Soft Toys</button>
                    <button className="btn bg-pink-300 ">Indoor Toys</button>
                    <button className="btn bg-pink-300 ">Outdoor Toys</button>
                    <button className="btn bg-pink-300 ">Educational Toys</button>
                </div>
            </Slide>

        </div>
    );
};

export default Category;