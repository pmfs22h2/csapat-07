const API_URL = "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/";

export default function readCategories() {
    return fetch(`${API_URL}categories.json`)
        .then(res => res.json())
}
