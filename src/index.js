import React from 'react'
import ReactDOM from 'react-dom'
//import App from './app'
class Clock extends React.Component {
    constructor() {
      super();
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
/* class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Application'
        }
    }
    
    showState(){
        console.log('Hello, this is=>', this);
    }

    render() {
        return (
            <div>
                <h4>Me, at last</h4>
                <p>{this.state.name}</p>
                <button onClick={this.showState} >Click me</button>
            </div>
        );
    }
}


ReactDOM.render(
    <App />, document.getElementById('root')
); */