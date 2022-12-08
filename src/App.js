import React from 'react';
import {
  BrowserRouter, NavLink, Link, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
// import Home from './components/Home';
import Quotes from './components/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="navDiv">
            <ul className="navBar">
              <li className="logo">
                <Link to="/">Math Magician</Link>
              </li>
              <li className="right">
                <NavLink to="/quote">Quotes</NavLink>
              </li>
              <li className="border right">
                <NavLink to="/">Calculator</NavLink>
              </li>
              {/* <li className="border right">
                <NavLink to="/">Home</NavLink>
              </li> */}
            </ul>
          </div>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Calculator />} />
            <Route path="/quote" element={<Quotes />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
