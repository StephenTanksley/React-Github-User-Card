import React from 'react'
import Card from './Card'

class CardDiv extends React.Component {
    constructor() { //If I want to pass props, I need the constructor.
    super() // If I want to receive props, I need super.

    
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