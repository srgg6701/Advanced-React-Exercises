import React from 'react'
import Buttons from './Buttons'
import store from '../store'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        console.log(store);
        this.state = {
            count: 0
        }

        //this.count = this.count.bind(this);
        console.log('store => ', store);
        /* store.subscribe(() => {
            this.state.count = store.getState();
        }); */
    }

    /* count(action) {
        
        if (action === 'INCREMENT') {
            
        } else if (action === 'DECREMENT') {
            this.state.count--;
        }  
    }*/

    render() {

        return (
            <React.Fragment>
                <div>Hello again!</div>
                <hr />
                Look here: {this.state.count}
                <hr />
                <Buttons />
            </React.Fragment>
        )
    }
}