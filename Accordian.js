import React, { Component } from 'react';
import './Accordian.css';

export default class Accordian extends Component {
    
    static defaultProps = { sections: [] };
    //required to move harcoded 0 into state:
    constructor(props) {
        super(props)
        //state is an object and i have defined the key/value pair with current section index
        this.state = { activeSectionIndex: null, }
    };
    
    //handle state to update index on click
    handleSetActiveSection = (index) => {
        this.setState({ activeSectionIndex: index })
    }

    renderContent(section, idx, activeSectionIndex) {
        return (
            <li className='Accordian_item' key={idx}>
                <button type='button' onClick={() => this.handleSetActiveSection(idx)}>
                    {section.title}
                </button>
                {(activeSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        )
    }

    render () {
        const { activeSectionIndex } = this.state
        const { sections } = this.props

        return (
                <ul className='Accordian'>
                    {sections.map((section, idx) => 
                        this.renderContent(section, idx, activeSectionIndex)
                    )}
                </ul>
        )
    }
}