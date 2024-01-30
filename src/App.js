/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";

import "./css/style.scss";

import Goicon from "./compontents/global/Goicon";
import Header from "./compontents/global/Header";
import Landing from "./compontents/global/Landing";
import About from "./compontents/global/About";
import Services from "./compontents/global/Services";
import Work from "./compontents/global/Work";
// import Price from "./compontents/global/Price";
import Contact from "./compontents/global/Contact";
// import Footer from "./compontents/global/Footer";
import Legal from "./compontents/global/Legal";

function App() {
    return (
        <>
            <Goicon />
            <Header />
            <Landing />
            <About />
            <Services />
            <Work />
            {/* <Price /> */}
            <Contact />
            {/* <Footer /> */}
            <Legal />
        </>
    );
}

export default App;
