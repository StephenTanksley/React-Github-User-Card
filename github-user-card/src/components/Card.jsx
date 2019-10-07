import React from 'react'


class Card extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return(
            <div className="github-user" >
                <img className="thumbnail" src={this.props.avatar_url} alt="User image" />
                <img className="thumbnail" src='https://placekitten.com/300/300' alt="User image" />

                <p>{this.props.login}</p>                
            </div>
        )
    }
}

export default Card;