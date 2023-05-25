import MainStepper from "./MainStepper";
import { Link } from "react-router-dom";

const IntroPage = () => {
    return (
        <>
            <div>Helló, ez itt a rutinvarázsló!</div>
            <Link to="/kerdesek">Kezdjük!</Link>
        </>
    )
}

export default IntroPage;