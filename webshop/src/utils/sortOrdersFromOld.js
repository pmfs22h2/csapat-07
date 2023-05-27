export default function sortOrdersFromOld(order) {
    let newUsers = [...order]

    return newUsers.sort((a, b) => b.timestamp.localeCompare(a.timestamp, 'hu-HU'));
}