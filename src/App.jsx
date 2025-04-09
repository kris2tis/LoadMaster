import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import GetaQuote from "./components/pages/GetAQuote/GetAQuote";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />{" "}
                        <Route path="about" element={<About />} />{" "}
                        <Route path="getAQuote" element={<GetaQuote />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
