import React from "react";
import {
    FaBehance,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaLongArrowAltRight,
    // FaMapMarkerAlt,
    // FaPaperPlane,
    // FaPhoneAlt,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

// import my from "../../images/my/photograph.png";

const Landing = () => {
    return (
        <>
            <section className="landing" id="landing">
                <div className="overlay"></div>
                <div className="container">
                    <div className="cont">
                        <div className="text">
                            <span className="head">Hi There!</span>

                            <h1>
                                <span>Iam Mohamed Abdelsamie</span>
                                <div>
                                    <span>Graphic Designer</span>
                                    <span>{` & `}</span>
                                    <span>video editing</span>
                                </div>
                            </h1>

                            <p>
                                Graphic designer, I work on freelance sites, I
                                have a lot of experience in the field of
                                graphics.
                            </p>
                        </div>

                        <div className="button">
                            <Link
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="btn"
                            >
                                <span>HIRE ME</span>
                                <FaLongArrowAltRight />
                            </Link>

                            <Link
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="btn"
                            >
                                <span>VIEW MY Work</span>
                                <FaLongArrowAltRight />
                            </Link>
                        </div>

                        <div className="social">
                            <a
                                href="https://www.facebook.com/mohamedabdelsamie10"
                                target="_blank"
                                rel="noreferrer"
                                title="Facebook"
                            >
                                <FaFacebookF className="i" />
                            </a>

                            <a
                                href="https://tinyurl.com/jkrvs2pe"
                                target="_blank"
                                rel="noreferrer"
                                title="Instagram"
                            >
                                <FaInstagram className="i" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/mohamed-abdelsamie-02653021a"
                                target="_blank"
                                rel="noreferrer"
                                title="Linkedin"
                            >
                                <FaLinkedinIn className="i" />
                            </a>

                            <a
                                href="https://www.behance.net/MohammedAbdelsamie/info"
                                target="_blank"
                                rel="noreferrer"
                                title="Behance"
                            >
                                <FaBehance className="i" />
                            </a>

                            <a
                                href="https://m.youtube.com/c/MohamedAbdelsamie1?fbclid=PAAabYhmL0wKQwQxXlUEpocu307pc3QcnmGUwXMbidsMboZJWjDsU-FujlgsA"
                                target="_blank"
                                rel="noreferrer"
                                title="Youtube"
                            >
                                <FaYoutube className="i" />
                            </a>

                            <a
                                href="https://wa.me/+201011246756"
                                target="_blank"
                                rel="noreferrer"
                                title="Whatsapp"
                            >
                                <FaWhatsapp className="i" />
                            </a>
                        </div>
                    </div>
                    <div className="img">
                        <img src="images/my/photograph.png" alt="photograph" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
