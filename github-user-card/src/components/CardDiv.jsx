import React from 'react'
import Card from './Card'
import axios from 'axios';
// import UserInput from './components/UserInput'



class CardDiv extends React.Component {
    constructor() { //If I want to pass props, I need the constructor.
    super() // If I want to receive props, I need super.
    this.state = {
        data: {},
        user: 'StephenTanksley'
      }
    }



  //if previous state is different to the state we're declaring, then update.
  //Otherwise, don't keep updating. This is equivalent to our dependency array from useEffect.





  //I want data to be the object I get back from the API.name
  //I want user to be the name someone plugs in to the UserInput component to start an API call.


    componentDidMount() {
        this.fetchUser()
      }
    
      fetchUser = () => {
        axios.get(`https://api.github.com/users/${this.state.user}`)
          .then(res => {
            this.setState({data: res.data})
            console.log(this.state.data)
          })
          .catch(err => {
            console.log(err)
          })
      }


//USER INPUT

      //whenever we write a change into the form, state is being updated.

      handleChange = (e) => {
        this.setState({
          value: e.target.value
        })
      }

      addUser = (value) => {
          this.setState({
              user: value
          })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
    
        // call the setter function with the new value.
        // function is given to us through props in the parent component.
        this.state.addUser(e, this.state.value)
    
        // reset the input field so we can add other items
        this.setState({
          value: ""
        })
      }


//   STRETCH PROBLEM ---->

  componentDidUpdate(prevprops, prevState) {
    if(prevState.user !== this.state.user) {
      this.setState({
        user: ''
      })
      this.fetchUser()
    }
  }

//RETURN

    render() {
        return(
        <>
            <div className="user-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Github Username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                    <button className="submit-button">Add</button>
                </form>

            </div>

            <div className="user-card">
                <img src={this.state.data.avatar_url} alt="user's profile image" /> 
                <h1> {this.state.data.name} </h1>
                <p>{this.state.data.login}</p>
                <p> {this.state.data.bio} </p>
               
            </div>

        </>
        )
    }
}

export default CardDiv;