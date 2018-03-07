import React, { Component } from 'react';
import './index.css'
export default class Button extends Component{
  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){


      this.props.update(this.props.text);




  }
  render(){

    return(

      <button onClick={()=> this.handleClick()} className={"buttons"}>{this.props.text}</button>

    );
  }
}