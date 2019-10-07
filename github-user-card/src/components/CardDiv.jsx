import React from 'react'
import axios from 'axios';
import Container from './styled'


class CardDiv extends React.Component {
    constructor() { //If I want to pass props, I need the constructor.
    super() // If I want to receive props, I need super.
    this.state = {
        data: {},
        user: 'StephenTanksley',
        followers: {}
      }
    }


//When the component mounts on the page, it will run fetchUser to grab data from the API.
    componentDidMount() {
        this.fetchUser()
        this.fetchFollowers()
      }
    
      fetchUser = () => {
        axios.get(`https://api.github.com/users/${this.state.user}`)
          .then(res => {
            this.setState({data: res.data})
            console.log('user data', this.state.data)
          })
          .catch(err => {
            console.log(err)
          })
      }

      fetchFollowers = () => {
        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(res => {
            this.setState({followers: res.data})
            console.log('user\'s followers', this.state.followers)
          })
          .catch(err => {
            console.log(err)
          })
      }

//   STRETCH PROBLEM ---->
  //if previous state is different to the state we're declaring, then update.
  //Otherwise, don't keep updating. This is equivalent to our dependency array from useEffect.

  componentDidUpdate(e, prevState) {
    console.log(prevState.user)
    if(prevState.user !== this.state.user) {
        this.setState({
            user: e.target.value
            })
        this.fetchUser()
        }
    }

//USER INPUT

      //whenever we write a change into the form, state is being updated.

      handleChange = (e) => {
          this.setState({
              [this.state.user]: e.target.value
            })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()        
        this.componentDidUpdate()
    
        // reset the input field so we can add other items
        this.setState({
          value: ""
        })
      }




//RETURN

    render() {
        return(
        <>
        <Container>
            <div className="user-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Input Github username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                    <button className="submit-button" onSubmit={this.handleSubmit}>See User</button>
                </form>
            </div>
            </Container>

            <Container>
            <div className="user-card">
                <img className="user-headshot" src={this.state.data.avatar_url} alt="user's profile image" /> 
                <h1> {this.state.data.name} </h1>
                <p>Username: {this.state.data.login}</p>
                <p> Bio: {this.state.data.bio} </p>
               
            </div>
            </Container>
        </>
        )
    }
}

export default CardDiv;