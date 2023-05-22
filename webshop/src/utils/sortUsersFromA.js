export default function sortProductsFromA(users) {
    let newUsers = [...users]

    return newUsers.sort((a, b) => a.name.localeCompare(b.name, 'hu-HU'));
}