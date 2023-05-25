import { Link } from "react-router-dom";

const ResultPage = ({ skinType, skinIssue, budget, onRestart }) => {
    return (
      <div>
        <h2>Eredmények</h2>
        <p>Az általad kiválasztott szempontok:</p>
        <ul>
          <li>Bőrtípus: {skinType}</li>
          <li>Bőrprobléma: {skinIssue}</li>
          <li>Anyagi keret: {budget}</li>
        </ul>
        <p>Köszönjük, hogy igénybe vetted szolgáltatásainkat, kellemes időtöltést nálunk!</p>
      </div>
    );
  };

export default ResultPage;