import { Fade } from "react-awesome-reveal";
import SharedHeadings from "../SharedPages/SharedHeadings";


const AboutUs = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <SharedHeadings heading={'About Us'}></SharedHeadings>
            <Fade>
                <div className="rounded-xl bg-green-100 p-10 text-2xl text-center font">

                    <p>
                        We are Kids Kingdom, a dedicated team passionate about curating a world of joy and learning through our exceptional range of toys. Committed to quality, creativity, and child development, we bring you a trusted haven for play and exploration. Discover a reliable partner in us, where every toy sparks smiles, fosters growth, and ensures unforgettable moments. Welcome to a world of imagination, laughter, and trusted playtime essentials, carefully chosen for your child's delight. We are Kids Kingdom—where fun meets reliability, and every child's happiness is our priority
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default AboutUs;