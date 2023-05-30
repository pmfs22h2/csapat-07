const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app'

function createCategory(category) {
    return fetch(`${API_URL}/categories.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: category })
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
        body: JSON.stringify({ id })
    })
}

function readCategories() {
    return fetch(`${API_URL}/categories.json`)
        .then(res => res.json())
}

function deleteCategory(id) {
    return fetch(`${API_URL}/categories/${id}.json`, {
        method: 'DELETE',
    }
    )
        .then(res => res.json())
}

export function getCategory(id) {
    console.log("GET")
    return fetch(`${API_URL}/categories/${id}.json`, {
        method: 'GET',
    }
    )
        .then(res => res.json())
}

export function updateCategory(id, category) {
    if (!id) {
        return null;
    }

    return fetch(`${API_URL}/categories/${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id: category.id, name: category.name })
    })
        .then(res => res.json())
    /* .then(product => setProductId(product.name)) */
}

export default {
    createCategory: createCategory,
    readCategories: readCategories,
    deleteCategory: deleteCategory,
    getCategory: getCategory,
    updateCategory: updateCategory
}