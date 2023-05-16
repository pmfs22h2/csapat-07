const Login = () => {
    
    
    return (
        <>
            <h1> Bejelenkezés </h1>
            <p>
                <label for="email"> E-mail: </label>
                <input type="email" />
            </p>
            <p>
                <label for="password"> Jelszó: </label>
                <input type="password" />
            </p>
            <p><button>Belépés</button></p>
        </>
    );
}

export default Login;