import React from 'react'
import Consumer from '../HOCs/HOC'
import SimpleConsumerConnected from '../Consumer/SimpleConsumerConnected'
export default () => (<React.Fragment>
    <h4>Services here!</h4>
    <Consumer consumerName="Dude" />
    <Consumer consumerLastName="Lebowsky" />
    <h4>SimpleConsumerConnected</h4>
    <SimpleConsumerConnected />
</React.Fragment>)