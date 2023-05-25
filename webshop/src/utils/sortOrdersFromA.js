export default function sorOrdersFromA(orders) {
    let newOrders = [...orders]
console.log(orders)
    return newOrders.sort((a, b) => a.id.localeCompare(b.id, 'hu-HU'));
}