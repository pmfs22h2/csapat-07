import MainStepper from "./MainStepper";
import { Link } from "react-router-dom";

const IntroPage = () => {
    return (
        <>
            <h2>Termék varázsló</h2>
            <p>
                Mit szólnál hozzá, ha egy gyors és interaktív kérdőív segítségével segítetnénk
                neked megtalálni a számodra legmegfelelőbb terméket?
            </p>
            <p>
                Mindössze annyi a dolgod, hogy válaszolsz 3 kérdésre, mi pedig kiválasztjuk a hozzád és
                igényeidhez leginkább passzoló terméket kínálatunkból!
            </p>
            <Link to="/kerdesek">Induljon a varázslat!</Link>
        </>
    )
}

export default IntroPage;