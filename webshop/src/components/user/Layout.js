import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;