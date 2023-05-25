import { useState } from "react";

const Step3 = ({ onNext, onPrevious }) => {
    const [budget, setBudget] = useState('');

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNext({ budget });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>3. Költségvetés</h2>
            <p>Válaszd ki, milyen anyagi ráfordítást preferálsz!</p>
            <div>
                <br/>
                <label>
                    <input
                        type="radio"
                        value="premium"
                        checked={budget === 'premium'}
                        onChange={handleBudgetChange}
                    />
                    Prémium
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="aranykozeput"
                        checked={budget === 'aranykozeput'}
                        onChange={handleBudgetChange}
                    />
                    Arany középút
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="penztarcarafriendly"
                        checked={budget === 'penztarcarafriendly'}
                        onChange={handleBudgetChange}
                    />
                    Pénztárcabarát
                </label>
            </div>
            <br/>
            <button type="button" onClick={onPrevious}>Vissza</button>
            <button type="submit">Tovább</button>
        </form>
    );
};

export default Step3;