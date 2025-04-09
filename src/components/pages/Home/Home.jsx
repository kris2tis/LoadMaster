import {
    Hero,
    FeaturedServices,
    About,
    Services,
    CallToAction,
    Features,
    Pricing,
} from "./index";
import Testimonials from "../../common/Testimonials/Testimonials";
import Faq from "../../common/Faq/Faq";
import PageTitle from "../../common/PageTitle/PageTitle";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedServices />
            <About />
            <Services />
            <CallToAction />
            <Features />
            <Pricing />
            <Testimonials />
            <Faq />
            <PageTitle />
        </>
    );
};

export default Home;
