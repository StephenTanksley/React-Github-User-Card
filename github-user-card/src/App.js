import React from 'react';
import axios from 'axios';
// import UserInput from './components/UserInput'
import CardDiv from './components/CardDiv'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  //It's okay to call the API inside componentDidMount because it is called just one time. 
  componentDidMount() {
    this.fetchUser()
  }


  //if previous state is different to the state we're declaring, then update.
  //Otherwise, don't keep updating. This is equivalent to our dependency array from useEffect.


  //STRETCH PROBLEM ---->
  // componentDidUpdate(prevprops, prevState) {
  //   if(prevState.user !== this.state.user) {
  //     this.setState({
  //       user: ''
  //     })
  //     this.fetchUser()
  //   }
  // }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/StephenTanksley`)
      .then(res => {

        const info = res.data
        this.setState={
          user: res.data
        }
        // const info = res.data
        // this.setState = {
        //   user: {info}
        // }
      console.log(info)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    
    return (
      <div className="App">
        <h1> Github User Cards </h1>

        {/* <UserInput /> */}

        <CardDiv />

      </div>
    );
  }
}
export default App;
