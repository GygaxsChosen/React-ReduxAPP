import React, { Component } from 'react';
import Flyout from '../../React-ReduxAPP/node_modules/react-micro-flyout';

export default class Menu extends Component{
    constructor(props){
        super(props);


        this.state=({});



    }
    render(){

        return(
            <div style={{ position: 'relative' }}>
                <button onClick={() => this.setState({ open: true })}>Menu</button>

                <Flyout
                    style={{ width: "100px", border: '1px solid gray', position: 'absolute', top: '20px' }}
                    open={this.state.open}
                    onRequestClose={() => this.setState({ open: false })}>
                    <p>
                        <a href="https://www.google.com/">Google</a>
                        <br/>
                        <br/>
                        <a href="https://github.com/GygaxsChosen/React-ReduxAPP" > github for this project</a>
                    </p>
                </Flyout>
            </div>

        )
    }
}