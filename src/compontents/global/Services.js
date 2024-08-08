import React from "react";
// import { FaAt, FaBullhorn, FaCode, FaDesktop, FaFreeCodeCamp, FaPaintBrush, FaPenNib, FaPlayCircle } from "react-icons/fa";
import { FaBullhorn, FaPenNib, FaPlayCircle } from "react-icons/fa";

const Services = () => {
    return (
        <>
            <div className="Services" id="Services">
                <div className="container">
                    <div className="title">
                        <h2>SERVIES</h2>
                        <p>
                            This is My Expertise, The Services I{"'"}ll Provide
                            My Clients
                        </p>
                    </div>

                    <div className="content">
                        <div className="box">
                            <span></span>

                            <span>
                                <FaPenNib className="i" />
                            </span>

                            <h3>Graphic Designer </h3>

                            <p>
                                Experience in publications designs, social media
                                designs, and personal card designs
                            </p>

                            <a
                                href="https://wa.me/+201011246756"
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                GET STARTED
                            </a>
                        </div>

                        <div className="box">
                            <span></span>

                            <span>
                                <FaBullhorn className="i" />
                            </span>

                            <h3>Social media page manager</h3>

                            <p>
                                By managing social media, I can reach the
                                largest number of followers, increase sales of
                                your products and services easily and quickly,
                                and achieve the required profit.
                            </p>

                            <a
                                href="https://wa.me/+201011246756"
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                GET STARTED
                            </a>
                        </div>

                        <div className="box">
                            <span></span>

                            <span>
                                <FaPlayCircle className="i" />
                            </span>

                            <h3>Video Editing</h3>

                            <p>
                                Resist with the modification of the Premier Pro
                                programs and also resisted the work of
                                professional fungus
                            </p>

                            <a
                                href="https://wa.me/+201011246756"
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                GET STARTED
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
