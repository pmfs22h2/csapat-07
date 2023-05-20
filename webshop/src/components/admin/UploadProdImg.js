import { useState } from "react";
import { app } from "../../firebase/firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import '../../styles/adminAddProduct.css';

const UploadProdImg = ({imageUpload}) => {

    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);

    // visszaad egy tömbszerű objektumot (a feltölteni kívánt fájl adataival), ezt el kell tárolnunk egy state-be
    const fileChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const fileUpload = () => {
        if (!file) {
            return;
        }
        const storage = getStorage(app);        // 1. hozzá csatlakoztunk a storage szolgáltatáshoz (fent importok is)
        const fileRef = ref(storage, "prod-images/" + file.name);   // 2. fájlnév + könyvtár alapján létrehoz egy szándékot
        uploadBytes(fileRef, file)              // fájl és referencia megadása a feltöltő függvénynek    
            .then(uploadResult => {
                console.log(uploadResult);
                const imgUrl = getDownloadURL(uploadResult?.ref)
                    .then(url => {
                        console.log(url);
                        setUploadedUrl(url);
                        imageUpload(url);
                    })
            })
    }

    return (
        <div className="upload-img">
            <h3>Kép feltöltése a termékhez</h3>
            <p><input type="file" name="product-images" onChange={fileChange} /></p>
            <button type="button" onClick={fileUpload}>Feltöltés</button>
            <div className="uploaded-img">
                {uploadedUrl && 
                <><p>A termékhez feltöltött kép: </p><img src={uploadedUrl} alt="" style={{ width: "300px" }} /></>}
            </div>
        </div>
    )
}

export default UploadProdImg;