import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function Auth(props) {
    const [user, setUser] = useContext(AuthContext);

    if (!user) return <Navigate to="/" />
}