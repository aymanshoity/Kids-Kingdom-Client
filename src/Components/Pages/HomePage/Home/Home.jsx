import AboutUs from "../AboutUs";
import AllBrands from "../AllBrands";
import Banner from "../Banner";
import Category from "../Category";
import ChooseUs from "../ChooseUs";
import ExtraSection from "../ExtraSection";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import OfferSection from "../OfferSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <AllBrands></AllBrands>
            <Category></Category>
            <OfferSection></OfferSection>
            <ChooseUs></ChooseUs>
            <ExtraSection></ExtraSection>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;