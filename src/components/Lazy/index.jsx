import React, { Suspense } from 'react'

const BigStory = React.lazy(() => import('../BigStory'));

export default class Lazy extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    
    getCounted = () => {
        console.log('Yo! They have counted you as well...');
    }

    getLazyContents = () => {
        this.setState({
            story: !this.state.story
        });
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={
                    this.getLazyContents}>{this.state.story ? "Got LAZY!" : "Get lazy..."
                    }</button>
                {
                    this.state.story &&
                    <Suspense fallback={<div>Loading...</div>}>
                        <BigStory countMe={this.getCounted} />
                    </Suspense>
                }
            </React.Fragment>
        )
    }
}