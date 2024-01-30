import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="errorpage">
                <div className="container">
                    <div id="tsparticles" />
                    <div className="wrapper">
                        <h1>404</h1>
                        <h3>الصفحة التي تبحث عنها غير موجودة</h3>
                        <Link to="/">Back Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
