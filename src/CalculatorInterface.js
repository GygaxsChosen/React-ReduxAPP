import React, { Component } from 'react';
import Button from "./Button";
import Menu from  "./Menu";

export default class CalculatorInterface extends Component{
  constructor(props){
    super(props);
    this.updateScreen=this.updateScreen.bind(this);
    this.solve=this.solve.bind(this);
    this.clearScreen=this.clearScreen.bind(this);
    
  this.state=({Screen: ""});



    }
    clearScreen(){
    this.setState({Screen: ""});
    }
  updateScreen(Bravo){
    let temp=this.state.Screen;

    temp= temp.toString()+(Bravo.toString());
    this.setState({Screen: temp},);

  }
  solve(){
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


  render(){

    return(



      <div>{this.state.Screen}



      <br/>
        <br/>
        <Button update={this.updateScreen} text={1}/>
        <Button update={this.updateScreen} text={2}/>
        <Button update={this.updateScreen} text={3}/>
        <Button update={this.updateScreen} text={'+'}/>
        <br/>
        <Button update={this.updateScreen} text={4}/>
        <Button update={this.updateScreen} text={5}/>
        <Button update={this.updateScreen} text={6}/>
        <Button update={this.updateScreen} text={'-'}/>
        <br/>
        <Button update={this.updateScreen} text={7}/>
        <Button update={this.updateScreen} text={8}/>
        <Button update={this.updateScreen} text={9}/>
        <Button update={this.updateScreen} text={'*'}/>
        <br/>
        <Button update= {this.clearScreen} text={'Clear'} type={"opperator"}/>
        <Button update={this.updateScreen} text={0}/>
        <Button update={this.solve} text={'='} type={"opperator"}/>
        <Button update={this.updateScreen} text={'/'}/>
        <br/>
        <br/>
          <Menu/>
      </div>


    );

  }



}