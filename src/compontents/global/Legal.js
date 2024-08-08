import React from "react";

import { Link } from "react-scroll";

const Legal = () => {
    const newDate = new Date();
    return (
        <>
            <footer className="legal">
                <div className="container">
                    <p>Copyright (c)</p>
                    <span className="dateYear">{newDate.getFullYear()}</span>
                    <p>by</p>
                    <Link
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Mohammed Abdelsamie
                    </Link>
                    {/* <span className="span">🧡</span> */}
                </div>
            </footer>
        </>
    );
};

export default Legal;
