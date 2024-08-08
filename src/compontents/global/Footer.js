import React from "react";
import {
    FaBehance,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaLongArrowAltRight,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhoneAlt,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="content grid2">
                        <div className="box">
                            <h3>Dot Studio</h3>

                            <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>

                            <div className="social">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaBehance />
                                <FaYoutube />
                            </div>
                        </div>

                        <div className="box box1">
                            <h4>Services</h4>

                            <ul>
                                <li>
                                    <FaLongArrowAltRight />
                                    Web Design
                                </li>

                                <li>
                                    <FaLongArrowAltRight />
                                    Web Development
                                </li>

                                <li>
                                    <FaLongArrowAltRight />
                                    Graphic Design
                                </li>

                                <li>
                                    <FaLongArrowAltRight />
                                    UI/UX Design
                                </li>
                            </ul>
                        </div>

                        <div className="box box1">
                            <h4>Have a Questions?</h4> <br />
                            {/*  */}
                            <FaMapMarkerAlt />
                            <label>
                                203 Fake St. Mountain View, San Francisco{" "}
                            </label>
                            {/*  */}
                            <FaPhoneAlt />
                            <label> +2 392 3929 210 </label>
                            {/*  */}
                            <FaPaperPlane />
                            <label> info@yourdomain.com</label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
