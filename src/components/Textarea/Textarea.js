import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

export class Textarea extends React.Component {
    constructor(){
        super();
        this.state = {
            comment: '',
            source: 'unknown'
        };
        // this.makeComments = this.makeComments.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        //console.log('componentWillReceiveProps, this', {prop:this.props, nextProps});
        this.props.goback('Yo');
    }

    /* giveBack(){
        this.giveBack('hello');
    } */

    /* handleSubmit(){
        this.props.saveComment();
    } */

    render(){
        return (
            <textarea value={this.props.value} onChange={this.props.onChange}
                placeholder="Put your stuff here">
            </textarea>
        );
    }
}

export default connect(null, actions)(Textarea);