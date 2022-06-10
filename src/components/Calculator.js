import React, { useState } from 'react';
import Calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculation = async (e) => {
    const response = await Calculate(data, e.target.name);
    setData({
      total: response.total,
      next: response.next,
      operation: response.operation,
    });
  };

  const { total, next } = data;
  return (
    <div className="container">
      <div>
        <h2>
          Lets do some math!
        </h2>
      </div>
      <div className="calc">
        <div className="display">
          <h1 className="displayCalc">
            {next || total || 0}
          </h1>
        </div>
        <div className="grid">
          <div className="ac"><button type="button" onClick={handleCalculation} name="AC">AC</button></div>
          <div className="plusMinus"><button type="button" onClick={handleCalculation} name="+/-">+/-</button></div>
          <div className="percent"><button type="button" onClick={handleCalculation} name="%">%</button></div>
          <div className="divide orange"><button type="button" onClick={handleCalculation} name="/">/</button></div>
          <div className="seven"><button type="button" onClick={handleCalculation} name="7">7</button></div>
          <div className="eight"><button type="button" onClick={handleCalculation} name="8">8</button></div>
          <div className="nine"><button type="button" onClick={handleCalculation} name="9">9</button></div>
          <div className="multiply orange"><button type="button" onClick={handleCalculation} name="x">x</button></div>
          <div className="four"><button type="button" onClick={handleCalculation} name="4">4</button></div>
          <div className="five"><button type="button" onClick={handleCalculation} name="5">5</button></div>
          <div className="six"><button type="button" onClick={handleCalculation} name="6">6</button></div>
          <div className="minus orange"><button type="button" onClick={handleCalculation} name="-">-</button></div>
          <div className="one"><button type="button" onClick={handleCalculation} name="1">1</button></div>
          <div className="two"><button type="button" onClick={handleCalculation} name="2">2</button></div>
          <div className="three"><button type="button" onClick={handleCalculation} name="3">3</button></div>
          <div className="plus orange"><button type="button" onClick={handleCalculation} name="+">+</button></div>
          <div className="zero"><button type="button" onClick={handleCalculation} name="0">0</button></div>
          <div className="zero"><button type="button" onClick={handleCalculation} name="0" className="none">0</button></div>
          <div className="dot"><button type="button" onClick={handleCalculation} name=".">.</button></div>
          <div className="equalTo orange"><button type="button" onClick={handleCalculation} name="=">=</button></div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
