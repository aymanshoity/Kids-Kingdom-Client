import AllBrands from "../AllBrands";
import Banner from "../Banner";
import ChooseUs from "../ChooseUs";
import Footer from "../Footer";
import Newsletter from "../Newsletter";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AllBrands></AllBrands>
            <ChooseUs></ChooseUs>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;