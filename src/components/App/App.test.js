import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should update userInfo state when addUserInfo gets invoked', () => {
    // Setup
    const wrapper = shallow(<App />);
    const expected = [{ name: 'Darth Vader', quote: 'I am your father.', skillLevel: 'Expert' }];

    expect(wrapper.state('userInfo')).toEqual([]);

    // Execution
    wrapper.instance().addUserInfo(expected)

    // Expectation
    expect(wrapper.state('userInfo')).toEqual(expected);
  });
})