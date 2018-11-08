import React from 'react'
import Consumer from '../Consumer/'
import Consumer2 from '../Consumer/'
import SimpleConsumerConnected from '../Consumer/SimpleConsumerConnected'
export default () => (<React.Fragment>
    <h4>Services here!</h4>
    <Consumer consumerName="Dude" />
    <Consumer2 consumerLastName="Lebowsky" />
    <h4>SimpleConsumerConnected</h4>
    <SimpleConsumerConnected />
</React.Fragment>)