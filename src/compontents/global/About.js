import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { FaGraduationCap } from "react-icons/fa";

// import my from "images/my/photograph.png";

const About = () => {
    const [about, setAbout] = useState(true);
    const [skills, setSkills] = useState(false);
    const [experience, setExperience] = useState(false);

    // const cvURL = "http://localhost:3000/files/cv/CV-MohamedAbdelsamie.pdf";
    // const downloadFileCV = (url) => {
    //     const fileName = url.split("/").pop();
    //     const aTag = document.createElement("a");
    //     aTag.href = url;
    //     aTag.setAttribute("download", fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     aTag.remove();
    // };
    // https://drive.google.com/file/d/1iWzIyXl2vXiIrN90iwwotLGQJLWE2hAx/view?usp=sharing
    // https://drive.google.com/uc?export=download&id=1iWzIyXl2vXiIrN90iwwotLGQJLWE2hAx

    // useEffect(() => {
    //     const elementsSkills = document.querySelector(".about .page2");
    //     const progressSpans = document.querySelectorAll(".about .line span");
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY >= elementsSkills.offsetTop) {
    //             progressSpans.forEach((span) => {
    //                 span.style.width = span.dataset.width;
    //             });
    //         } else {
    //             progressSpans.forEach((span) => {
    //                 span.style.width = "0px";
    //             });
    //         }
    //     });
    // }, []);

    return (
        <>
            <section className="about" id="About">
                <div className="container">
                    <div className="title">
                        <h2>About</h2>
                        <p>
                            Some information about the skills and experiences
                            that he possesses
                        </p>
                    </div>
                    <div className="cont">
                        <div className="left">
                            {/* <img src={my} alt={my} /> */}
                            <img
                                src="images/my/photograph.png"
                                alt="photograph"
                            />
                        </div>

                        <div className="right">
                            <ul className="tabs">
                                <li>
                                    <Link
                                        className={about ? "active" : ""}
                                        to={""}
                                        onClick={() => {
                                            setAbout(true);
                                            setSkills(false);
                                            setExperience(false);
                                        }}
                                    >
                                        ABOUT ME
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={skills ? "active" : ""}
                                        to={""}
                                        onClick={() => {
                                            setAbout(false);
                                            setSkills(true);
                                            setExperience(false);
                                        }}
                                    >
                                        SKILLS
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={experience ? "active" : ""}
                                        to={""}
                                        onClick={() => {
                                            setAbout(false);
                                            setSkills(false);
                                            setExperience(true);
                                        }}
                                    >
                                        EXPERIENCE
                                    </Link>
                                </li>
                            </ul>

                            <section className="pages">
                                {about && (
                                    <div className="page page1">
                                        <span></span>
                                        <div>
                                            <h3>About Me</h3>

                                            <p>
                                                Hello! i’m mohamed I am 22 years
                                                old and I work as a graphic
                                                designer and video editor.I also
                                                have experience in e-marketing
                                                and also experience in managing
                                                social media pages.
                                            </p>
                                        </div>

                                        <div>
                                            {/* onClick={() => {
                                                 downloadFileCV(cvURL);
                                             }}
                                             download="Resume" */}
                                            {/* <a
                                                target="_blank"
                                                href="https://drive.google.com/uc?export=download&id=1iWzIyXl2vXiIrN90iwwotLGQJLWE2hAx"
                                            >
                                                download CV
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://drive.google.com/uc?export=download&id=1iWzIyXl2vXiIrN90iwwotLGQJLWE2hAx"
                                            ></a> */}
                                        </div>
                                    </div>
                                )}

                                {skills && (
                                    <div className="page page2">
                                        <span></span>

                                        <div className="name">
                                            <h3>Skills</h3>

                                            <p>
                                                These are my skills that you can
                                                deal with in a professional
                                                manner and I do high-quality
                                                designs and innovative ideas
                                            </p>
                                        </div>

                                        <div className="skills_bar">
                                            <div className="bar">
                                                <div className="info ">
                                                    <span> Photoshop </span>
                                                    <span>85%</span>
                                                </div>

                                                <div className="line">
                                                    <span
                                                        style={{ width: "85%" }}
                                                        data-width="85%"
                                                    />
                                                </div>
                                            </div>

                                            <div className="bar">
                                                <div className="info ">
                                                    <span>illustrator</span>
                                                    <span>60%</span>
                                                </div>

                                                <div className="line ">
                                                    <span
                                                        style={{ width: "60%" }}
                                                        data-width="60%"
                                                    />
                                                </div>
                                            </div>

                                            <div className="bar">
                                                <div className="info ">
                                                    <span>PremierePro</span>
                                                    <span>80%</span>
                                                </div>

                                                <div className="line ">
                                                    <span
                                                        style={{ width: "80%" }}
                                                        data-width="80%"
                                                    />
                                                </div>
                                            </div>

                                            <div className="bar">
                                                <div className="info ">
                                                    <span>afterEfect</span>
                                                    <span>55%</span>
                                                </div>

                                                <div className="line ">
                                                    <span
                                                        style={{ width: "55%" }}
                                                        data-width="55%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {experience && (
                                    <div className="page page3">
                                        <span></span>

                                        <div className="box">
                                            <div>
                                                <h3>
                                                    <span>2022 - curret</span>
                                                    <span>Freelance</span>
                                                </h3>
                                            </div>

                                            <div>
                                                {/* <FaGraduationCap className="i" /> */}
                                                <h3>
                                                    <span>
                                                        Senior Graphic Designer
                                                    </span>
                                                </h3>

                                                <p>
                                                    Experience in publications
                                                    designs, social media
                                                    designs, and personal card
                                                    designs
                                                </p>
                                            </div>
                                        </div>

                                        <div className="box">
                                            <div>
                                                <h3>
                                                    <span>2021 -2022</span>
                                                    <span>Freelance</span>
                                                </h3>
                                            </div>

                                            <div>
                                                {/* <FaGraduationCap className="i" /> */}
                                                <h3>
                                                    <span>
                                                        Social media page
                                                        manager
                                                    </span>
                                                </h3>

                                                <p>
                                                    I manage all social media
                                                    pages and make funded
                                                    advertisements
                                                </p>
                                            </div>
                                        </div>

                                        <div className="box">
                                            <div>
                                                <h3>
                                                    <span>2020 - 2021</span>
                                                    <span>Freelance</span>
                                                </h3>
                                            </div>

                                            <div>
                                                {/* <FaGraduationCap className="i" /> */}

                                                <h3>
                                                    <span>E - marketing</span>
                                                </h3>

                                                <p>
                                                    He worked for a short period
                                                    in this field after studying
                                                    the e-marketing course from
                                                    Google
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
