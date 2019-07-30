import React, { Component } from 'react';

export default class HelloWorld extends Component {
    constructor(props) {
        //will show state plus props
         console.log('props in constructor', props);
         super(props)
         this.state= {
             who: 'world'
         };
         //one method of fixing the known issue: this.handleButtonClick = this.handleButtonClick.bind(this)
     } 

    render() {
      return (
        <div className = "HelloWorld">
            <p>Hello, {this.state.who}</p>
            <button onClick={() => 
                    this.setState({ who: 'world' })}>
                    World
            </button>

            <button onClick={() => 
                    this.setState({ who: 'React' })}>
                    React
            </button>

            <button onClick={() => 
                this.setState({ who: 'friend!'})}>
                    Friend
            </button>
        </div>
      );
    }
  }
