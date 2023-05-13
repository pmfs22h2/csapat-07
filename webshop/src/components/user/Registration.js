
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { registerUser } from "../../service/auth-service";
import { useContext, useState } from "react";
import { createNewUser } from "../../service/user-service";

export default function Registration() {

    const [user, setUser] = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        birthDate: ""
    });

    return (
        <>
            <h1>register</h1>
            <p>
                <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        value={formData.birthDate}
                        onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    />
                </p>
                <p><button onClick={register}>register</button></p>
        </>
    );

    function register() {
        registerUser(formData.email, formData.password)
        .then(registerResp => {
            console.log(registerResp)
            if (registerResp.idToken) {
              

                createNewUser(registerResp.localId, { birthDate: formData.birthDate })
                .then(createResponse => {
                    if (true) {
                        
                        setUser({ email: registerResp.email })
                        navigate("/protected");
                    } else {
                        
                    }
                })


            } else {
                alert(registerResp.error.message)
            }
        });
    }
}