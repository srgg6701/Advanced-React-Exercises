import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {

    renderComments(){
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        });
    }

    render() {
        console.log('Comments props', this.props);
        return (
            <section>
                <ul>
                    { this.renderComments() }
                </ul>
            </section>
        )
    }
}
/**
 * Assign references to redux store to this.props
 * @param {Object} state 
 */
function mapStateToProp(state){
    // this means: Comments.comments = redux state.comments
    return { comments: state.comments }
}

export default connect(mapStateToProp)(Comments);