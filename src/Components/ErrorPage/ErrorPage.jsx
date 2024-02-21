import { Link } from "react-router-dom";

// style={{ backgroundImage: 'url(https://i.ibb.co/0ct4bmT/download.jpg)' }}
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-[#B7C9F2]" >
            
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-10">
                    <img className="rounded-lg" src="https://i.ibb.co/smS9SSK/25-Creative-Yet-Funny-404-Error-Page-Designs-for-Inspiration.jpg" alt="" />
                    <Link to='/'><button className="btn bg-[#FB88B4] mt-5">Go Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

// https://i.ibb.co/smS9SSK/25-Creative-Yet-Funny-404-Error-Page-Designs-for-Inspiration.jpg