import { useEffect, useState } from "react";
import productService from "../../../service/productService";
import { Link } from "react-router-dom";
import MainStepper from "./MainStepper";
import Products from "../Product";
import "../../../styles/ProductWizard/result.css"

const ResultPage = (props) => {

  const [products, setProducts] = useState([]);

  function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    productService.read()
      .then(data => {
        const productsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        console.log(productsArray);
        const randomProducts = getRandomItems(productsArray, 3);
        setProducts(randomProducts);
      })
  }, []);

  return (
    <>
      {/* <h2>Eredmény</h2> */}
      
      <p>Köszönjük, hogy igénybe vetted szolgáltatásainkat, kellemes időtöltést nálunk!</p>
      <h3>Ajánlott termékek:</h3>
      <div className="wizard-result-products">
        {products.map((product) => (
          <Products product={product}/>
          // <li key={product.id}>- {product.title}, {product.price} HUF</li>
        ))}
      </div>

      <div className="wizard-result-data">
        <p>Az általad kiválasztott szempontok:</p>
        <ul>
          <li>Bőrtípus: {props.formData.skinType} </li>
          <li>Bőrprobléma: {props.formData.skinIssue}</li>
          <li>Anyagi keret: {props.formData.budget} </li>
        </ul>
      </div>

      <p><button onClick={props.restartTest}>újra kitöltöm a tesztet</button></p>
    </>
  );
};

export default ResultPage;