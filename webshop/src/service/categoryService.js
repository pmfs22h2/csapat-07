const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app'

function createCategory(category) {
    return fetch(`${API_URL}/categories.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: category})
    })
        .then(res => res.json()) 
        .then(data => setCategoryId(data.name))
}

function setCategoryId(id) {
    return fetch(`${API_URL}/categories/${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id})
    })
}

function readCategories() {
    return fetch(`${API_URL}/categories.json`)
        .then(res => res.json())
}


export default{
    createCategory: createCategory,
    readCategories: readCategories
    
}