import { useState } from "react";
import { registerUserAuth } from "../../service/auth-service";
import "../../styles/registration.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    function register(e) {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            toast.error('Minden mezőt kötelező kitölteni!', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
            toast.error('Az e-mail cím formátuma érvénytelen!', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        try {
            registerUserAuth(formData);
            setRegistrationSuccess(true);
            toast.success("Sikeres regisztráció!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } catch (error) {
            toast.error('Hiba a regisztráció során!', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            console.error(error);
        }
    }

    return (

        <div className="registration-form">

            <h1 className="registration-title">Regisztráció</h1>
            <form>
                <p className="reg-text">
                    <input className="effect-1"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <span class="focus-border"></span>
                    <label> Név: </label>
                </p>
                <p className="reg-text">
                    <input className="effect-1"
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <span class="focus-border"></span>
                    <label> E-mail: </label>
                </p>
                <p className="reg-text">
                    <input className="effect-1"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <span class="focus-border"></span>
                    <label> Jelszó: </label>
                </p>
                <button className="reg-button" type="submit" onClick={register}>Küldés</button>
            </form>
        </div>
    )
}