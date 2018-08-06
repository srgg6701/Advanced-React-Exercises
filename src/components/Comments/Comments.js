import React, { Component } from 'react'

export default class Comments extends Component {

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

    render() {
        return (
            <section>
                {this.makeComments()}
            </section>
        )
    }
}