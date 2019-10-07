import React from 'react'


class Card extends React.Component {
    render() {
        return(
            <div className="github-user">
            <img src="https://placekitten.com/300/300" alt =" an adorable kitten" />
               {/* <img src={this.props.avatar_url} alt="User image" />
                 <h2>{this.props.name}</h2>
                 <p>{this.props.bio}</p> */}
                {/* <a href="`https://api.github.com/users/${this.props.login}`">Visit me on Github</a> */}
            </div>
        )
    }
}

export default Card;