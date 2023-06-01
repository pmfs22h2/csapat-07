const API_URL_ORDERS = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/orders'
const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app'

const sendOrder = (cart, userID, timestamp) => {
    return fetch(`${API_URL_ORDERS}.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                uid: userID,
                products: cart,
                timestamp: timestamp
            }
        )
    })
        .then(res => res.json())
        .then(data => setOrderId(data.name))
}

function setOrderId(id) {
    fetch(`${API_URL_ORDERS}/${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
}

function deleteCart(id) {
    return fetch(`${API_URL}/customers/${id}/cart.json`, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

function getOrders() {
    return fetch(`${API_URL_ORDERS}.json`)
        .then(res => res.json())
}

function getOrder(orderid) {
    return fetch(`${API_URL_ORDERS}/${orderid}.json`)
        .then(res => res.json())
}

export default {
    sendOrder,
    deleteCart,
    getOrders,
    getOrder
}