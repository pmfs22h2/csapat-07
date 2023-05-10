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
        .then(product => setProductId(product.name))
}

function setProductId(id) {
    fetch(`${API_URL}products/${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id})
    })
}

function manipulateProductObject (obj) {
    const newData = Object.entries(obj).map(item => {
         const dataWithId = {
            id: item[0],
            ...item[1]
        }
        return dataWithId
    })
    return newData
}

function read() {
    return fetch(`${API_URL}products.json`)
        .then(res => res.json())
}

function del(id, successCalback) {
    if (!id) {
      return null;
    }
  
    return fetch(`${API_URL}products/${id}.json`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json => successCalback(json))
  }

export default {
    create: create,
    read: read,
    manipulateProductObject: manipulateProductObject,
    del: del
}
