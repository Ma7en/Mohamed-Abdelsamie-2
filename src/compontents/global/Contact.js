/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
    FaBehance,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className="contact " id="Contact">
                <div className="container ">
                    <div className="title">
                        <h2>Contact us</h2>
                        <p>
                            We're open for any suggestion or just to have a chat
                        </p>
                    </div>

                    <div className="content">
                        <div className="right">
                            <div className="text">
                                <div className="para" title="location">
                                    <FaMapMarkerAlt className="i" />
                                    <a>Egypt - Al-fayoum - fayoum </a>
                                </div>

                                <div className="para" title="Phone">
                                    <FaPhoneAlt className="i" />
                                    <a href="tel:+201011246756">
                                        +201011246756
                                    </a>
                                </div>

                                <div className="para" title="Email">
                                    <FaEnvelope className="i" />
                                    <a href="mailto:mido700400@gmail.com?subject=Contact">
                                        mido700400@gmail.com
                                    </a>
                                </div>
                            </div>

                            <form
                                action="https://formspree.io/f/mpzelbyq"
                                method="POST"
                            >
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Name"
                                    required
                                />

                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    required
                                />

                                <input
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    required
                                />

                                <textarea
                                    placeholder="Create a message here"
                                    rows={8}
                                    cols={80}
                                    defaultValue={""}
                                    name="Message"
                                    required
                                />

                                <button type="submit" className="btn">
                                    SEND MESSAGE
                                </button>
                            </form>

                            <div className="follow">
                                <div className="text">
                                    <h3>
                                        Follow me here
                                        <span>{` / `}</span>
                                    </h3>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
