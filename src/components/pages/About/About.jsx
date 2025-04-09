import { AboutUs, State, Team } from "./index"
import Testimonials from "../../common/Testimonials/Testimonials";
import Faq from "../../common/Faq/Faq";
import PageTitle from "../../common/PageTitle/PageTitle";

function About() {
    return (
        <>
            <PageTitle />
            <AboutUs />
            <State />
            <Team />
            <Testimonials />
            <Faq />
        </>
    );
}

export default About