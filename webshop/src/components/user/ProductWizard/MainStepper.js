import Stepper from 'react-stepper-horizontal';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ResultPage from './ResultPage';
import { useState } from 'react';

const MainStepper = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Step1 onNext={handleNext} />;
            case 1:
                return <Step2 onNext={handleNext} onPrevious={handlePrevious} />;
            case 2:
                return <Step3 onNext={handleNext} onPrevious={handlePrevious} />;
            case 3:
                return <ResultPage formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Stepper
                steps={['Step 1', 'Step 2', 'Step 3', 'Result']}
                activeStep={currentStep}
            />
            {renderStep()}
        </div>
    );
};

export default MainStepper;