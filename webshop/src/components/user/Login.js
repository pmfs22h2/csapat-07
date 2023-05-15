const Login = () => {
    return (
        <>
            <h1> Bejelenkezés </h1>
            <p>
                <label>
                    E-mail:
                </label>
                <input
                    type="text"
                    value=""
                    onChange=""
                />
            </p>
            <p>
                <label>
                    Jelszó:
                </label>
                <input
                    type="text"
                    value=""
                    onChange=""
                />
            </p>
            <p><button>Belépés</button></p>
        </>
    );
}

export default Login;