const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/";

export default function getCartList(cartlist) {
    const cart = [];
    if(!cartlist) return Promise.resolve(cart)
    const promises = Object.keys(cartlist).map(id => {
        cart.push({productId: id, amount: cartlist[id]})
        return fetch(`${API_URL}products/${id}.json`)
    })

    return Promise.all(promises)
        .then(response => {
            return Promise.all(response.map(data => data.json()))})
        .then(data => data.map((p, index) => Object.assign(cart[index], p)))
}
