const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/'

function read() {
    return fetch(`${API_URL}customers.json`)
        .then(res => res.json())
}

function readUser(uid) {
    return fetch(`${API_URL}customers/${uid}.json`)
        .then(res => res.json())
}

export default {
    read: read,
    readUser: readUser
}
