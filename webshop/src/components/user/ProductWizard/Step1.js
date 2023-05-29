import { useState } from "react";

const Step1 = ({ onNext, toast }) => {
    const [skinType, setSkinType] = useState('');

    const handleSkinTypeChange = (event) => {
        setSkinType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNext({ skinType });
    };

    return (
        <form onSubmit={handleSubmit} className="wizard-form">
            <p>Válaszd ki a bőrtípusod:</p>
            {toast && <p className="warning">{toast}</p>}
            <br />
            <div className="wizard-form-grid">
            <div className="right">
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="száraz"
                        checked={skinType === 'száraz'}
                        onChange={handleSkinTypeChange}
                    />
                    <label >száraz</label>
                    <div class="selected"></div>
                </label>
            </div>
            <div >
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="normál"
                        checked={skinType === 'normál'}
                        onChange={handleSkinTypeChange}
                    />
                    <label>normál</label>
                    <div class="selected"></div>
                </label>
            </div>
            <div className="right">
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="zsíros"
                        checked={skinType === 'zsíros'}
                        onChange={handleSkinTypeChange}
                    />
                    <label>zsíros</label>
                    <div class="selected"></div>
                </label>
            </div>
            <div className="left">
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="kombinált"
                        checked={skinType === 'kombinált'}
                        onChange={handleSkinTypeChange}
                    />
                    <label>kombinált</label>
                    <div class="selected"></div>
                </label>
            </div>
            </div>
            <br />
            <button type="submit">Tovább</button>
        </form>
    );
};

export default Step1;