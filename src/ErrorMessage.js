import React, { Component } from 'react';

export default class ErrorMessage extends Component{


    render(){
        return(
            <div> <br/>
                <font color={"red"}>INVALID USERNAME OR PASSWORD</font>
            </div>
        );
    }
}