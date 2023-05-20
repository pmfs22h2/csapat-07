const API_URL_ORDERS = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/orders'

const sendOrder = (cart, userID) => {
    return fetch(`${API_URL_ORDERS}.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                uid: userID,
                products: cart
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
            body: JSON.stringify({id})
        })
    }

    function deleteCart(id, cart) {
        return fetch(`${API_URL_ORDERS}/customers/${id}/cart.json`, {
          method: 'DELETE'
        })
      }
    


export default {
    sendOrder,
    deleteCart
}