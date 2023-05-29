import { useState } from "react";

const Step2 = ({ onNext, onPrevious, toast }) => {
    const [skinIssue, setSkinIssue] = useState('');
  
    const handleSkinIssueChange = (event) => {
      setSkinIssue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onNext({ skinIssue });
    };
  
    return (
      <form onSubmit={handleSubmit} className="wizard-form">
        {/* <h2>2. Probléma</h2> */}
        <p>Milyen problémára keresel megoldást?</p>
        {toast && <p>Nem választottál!</p>}
        <br/>
        <div className="wizard-form-grid">
        <div className="right">
          <label className="wizard-label">
            <input
              type="radio"
              value="aging"
              checked={skinIssue === 'aging'}
              onChange={handleSkinIssueChange}
            />
            <label >aging</label>
            <div class="selected"></div>
          </label>
        </div>
        <div>
          <label  className="wizard-label">
            <input
              type="radio"
              value="erzekenyseg"
              checked={skinIssue === 'erzekenyseg'}
              onChange={handleSkinIssueChange}
            />
            <label>érzékenység</label>
            <div class="selected"></div>
          </label>
        </div>
        <div>
          <label className="wizard-label">
            <input
              type="radio"
              value="vizhiany"
              checked={skinIssue === 'vizhiany'}
              onChange={handleSkinIssueChange}
            />
            <label>vízhiány</label>
            <div class="selected"></div>
          </label>
        </div>
        <div>
          <label  className="wizard-label">
            <input
              type="radio"
              value="pattanasok"
              checked={skinIssue === 'pattanasok'}
              onChange={handleSkinIssueChange}
            />
            <label>pattanások</label>
            <div class="selected"></div>
          </label>
        </div>
        <div>
          <label className="wizard-label">
            <input
              type="radio"
              value="nincsproblema"
              checked={skinIssue === 'nincsproblema'}
              onChange={handleSkinIssueChange}
            />
            <label>nincs problémám</label>
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

export default Step2;