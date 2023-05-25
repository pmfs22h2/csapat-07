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
        <form onSubmit={handleSubmit}>
            <h2>1. Bőrtípus</h2>
            <p>Válaszd ki a bőrtípusod:</p>
            {toast && <p>válassz valamit</p>}
            <br />
            <div>
                <label>
                    <input
                        type="radio"
                        value="szaraz"
                        checked={skinType === 'szaraz'}
                        onChange={handleSkinTypeChange}
                    />
                    Száraz
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="normal"
                        checked={skinType === 'normal'}
                        onChange={handleSkinTypeChange}
                    />
                    Normál
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="zsiros"
                        checked={skinType === 'zsiros'}
                        onChange={handleSkinTypeChange}
                    />
                    Zsíros
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="kombinalt"
                        checked={skinType === 'kombinalt'}
                        onChange={handleSkinTypeChange}
                    />
                    Kombinált
                </label>
            </div>
            <br />
            <button type="submit">Tovább</button>
        </form>
    );
};

export default Step1;