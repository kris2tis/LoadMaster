import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
