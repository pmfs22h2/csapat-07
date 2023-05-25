import { app } from "../firebase/firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import productService from "../service/productService";

export const fileUpload = (file, seturl, productid) => {
    if (!file) {
        return;
    }
    const storage = getStorage(app);        // 1. hozzá csatlakoztunk a storage szolgáltatáshoz (fent importok is)
    const fileRef = ref(storage, "prod-images/" + file.name);   // 2. fájlnév + könyvtár alapján létrehoz egy szándékot
    uploadBytes(fileRef, file)              // fájl és referencia megadása a feltöltő függvénynek    
        .then(uploadResult => {
            getDownloadURL(uploadResult?.ref)
                .then(url => {
                    seturl(url);
                    // firebase - patch - /products - url-t hozzáteszi
                    productService.updateImg(productid, url)
                })
        })
}