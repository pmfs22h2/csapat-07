export function createNewUser(userID, userData) {
    return fetch(`https://auth-example-ea6f5-default-rtdb.europe-west1.firebasedatabase.app/users/${userID}.json`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
}