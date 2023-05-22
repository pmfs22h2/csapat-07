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
        // .then(product => setProductId(product.id))
      
}

// function setProductId(id) {
//     return fetch(`${API_URL}categories/${id}.json`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({id})
//     })
//     .then(resp => resp.json())
// }




export default{
    createCategory: createCategory
    
}