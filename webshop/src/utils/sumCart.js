const sumCart = (cart) => {
    let sum = 0;
    console.log(cart, "függvény");
    if (cart && cart.length > 0) {
        for (const item of cart) {
            // if(item.price) sum += item.price * Number(item.amount);

            // az item.amount undefined            
            sum += item.price * Number(item.amount);
        }
    }

    if (isNaN(sum)) debugger;

    // const sum2 = cart.map(p => p.price) 
    // console.log(sum2, "sum2");
    return sum;
}

export default sumCart;