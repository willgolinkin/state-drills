import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        console.log('props in constructor', props);
        super(props)
        this.state= {
            count: 0
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            console.log('setInterval');
            //need to use set state method to alert react that things are changing
            //setState re-triggers render every 1000 milliseconds
            const newCount = this.state.count +1
            this.setState ({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!'
        } else if (count % 2 === 0) {
            //clearInterval(this.interval)
            return 'tick'
        } else {
            return 'tock'
        }
    };

    render() {
        console.log('render');
        return (
            <div>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}