import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app'
/* class Clock extends React.Component {
    constructor() {
        super();
        this.state = { 
            date: new Date(),
            myname: 'Bob'
        };
        this.giveItToMe = this.giveItToMe.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    sayIt(){
        console.log('WTF? this=>', this);
    }

    sayItAgain = () => {
        this.setState({
            myname: 'Wolf'
        })
        console.log('LOL, this=>', {this:this, state: this.state});
    }

    giveItToMe(){
        console.log('%cthis=>', 'background: violet', this);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.sayIt}>Say it!</button> 
                + <span>state: {this.state.myname}</span> + 
                <button onClick={this.sayItAgain}>sayItAgain!</button>
                <hr/>
                <button onClick={this.giveItToMe}>giveItToMe!</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
); */

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Application'
        };
        this.showState = this.showState.bind(this);
    }
    
    showState(){
        this.setState({
            name: 'Nastty'
        });
        console.log('Hello, this name is=>', this.state.name);
    }

    render() {
        return (
            <div>
                <h4>Me, at last</h4>
                <p>{this.state.name}</p>
                <button onClick={this.showState}>Click me</button>
                <hr/>
                See state: {this.state.name}
            </div>
        );
    }
}


ReactDOM.render(
    <App />, document.getElementById('root')
);