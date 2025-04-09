import { useRef, useEffect , useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const headerRef = useRef();
    let [classStatus , setClassStatus] = useState(true)


    const mobileNavToogle = () => {
        setClassStatus(prev => !prev)
        document.body.classList.toggle("mobile-nav-active");
    }


    useEffect(() => {
        function headerScrolled() {
            let headerClasses = [
                "scroll-up-sticky",
                "sticky-top",
                "fixed-top",
            ].some((targetClass) => {
                return headerRef.current.classList.contains(targetClass);
            });
            
            if (!headerClasses) return;
            document.body.classList.toggle("scrolled" , window.scrollY > 100);
        }
        
        document.addEventListener("scroll", headerScrolled);
        window.addEventListener("load", headerScrolled);

        return () => {
            removeEventListener("scroll", headerScrolled);
            removeEventListener("load", headerScrolled);
        };
    });
    return (
        <header
            ref={headerRef}
            id="header"
            className="header d-flex align-items-center fixed-top"
        >
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">LoadMaster</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Dropdown</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Dropdown 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Dropdown</span>{" "}
                                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Dropdown 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Dropdown 2</a>
                                </li>
                                <li>
                                    <a href="#">Dropdown 3</a>
                                </li>
                                <li>
                                    <a href="#">Dropdown 4</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <i
                        onClick={mobileNavToogle}
                        className={`mobile-nav-toggle d-xl-none bi ${
                            classStatus ? "bi-list" : "bi-x"
                        }`}
                    ></i>
                </nav>

                <Link className="btn-getstarted" to="getAQuote">
                    Get a Quote
                </Link>
            </div>
        </header>
    );
}

export default Header;
