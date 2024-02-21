import { JackInTheBox } from "react-awesome-reveal";

const Newsletter = () => {
    return (
        <div className=" pt-2 pb-20 md:px-10 px-2 lg:w-[1280px]  mx-auto">

            <JackInTheBox>
                <div className="  h-[200px] rounded-xl flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://i.ibb.co/6yw9yHm/newsletter.jpg)' }}>

                    <div className=" flex flex-row items-center justify-center">
                        <label className="input input-bordered flex items-center gap-2">
                            Email:
                            <input type="text" className="grow" placeholder="shoili@yahoo.com" />
                        </label>
                        <button className="btn ml-2 bg-[#9195F6]">Subscribe</button>
                    </div>
                </div>
            </JackInTheBox>
        </div>
    );
};

export default Newsletter;