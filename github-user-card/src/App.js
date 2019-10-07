import React from 'react';
import CardDiv from './components/CardDiv'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

//App doesn't need to house state at all. App is just a place for putting the components that actually will
//utilize state. In this case, we can declare fetchUser, componentDidMount and such inside CardDiv.
//This eliminates the need to try to pass along that information through props.


  render() {
    
    return (
      
      <div className="App">

        <CardDiv />

      </div>
    );
  }
}
export default App;
