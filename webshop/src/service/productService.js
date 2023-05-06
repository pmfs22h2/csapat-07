const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/'

function create(product) {
    return fetch(`${API_URL}products.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
}


function read() {
    return fetch(`${API_URL}products.json`)
        .then(res => res.json())
}

export default {
    create: create,
    read: read
}
