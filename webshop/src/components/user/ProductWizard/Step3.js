import { useState } from "react";

const Step3 = ({ onNext, onPrevious, toast }) => {
    const [budget, setBudget] = useState('');

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNext({ budget });
    };

    return (
        <form onSubmit={handleSubmit} className="wizard-form">
            <p>Válaszd ki, milyen anyagi ráfordítást preferálsz!</p>
            {toast && <p className="warning">{toast}</p>}
            <div className="wizard-form-grid">
            <div>
                <br/>
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="Prémium $$$"
                        checked={budget === 'Prémium $$$'}
                        onChange={handleBudgetChange}
                    />
                    <label >Prémium $$$</label>
                    <div class="selected"></div>
                </label>
            </div>
            <div>
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="Normál árfekvés $$"
                        checked={budget === 'Normál árfekvés $$'}
                        onChange={handleBudgetChange}
                    />
                    <label >Normál árfekvés $$</label>
                    <div class="selected"></div>
                </label>
            </div>
            <div>
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="Pénztárcabarát $"
                        checked={budget === 'Pénztárcabarát $'}
                        onChange={handleBudgetChange}
                    />
                    <label >Pénztárcabarát $</label>
                    <div class="selected"></div>
                </label>
            </div>
            </div>
            <br/>
            <button type="button" onClick={onPrevious}>Vissza</button>
            <button type="submit">Tovább</button>
        </form>
    );
};

export default Step3;