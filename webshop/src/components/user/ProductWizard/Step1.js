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
            {/* <h2>1. Bőrtípus</h2> */}
            <p>Válaszd ki a bőrtípusod:</p>
            {toast && <p>Nem választottál!</p>}
            <br />
            <div className="wizard-form-grid">
            <div className="right">
                <label className="wizard-label">
                    <input
                        type="radio"
                        value="szaraz"
                        checked={skinType === 'szaraz'}
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
                        value="normal"
                        checked={skinType === 'normal'}
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
                        value="zsiros"
                        checked={skinType === 'zsiros'}
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
                        value="kombinalt"
                        checked={skinType === 'kombinalt'}
                        onChange={handleSkinTypeChange}
                    />
                    <label>kombinalt</label>
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