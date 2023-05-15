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
        .then(data => databaseUserRegister(data.localId, formdata.name))
}

function databaseUserRegister(id, name) {
    return fetch(`${API_URL}vasarlok/${id}.json`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                uid: id,
                name: name
            }
        )
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
}
