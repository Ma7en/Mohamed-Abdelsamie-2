/* eslint-disable react/no-unescaped-entities */
import React from "react";

// // social
// import social1 from "../../images/work/social/social1.png";
// import social2 from "../../images/work/social/social2.png";
// import social3 from "../../images/work/social/social3.png";
// import social4 from "../../images/work/social/social4.png";

// // card
// import card1 from "../../images/work/card/card1.png";

// // video
// import video1 from "../../video/video1.mp4";
// import labtop from "../../images/video/labtop.png";

// // meno
// import meno1 from "../../images/work/meno/Meno1.png";

// // book
// import book1 from "../../images/work/book/book1.png";

const Work = () => {
    // const [dataWork, setDataWork] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3002/work")
    //         .then((response) => response.json())
    //         .then((json) => setDataWork(json));
    // }, []);

    return (
        <>
            <section className="work" id="Portfolio">
                <div className="container">
                    <div className="title">
                        <h2>MY Work</h2>
                        <p>Some of the work you have done</p>
                    </div>

                    <div className="content">
                        <div className="cont" id="ser1">
                            <div className="left">
                                <h3>
                                    <a>Social media designs</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Social media designs are the most
                                            important factor in drawing the
                                            customer's attention to your company
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://www.behance.net/gallery/142729845/Sushiel-Media-designs-in-photoshop"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    // src={social1}
                                    src="images/work/social/social1.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser2">
                            <div className="left">
                                <h3>
                                    <a>Sales designs</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Great ideas for sales designs and
                                            social media ads
                                        </span>
                                    </div>
                                </div>

                                <a
                                    // href="https://wa.me/+201011246756"
                                    href="https://wa.me/+201011246756?text=انا اريد تصميم سوشيال ميديا"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    src="images/work/social/social2.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser4">
                            <div className="left">
                                <h3>
                                    <a>Business card</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            A card that carries information
                                            about the person and the company he
                                            work for
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/+201011246756?text= اريد تصميم Business Card بنفس هذه الفكرة"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    // src={card1}
                                    src="images/work/card/card1.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser5">
                            <div className="left">
                                <h3>
                                    <a>Menu</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            I resist by making modern menus and
                                            innovative ideas, which attract
                                            customers and draw attention, so it
                                            is considered one of the necessary
                                            things when preparing restaurant
                                            equipment, so attention must be paid
                                            to the wonderful design as well as
                                            containing all types and prices.
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://www.behance.net/gallery/161912739/Menu-design"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    // src={meno1}
                                    src="images/work/meno/Meno1.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser6">
                            <div className="left">
                                <h3>
                                    <a>DESIGN COVER FACEBOOK</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Your Facebook cover on your Facebook
                                            page speaks about your business and
                                            I resist doing simple yet
                                            professional designs
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/+201011246756?text= اريد تصميم غلاف facebook بنفس هذه الفكرة "
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    // src={social4}
                                    src="images/work/social/social4.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser7">
                            <div className="left">
                                <h3>
                                    <a>DESIGN COVER BOOKS</a>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            The importance of designing a
                                            professional cover is not limited to
                                            being an element of attraction only,
                                            but rather it is the first
                                            communication tool between the
                                            reader and the book, which informs
                                            him of the type of book, its idea,
                                            its target audience, and glimpses of
                                            its story. All the elements of a
                                            professional book cover should help
                                            convey the message and status of the
                                            book in a matter of seconds.
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/+201011246756?text= اريد تصميم غلاف كتاب أو رواية مثل هذه الفكرة"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    more
                                </a>
                            </div>

                            <div className="right">
                                <img
                                    src="images/work/book/book1.png"
                                    loading="lazy"
                                    alt="services1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
