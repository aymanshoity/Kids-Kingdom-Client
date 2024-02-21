import AllBrands from "../AllBrands";
import Banner from "../Banner";
import Footer from "../Footer";
import Newsletter from "../Newsletter";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AllBrands></AllBrands>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;