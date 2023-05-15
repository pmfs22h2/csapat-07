
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import {registerUserAuth} from "../../service/auth-service";
import "../../styles/registration.css";

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
        <div className="registration-form">
       
            <h1>Regisztráció</h1>
            <br></br>
            <p>
                <label>
                E-mail: 
                </label>
                <input className="input"
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </p>
                <br></br>
                <p>
                <label>
                Jelszó: 
                </label>
                    <input className="input"
                        type="text"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </p>
                <p>
                <br></br>
                <label>
                Név:
                </label>
                    <input className="input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </p>
                <br></br>
                <p><button className="regbutton" onClick={register}>küldés</button></p>
                </div>       
              
        </>
    );

   function register() {
    registerUserAuth(formData);
   }
}