import React from 'react'

export default class Textarea extends React.Component {
    render(){
        return (
            <textarea value={this.props.value} onChange={this.props.onChange}
                placeholder="Put your stuff here">
            </textarea>
        );
    }
}