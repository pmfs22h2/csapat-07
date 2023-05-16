
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import {registerUserAuth} from "../../service/auth-service";

export default function Registration() {

    // const [user, setUser] = useContext(AuthContext);
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    return (
        <>
            <h1>Regisztráció</h1>
            <p>
                <label>
                E-mail: 
                </label>
                <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </p>
                <p>
                <label>
                Jelszó: 
                </label>
                    <input
                        type="text"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </p>
                <p>
                <label>
                Név:
                </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </p>
                <p><button onClick={register}>regisztráció</button></p>
        </>
    );

   function register() {
    registerUserAuth(formData);
   }
}