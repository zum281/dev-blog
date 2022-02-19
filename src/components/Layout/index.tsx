import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import "../../styles/global.css";

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <Heading />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
