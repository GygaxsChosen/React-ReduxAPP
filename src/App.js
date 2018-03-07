import React, { Component } from 'react';

import './App.css';

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
let index;
let A;
let B;
let result;

let equation= this.state.Screen.split(/([\+\-\*\/])/g);

while (equation.indexOf("*") > 0){
index = equation.indexOf("*");
 A= equation[index-1];
 B= equation[index+1];
 result = A*B;

equation[index]=result;
equation.splice(index+1,1);
equation.splice(index-1,1);


}
  while (equation.indexOf("/") > 0){
     index = equation.indexOf("/");
     A= equation[index-1];
     B= equation[index+1];
     result = A/B;

    equation[index]=result;
    equation.splice(index+1,1);
    equation.splice(index-1,1);




  }
  while (equation.indexOf("+") > 0){
     index = equation.indexOf("+");
     A= equation[index-1];
     B= equation[index+1];
     result = Number(A)+Number(B);

    equation[index]=result;
    equation.splice(index+1,1);
    equation.splice(index-1,1);




  }
  while (equation.indexOf("-") > 0){
     index = equation.indexOf("-");
     A= equation[index-1];
     B= equation[index+1];
     result = Number(A)-Number(B);

    equation[index]=result;
    equation.splice(index+1,1);
    equation.splice(index-1,1);




  }

  this.setState({Screen: result});

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
          <div>{this.state.Screen}</div>
          <br/>
          <div>
            <button className={"buttons"} onClick={() => {
              this.updateScreen(1)
            }}>1
            </button>
            <button className={"buttons"} onClick={() => this.updateScreen(2)}>2</button>
            <button className={"buttons"} onClick={() => this.updateScreen(3)}>3</button>
            <button className={"buttons"} onClick={() => this.updateScreen("+")}>+</button>

            <br/>
            <button className={"buttons"} onClick={() => this.updateScreen(4)}>4</button>
            <button className={"buttons"} onClick={() => this.updateScreen(5)}>5</button>
            <button className={"buttons"} onClick={() => this.updateScreen(6)}>6</button>
            <button className={"buttons"} onClick={() => this.updateScreen("-")}>-</button>

            <br/>
            <button className={"buttons"} onClick={() => this.updateScreen(7)}>7</button>
            <button className={"buttons"} onClick={() => this.updateScreen(8)}>8</button>
            <button className={"buttons"} onClick={() => this.updateScreen(9)}>9</button>
            <button className={"buttons"} onClick={() => this.updateScreen("/")}>/</button>
            <br/>
            <button className={"buttons"} onClick={() => this.updateScreen(0)}>0</button>

            <button className={"buttons"} onClick={() => this.clearScreen()}>CLEAR</button>
            <button className={"buttons"} onClick={() => this.solve()}>=</button>
            <button className={"buttons"} onClick={() => this.updateScreen("*")}>*</button>

            <br/>
            <br/>


          </div>
        </div>

        }
      </div>
    );
  }
}

export default App;
