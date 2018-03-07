import React, { Component } from 'react';

import './App.css';
import CalculatorInterface from "./CalculatorInterface";

class App extends Component {
  constructor(props){
    super(props);
    this.updateScreen=this.updateScreen.bind(this);
    this.solve=this.solve.bind(this);
    this.clearScreen=this.clearScreen.bind(this);
    this.verifyLoggin=this.verifyLoggin.bind(this);

    this.state={
      Screen: "",
      LoggedIn: false,
      loginError: false,

    };

  }

updateScreen(input){
    let currentscreen=this.state.Screen;
    currentscreen=currentscreen+input;
  this.setState({Screen: currentscreen});

}
verifyLoggin(){

  let Uname=document.getElementById('Uname').value;
  let Pword=document.getElementById('Pword').value;

  if (Uname=== "Jon" && Pword === "cat") {
    this.setState({
      LoggedIn: true,
      loginError: false
    });
  }
  else{

    this.setState({loginError: true})

  }
}
clearScreen(){

  this.setState({Screen: ""});

}
solve(){
  // Parse screen into data


}
  render() {
    return (

      <div className="App">
        {this.state.LoggedIn === false&&
          <div>
            UserName: <input  id={"Uname"}/>
            <br/>
            <br/>
           Password: <input id={"Pword"}/>
            <br/>
            <br/>
            <button onClick={()=> this.verifyLoggin()}>Submit</button>

          </div>
        }
        {this.state.loginError &&


          <div>
            <br/>
            <font color={"red"}>INVALID USERNAME OR PASSWORD</font>
          </div>
        }
        {this.state.LoggedIn === true &&
        <div>
<CalculatorInterface/>


        </div>

        }
      </div>
    );
  }
}

export default App;
