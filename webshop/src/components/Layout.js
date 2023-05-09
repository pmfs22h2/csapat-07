import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
    return (
        <>
            <Navigation />
            <hr />
            <Outlet />
        </>
    );
}

export default Layout;