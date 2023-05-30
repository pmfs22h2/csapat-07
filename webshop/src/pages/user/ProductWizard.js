import { Link } from "react-router-dom";
import MainStepper from "../../components/user/ProductWizard/MainStepper";

const ProductWizard = () => {
    return (
        <>
            <div>ProductWizard</div>
            <Link to="/kerdesek"><MainStepper /></Link>
        </>
    )
}

export default ProductWizard;
