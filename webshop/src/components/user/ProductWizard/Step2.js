import { useState } from "react";

const Step2 = ({ onNext, onPrevious }) => {
    const [skinIssue, setSkinIssue] = useState('');
  
    const handleSkinIssueChange = (event) => {
      setSkinIssue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onNext({ skinIssue });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>2. Probléma</h2>
        <p>Milyen problémára keresel megoldást?</p>
        <br/>
        <div>
          <label>
            <input
              type="radio"
              value="aging"
              checked={skinIssue === 'aging'}
              onChange={handleSkinIssueChange}
            />
            Aging
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="erzekenyseg"
              checked={skinIssue === 'erzekenyseg'}
              onChange={handleSkinIssueChange}
            />
            Érzékenység
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="vizhiany"
              checked={skinIssue === 'vizhiany'}
              onChange={handleSkinIssueChange}
            />
            Vízhiány
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="pattanasok"
              checked={skinIssue === 'pattanasok'}
              onChange={handleSkinIssueChange}
            />
            Pattanások
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="nincsproblema"
              checked={skinIssue === 'nincsproblema'}
              onChange={handleSkinIssueChange}
            />
            Nincs problémám
          </label>
        </div>
        <br/>
        <button type="button" onClick={onPrevious}>Vissza</button>
        <button type="submit">Tovább</button>
      </form>
    );
  };

export default Step2;