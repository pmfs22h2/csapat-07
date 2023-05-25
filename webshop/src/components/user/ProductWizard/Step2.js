import { useState } from "react";

const Step2 = ({ onNext }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary validation or data processing
        // Call onNext to move to the next step
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Step 2</h2>
            <p>Question 1:</p>
            <label>
                Option 1
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
            </label>
            <label>
                Option 2
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default Step2;