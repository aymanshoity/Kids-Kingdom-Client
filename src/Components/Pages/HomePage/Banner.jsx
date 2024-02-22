import { Slide, Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
            <div className="hero min-h-screen  rounded-lg object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/27x1JyS/Hand-drawn-abstract-background.jpg)' }}>
                <div className="hero-content text-center  ">
                    <div className="max-w-md ">

                        <Slide cascade damping={0.3} direction="up" >
                            <Fade cascade damping={0.2}>
                                <div className="flex flex-col items-center">
                                    <img src="../../../../kids kingdom logo.jpeg" alt="" className="rounded-full w-[200px] h-[200px]" />
                                </div>
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Welcome to Kids Kingdom</h1>
                                <p className="mb-5">Discover Endless Joy: Unleash the Magic of Play with Our Enchanting Toy Wonderland!</p>
                                <button className="btn bg-[#9195F6] text-white">Get Started</button>
                            </Fade>
                        </Slide>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;