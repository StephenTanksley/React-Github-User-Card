import React from 'react'


class Card extends React.Component {
    constructor(props) {
        super(props) 
        console.log(props)
    }
    render() {
        return(
            <div className="github-user" >
            {console.log(this.props)}
                <img className="thumbnail" src={this.props.item.avatar_url} alt="User image" />
                <p>{this.props.item.login}</p> 
            </div>
        )
    }
}

export default Card;