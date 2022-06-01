import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calc">
          <div className="display">
            <h1 className="displayCalc">0</h1>
          </div>
          <div className="grid">
            <div className="ac">AC</div>
            <div className="plusMinus">+/-</div>
            <div className="percent">%</div>
            <div className="divide">/</div>
            <div className="seven">7</div>
            <div className="eight">8</div>
            <div className="nine">9</div>
            <div className="multiply">x</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
            <div className="minus">-</div>
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="plus">+</div>
            <div className="zero">0</div>
            <div className="zero" />
            <div className="dot">.</div>
            <div className="equalTo">=</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
