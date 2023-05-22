const sumCart = (cart) => {
    let sum = 0;
    if (cart && cart.length > 0) {
        for (const item of cart) {
            sum += item.price * item.amount;
        }
    }
    return sum;
}

export default sumCart;