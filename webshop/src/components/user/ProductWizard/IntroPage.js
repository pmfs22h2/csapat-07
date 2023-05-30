import MainStepper from "./MainStepper";
import { Link } from "react-router-dom";
import '../../../styles/ProductWizard/intropage.css';
import { useContext, useEffect } from "react";
import categoryService from "../../../service/categoryService";
import WizardContext from "../../../context/WizardContext";

const IntroPage = () => {

    const { priceTag, setPriceTag } = useContext(WizardContext);

    const buildObjectForTags = (rawObjFromDb) => {
        const entries = Object.entries(rawObjFromDb)

        let result = {};

        for (let entry of entries) {
            result[entry[1].name] = entry[1].id;    // ha új v. régi kulcsot akarok új értékkel ellátni objektumnál, így állítom be: objektum[kulcs] = érték
        }
        return result;
    }

    useEffect(() => {
        categoryService.readCategories()
            .then(data => {
                console.log(data);
                let obj = buildObjectForTags(data);
                setPriceTag(obj);       // contextbe beletettem a kategóriákat id-val
            })
    }, [])

    return (
        <section className="wizard-intro">
            <h2 className="wizard-h2">Termék varázsló</h2>
            <div className="intro-big-container">
            <div className="intro-container">
            <p><img src="https://images.pexels.com/photos/6707334/pexels-photo-6707334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width: "400px"}} /></p>
                <p>
                    Mit szólnál hozzá, ha egy gyors és interaktív kérdőív segítségével segítetnénk
                    neked megtalálni a számodra legmegfelelőbb termékeket?
                </p>
                <p>
                    Mindössze annyi a dolgod, hogy válaszolsz 3 kérdésre, mi pedig kiválasztjuk a hozzád és
                    igényeidhez leginkább passzoló termékeket kínálatunkból!
                </p>
            </div>
            </div>
            <br />
            <Link className="wizard-link" to="/kerdesek">Induljon a varázslat!</Link>
        </section>
    )
}

export default IntroPage;