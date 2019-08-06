import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

const sectionsProp = [
    { title: 'First title',
        content: 'First Content'},
    { title: 'Second title',
        content: 'Second Content'},
    { title: 'Third title',
        content: 'Third Content'},
]

describe(`Accordion Component`, () => {
    it('renders empty given no Accordian without errors', () => {
      const wrapper = shallow(<Accordian />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    //The component renders no sections as active by default
    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordian  sections={sectionsProp} />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    it('opens any clicked section', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})