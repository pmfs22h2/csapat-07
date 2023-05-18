
import { useState } from "react";
import { registerUserAuth } from "../../service/auth-service";
import "../../styles/registration.css";


export default function Registration() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    function register(e) {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            setErrorMsg("Minden mezőt kötelező kitölteni!");
            return;
        } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
            setErrorMsg("Az e-mail cím formátuma érvénytelen!");
            return;
        }

        try {
            registerUserAuth(formData);
            setRegistrationSuccess(true);
        } catch (error) {
            setErrorMsg("Hiba a regisztráció során!");
            console.error(error);
        }
    }

    return (
    
        <div className="registration-form">
       
            <h1>Regisztráció</h1>
            <form>
                <p>
                    <label> Név: </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </p>
                <p>
                    <label> E-mail: </label>
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </p>
                <p>
                    <label> Jelszó: </label>
                    <input
                        type="text"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </p>
                <p><button type="submit" onClick={register}>regisztráció</button></p>
            </form>
            {errorMsg && <div>{errorMsg}</div>}
            </div>
      )
}