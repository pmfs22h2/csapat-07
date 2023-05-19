import { useState } from "react"

const UploadProdImg = () => {

    const [file, setFile] = useState(null);

    // file adatokat elmenti a state-be
    const fileChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    // ez tölti fel a storage-be a file-t
    const fileUpload = () => {
        if (!file) {
            return;
        }

        const storage = getStorage(app);
        const fileRef = ref(storage, "images/" + file.name)
    }

    return (
        <div className="upload-img">
            <h3>Kép feltöltése a termékhez</h3>
            <p><input type="file" name="image" onChange={fileChange}/></p>
            <button type="button" >Feltolt</button>
        </div>
    )
}

export default UploadProdImg;