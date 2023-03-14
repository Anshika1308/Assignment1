import React, { useState } from "react";
import "./calculation.css";

function Calculation() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(0);

    function handleNum1Change(e) {
        setNum1(Number(e.target.value));
    }

    function handleNum2Change(e) {
        setNum2(Number(e.target.value));
    }

    function handleAddition() {
        setResult(num1 + num2);
    }


    function handleSubstract() {
        setResult(num1 - num2);
    }


    function handleMultiply() {
        setResult(num1 * num2);
    }

    function handleDivide() {
        setResult(num1 / num2);
    }


    const handleClear = () => {
        setNum1('');
        setNum2('');
        setResult('');
      };

    return (
        <>

            <div className="container">
                <h1>Calculation</h1>
                <label>
                    Number 1:
                    <input type="number" value={num1} onChange={handleNum1Change} />
                </label>
                <br />
                <label className="input2">
                    Number 2:
                    <input type="number" value={num2} onChange={handleNum2Change} />
                </label>
                <br />

                <div  className="buttons">
                <button className="btn" onClick={handleAddition}>Add</button>

                <button className="btn" onClick={handleSubstract}>Substract</button>

                <button className="btn" onClick={handleMultiply}>Multiply</button>

                <button className="btn" onClick={handleSubstract}>Divide</button>

                <button className="btn" onClick={handleClear}>Clear</button>
                </div>
                <br />
                <p className="result">Result: {result}</p>
            </div>

        </>
    );
}

export default Calculation;
