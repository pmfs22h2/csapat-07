export default function sortProductsFromA(users) {
    let newUsers = [...users]

    return newUsers.sort((a, b) => b.name.localeCompare(a.name, 'hu-HU'));
}