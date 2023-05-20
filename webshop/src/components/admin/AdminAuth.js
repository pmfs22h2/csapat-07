import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext";
import { Navigate } from "react-router-dom";

export default function AdminAuth(props) {
    const { admin, setAdmin } = useContext(AdminAuthContext);

    if (!admin) return <Navigate to="/admin-belepes" />
    return (
        props.children
    )
}