import React, { Component } from 'react';

import './App.css';
import CalculatorInterface from "./CalculatorInterface";
import LoginScreen from "./LoginScreen";
import ErrorMessage from "./ErrorMessage"

class App extends Component {
  constructor(props){
    super(props);
    this.updateState=this.updateState.bind(this);

    this.state={
      Screen: "",
      LoggedIn: false,
      loginError: false,

    };

  }
  updateState(a,b){
      this.setState({
          LoggedIn: a,
          loginError: b,

      })
  }
  render() {
    return (

      <div className="App">
        {this.state.LoggedIn === false&&
          <div>
              <LoginScreen updateState={this.updateState}/>
          </div>
        }

    {this.state.loginError &&
        <ErrorMessage/>
    }

    {this.state.LoggedIn === true &&
    <CalculatorInterface/>
    }
      </div>
    );
  }
}

export default App;
