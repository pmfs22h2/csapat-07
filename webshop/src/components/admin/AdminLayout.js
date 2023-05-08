import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

const AdminLayout = () => {
    return (
        <>
            <AdminNavigation />
            <Outlet />
        </>
    );
}

export default AdminLayout;