const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/";

const getCart = (userID) => {
    return (
        fetch(`${API_URL}/customers/${userID}/cart.json`)
            .then(resp => resp.json())
    )
}

const addToCart = (productId, userID) => {
    getCart(userID)
        .then(cartItems => {
            if (cartItems != null) {                // ha cartItems = null: akkor nincs a usernek kosara
                if (productId in cartItems) {
                    // console.log(cartItems);
                    let piecesByProductIdInCart = cartItems[productId];             // objektum[kulcs]
                    updateItem(productId, piecesByProductIdInCart, userID);
                } else {
                    addItem(productId, userID);     // ha van kosara, de még az az adott termék nincs benne
                }
            } else {
                addItem(productId, userID);
            }
        })
}

const addItem = (productId, userID) => {
    changeItem(productId, userID, 1)        // ha még nincs benne az az adott termék, automatikusan 1 lesz
}

const updateItem = (productId, itemPiece, userID) => {
    itemPiece++;
    changeItem(productId, userID, itemPiece);
}

const changeItem = (productId, userID, itemPiece) => {
    const product = { [productId]: itemPiece };
    return fetch(`${API_URL}customers/${userID}/cart.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
}

export default {
    addToCart,

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