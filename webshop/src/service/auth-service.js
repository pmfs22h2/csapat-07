const users = [
    {
        email: "admin@example.com",
        password: "admin"
    },
    {
        email: "alice@inchains.com",
        password: "alice"
    }
];

export function registerUser(email, password) {
    return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAK6MFiuvqKalx4iCbIqTwIZeFKVuSIGdY",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    .then(resp => resp.json())
}

export function authenticate(email, password) {
    return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAK6MFiuvqKalx4iCbIqTwIZeFKVuSIGdY",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    .then(resp => resp.json())
}