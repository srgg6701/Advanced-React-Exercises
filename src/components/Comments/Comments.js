import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {

    renderComments(){
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        });
    }

    render() {
        return (
            <section>
                <ul>
                    { this.renderComments() }
                </ul>
            </section>
        )
    }
}

function mapStateToProp(state){
    return { comments: state.comments }
}

export default connect(mapStateToProp)(Comments);