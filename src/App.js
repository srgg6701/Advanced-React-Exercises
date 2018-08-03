import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello, boy!</h2>
        {/* <p>How are you?</p>
        <hr />
        {[
          <div key="0">Div here</div>,
          <div key="1">Another Div here</div>,
          <div key="2">And third one here</div>
        ]} */}
        <hr />
        {
          (function () {
            const ob = { name: 'Someone here' };
            console.log('this', this);
            return (
              <div>
                <LocalGroup />
                <hr />
                <blockquote>{ob.name}</blockquote>
              </div>
            );
          }).call(this)
        }
      </div>
    );
  }
}

const LocalGroup = () => {
  return <div>Here we are! I mean -- LocalGroup</div>
}

export default App;
