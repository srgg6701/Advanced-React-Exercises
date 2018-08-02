import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello, boy!</h2>
        <p>How are you?</p>
        <hr/>
        {<LocalGroup />}
        <hr/>
        {[
          <div>Div here</div>,
          <div>Another Div here</div>,
          <div>And third one here</div>
        ]}
        <hr/>
        {
          {name:'someone'}
        }
      </div>
    );
  }
}

const LocalGroup = () => <div>Here we are!</div>

export default App;
