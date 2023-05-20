const API_KEY = "AIzaSyAK6MFiuvqKalx4iCbIqTwIZeFKVuSIGdY";
const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/";

export function registerUserAuth(formdata) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: formdata.email,
            password: formdata.password,
            returnSecureToken: true
        })
    })
        .then(resp => resp.json())
        .then(data => databaseUserRegister(data.localId, formdata.name, formdata.email))
}

function databaseUserRegister(id, name, email) {
    return fetch(`${API_URL}customers/${id}.json`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                uid: id,
                name: name,
                email: email
            }
        )
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
}

export function userLoginAuth(email, password) {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
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
    // .then(authResp => console.log(authResp)) ezt kiviszem a serviceből, felh. helyén thenelek rá mégegyszer
}

export function getNameFromDatabase(id) {
    return fetch(`https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/customers/${id}.json`)
        .then(resp => resp.json())
}