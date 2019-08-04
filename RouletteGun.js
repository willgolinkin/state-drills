import React, { Component } from 'react';

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    
    constructor(props) {
        console.log('props in constructor', props);
        super(props)
        this.state= {
            chamber: null,
            spinningChamber: false,
        };
    }

    /*state = {
        chamber: null,
        spinningTheChamber: false,
    }*/

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState ({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8 )

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000) 
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if ( spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        } else if (chamber === bulletInChamber) {
            //clearInterval(this.interval)
            return 'BANG!!!'
        } else {
            return 'you\'re safe!'
        }
    };


    //we will pass prop onClick event listener to add 1 every time clicked; could also do onSubmit, onHover, etc.
    //second fix w/out bind is arrow function in event handler method (erased)
    render() {
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}