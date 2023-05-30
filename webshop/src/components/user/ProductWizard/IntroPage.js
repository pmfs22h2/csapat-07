import MainStepper from "./MainStepper";
import { Link } from "react-router-dom";
import '../../../styles/ProductWizard/intropage.css';
import { useContext, useEffect } from "react";
import categoryService from "../../../service/categoryService";
import WizardContext from "../../../context/WizardContext";

const IntroPage = () => {
    
    const {priceTag, setPriceTag} = useContext(WizardContext);

    useEffect(() => {
        categoryService.readCategories()
        .then(data => console.log(data))
    })
    
    return (
        <section className="wizard-intro">
            <h2>Termék varázsló</h2>
            <p><img src="https://images.pexels.com/photos/6707334/pexels-photo-6707334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></p>
            <div className="intro-container">
                <p>
                    Mit szólnál hozzá, ha egy gyors és interaktív kérdőív segítségével segítetnénk
                    neked megtalálni a számodra legmegfelelőbb termékeket?
                </p>
                <p>
                    Mindössze annyi a dolgod, hogy válaszolsz 3 kérdésre, mi pedig kiválasztjuk a hozzád és
                    igényeidhez leginkább passzoló termékeket kínálatunkból!
                </p>
            </div>
            <br />
            <Link to="/kerdesek">Induljon a varázslat!</Link>
        </section>
    )
}

export default IntroPage;