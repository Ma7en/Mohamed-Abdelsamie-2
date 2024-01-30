import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

// import logo1 from "../../images/Logo/logo1.png";
// import logo2 from "../../images/Logo/logo2.png";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header
                className={
                    navbar ? "navbar show" : sticky ? "navbar sticky" : "navbar"
                }
                id="navbar"
            >
                <div className="container">
                    <div className="logo">
                        <div className="img">
                            {/* <img src={logo2} alt={logo2} /> */}
                            {/* <img src={logo2} alt={logo2} /> */}
                            <img src="images/Logo/logo2.png" alt="logo" />
                        </div>

                        <Link to="/">
                            <span>Mohammed </span>
                            <span>Abdelsamie</span>
                        </Link>
                    </div>

                    <ul className="menu-list">
                        <div
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                            className="icon cancel-btn"
                        >
                            <FaTimes />
                            {/* <i className="fa fa-times" /> */}
                        </div>

                        <li>
                            <Link
                                to="landing"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="Services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                MY Work
                            </Link>
                        </li>

                        {/* <li>
                            <Link
                                to="Price"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                Price
                            </Link>
                        </li> */}

                        <li>
                            <Link
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="icon menu-btn">
                        <FaBars
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                            className="i"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
