const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/"; 

export default {
  create: (cartItem, userID) => {
    return fetch(`${API_URL}customers/${userID}/cart.json`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
    .then(res => res.json())
  },
  read: () => {
    return fetch(`${API_URL}cart.json`).then(res => res.json())
  },
  delete: (id) => {
    return fetch(`${API_URL}cart/${id}.json`, {
      method: 'DELETE'
    })
    .then(res => res.json())
  }
}

export function addToCart(user, product) {
    const url = API_URL + 'vasarlok/' + user.uid + '/cart.json';
    console.log(url)
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ user, product })
    })
      .then(res => res.json())
  }