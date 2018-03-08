import React, { Component } from 'react';

export default class LoginScreen extends Component{

    constructor(props){
        super(props)
            this.verifyLoggin=this.verifyLoggin.bind(this);

    }

    verifyLoggin(){

        let Uname=document.getElementById('Uname').value;
        let Pword=document.getElementById('Pword').value;

        if (Uname=== "Jon" && Pword === "cat") {
            this.props.updateState (true, false)
        }
        else{

            this.props.updateState(false, true)

        }
    }
    render(){

        return(
            <div>   <br/>
                UserName: <input  id={"Uname"}/>
                <br/>
                <br/>
                Password: <input id={"Pword"}/>
                <br/>
                <br/>
                <button onClick={()=> this.verifyLoggin()}>Submit</button>

            </div>

        );
}

}
