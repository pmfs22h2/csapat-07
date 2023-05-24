const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/";

const getCart = (userID) => {
    return fetch(`${API_URL}/customers/${userID}/cart.json`)
            .then(resp => resp.json())    
}

const changeItem = (product, userID) => {
    // const product = { [productId]: itemPiece };
    // console.log(product)
    return fetch(`${API_URL}/customers/${userID}/cart.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
}

const deleteProduct = (userid, productid) => {
    return fetch(`${API_URL}customers/${userid}/cart/${productid}.json`, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

// const addToCart = (productId, userID) => {
//     getCart(userID)
//         .then(cartItems => {
//             if (cartItems != null) {                // ha cartItems = null: akkor nincs a usernek kosara
//                 if (productId in cartItems) {
//                     console.log(cartItems);
//                     let piecesByProductIdInCart = cartItems[productId];             // objektum[kulcs]
//                     updateItem(productId, piecesByProductIdInCart, userID);
//                 } else {
//                     addItem(productId, userID);     // ha van kosara, de még az az adott termék nincs benne
//                 }
//             } else {
//                 addItem(productId, userID);
//             }
//         })
// }

// const addItem = (productId, userID) => {
//     changeItem(productId, userID, 1)        // ha még nincs benne az az adott termék, automatikusan 1 lesz
// }

// const updateItem = (productId, itemPiece, userID) => {
//     itemPiece++;
//     changeItem(productId, userID, itemPiece);
// }

export default {
    changeItem,
    // addToCart,
    getCart,
    deleteProduct,
}