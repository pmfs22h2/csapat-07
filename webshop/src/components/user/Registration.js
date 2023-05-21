
import { useState } from "react";
import { registerUserAuth } from "../../service/auth-service";
import "../../styles/registration.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.error('Minden mezőt kötelező kitölteni!');
            return;
        } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
            toast.error('Az e-mail cím formátuma érvénytelen!');
            return;
        }

        try {
            registerUserAuth(formData);
            setRegistrationSuccess(true);
            toast.success("Sikeres regisztráció!");
        } catch (error) {
            toast.error('Hiba a regisztráció során!');
            console.error(error);
        }
    }

    return (

        <div className="registration-form">

            <h1>Regisztráció</h1>
            <form>
                <p className="reg-text">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <label> Név: </label>
                </p>
                <p className="reg-text">
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label> E-mail: </label>
                </p>
                <p className="reg-text">
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <label> Jelszó: </label>
                </p>
                <p><button className="reg-button" type="submit" onClick={register}>Küldés</button></p>
            </form>
            <ToastContainer />
        </div>

    )
}