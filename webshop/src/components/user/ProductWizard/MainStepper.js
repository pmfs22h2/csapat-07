import Stepper from 'react-stepper-horizontal';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ResultPage from './ResultPage';
import { useState } from 'react';
import '../../../styles/ProductWizard/stepper.css'
import "../../../styles/ProductWizard/result.css"

const MainStepper = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [toast, setToast] = useState("")

    const handleNext = (data) => {
        if (Object.values(data) == "") {
            setToast("Egy opció kiválasztása kötelező!");
        }
        else {
            setFormData(prev => ({ ...prev, ...data }));
            setCurrentStep(currentStep + 1);
            setToast("")
            console.log(toast, 'formdata');
        }
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const restartTest = () => {
        setFormData({})
        setCurrentStep(0)
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Step1 onNext={handleNext} toast={toast} />;
            case 1:
                return <Step2 onNext={handleNext} onPrevious={handlePrevious} toast={toast} />;
            case 2:
                return <Step3 onNext={handleNext} onPrevious={handlePrevious} toast={toast} />;
            case 3:
                return <ResultPage formData={formData} restartTest={restartTest} />;
            default:
                return null;
        }
    };

    return (
        <div className='wizard-container'>
                <section className='margin-helper'>
                    <Stepper
                        steps={[{ title: 'bőrtípus' }, { title: 'probléma' }, { title: 'költségvetés' }, { title: 'eredmény' }]}
                        activeStep={currentStep}
                        activeColor="#b99888"
                        completeColor="#b99888"
                    />
                    {renderStep()}
                </section>
        </div>
    );
};

export default MainStepper;