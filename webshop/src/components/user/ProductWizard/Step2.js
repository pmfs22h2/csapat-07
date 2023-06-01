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
        <p>Milyen problémára keresel megoldást?</p>
        {toast && <p className="warning">{toast}</p>}
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
              value="érzékenység"
              checked={skinIssue === 'érzékenység'}
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
              value="vízhiány"
              checked={skinIssue === 'vízhiány'}
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
              value="pattanások"
              checked={skinIssue === 'pattanások'}
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
              value="nincs probléma"
              checked={skinIssue === 'nincs probléma'}
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