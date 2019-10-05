import React from 'react'
import Card from './Card'

class CardDiv extends React.Component {
    constructor() {
    super()
    // console.log('CardDiv', this.props)
    
    }
    render(props) {
        return(
            <>
                <h1> Hello. I'm a CardDiv </h1>
                <h2> {this.props.name} </h2>
                <Card />
            </>
        )
    }
}

export default CardDiv;