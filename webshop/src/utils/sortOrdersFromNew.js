export default function sortOrdersFromNew(order) {
    let newUsers = [...order]

    return newUsers.sort((a, b) => a.timestamp.localeCompare(b.timestamp, 'hu-HU'));
}