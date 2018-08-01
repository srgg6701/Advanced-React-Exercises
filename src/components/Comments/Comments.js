import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

export default class Comments extends Component {

    constructor(props){
        super(props);
        this.makeComments = this.makeComments.bind(this);
    }

    makeComments(comments = {
        '20.07.2018' : 'First comment came',
        '22.07.2018' : 'Second comment came',
        '29.07.2018' : 'Something strange came',
        '30.07.2018' : 'I did not write this bullshit!',
    }) {
        let html = [];
        Object.entries(comments).forEach(arr => {
            html.push(<div key={arr[0]}>{arr[0]} : {arr[1]}</div>);
        });
        return html;
    }

    /* componentWillReceiveProps(nextProps){
        console.log(nextProps);
    } */

    render() {
        return (
            <section>
                {this.makeComments()}
                <hr/>
                {this.props.newComment}
            </section>
        )
    }
}

// export default connect(null, actions)(Comments);