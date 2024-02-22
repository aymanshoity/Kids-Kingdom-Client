import { Zoom } from "react-awesome-reveal";


const ExtraSection = () => {
    return (
        <div className="pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Zoom>
                <div className="rounded-xl bg-red-200 p-5 flex justify-between">
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-5">Exclusive Memory Games</h1>
                        <button className="btn">Shop now</button>
                    </div>
                    <div>
                        <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/Frank1.png" alt="" />
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="rounded-xl bg-yellow-200 p-5 flex justify-between">
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-5">Explore the Indoor Games</h1>
                        <button className="btn">Shop now</button>
                    </div>
                    <div>
                        <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/RFL4.jpg" alt="" />
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="rounded-xl bg-green-200 p-5 flex justify-between">
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-5">Enjoyable Baby Rider</h1>
                        <button className="btn">Shop now</button>
                    </div>
                    <div>
                        <img className="w-[200px] h-[200px] rounded-xl" src="../../../../public/Humpty-Dumpty.png" alt="" />
                    </div>
                </div>
            </Zoom>
        </div>

    </div>
    );
};

export default ExtraSection;