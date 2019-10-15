import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const addUserInfo = jest.fn();
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <LoginForm addUserInfo={addUserInfo} />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should update quote name with new name onChange input', () => {
    // Setup
    const wrapper = shallow(<LoginForm />);
    const mockEvent = { preventDefault() { }, target: { name: 'name', value: 'A' } };
    const expected = 'A';

    // Execution
    wrapper.instance().handleChange(mockEvent);

    // Expectation
    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should update quote state with new quote onChange input', () => {
    // Setup
    const wrapper = shallow(<LoginForm />);
    const expected = 'May the force be with you.';
    const mockEvent = { preventDefault() { }, target: { name: 'quote', value: expected } };

    // Execution
    wrapper.instance().handleChange(mockEvent);

    // Expectation
    expect(wrapper.state('quote')).toEqual(expected);
  });

  it('should update skillLevel state with new skillLevel onChange select', () => {
    // Setup
    const wrapper = shallow(<LoginForm />);
    const expected = 'Expert';
    const mockEvent = { preventDefault() { }, target: { name: 'skillLevel', value: expected } };

    // Execution
    wrapper.instance().handleChange(mockEvent);

    // Expectation
    expect(wrapper.state('skillLevel')).toEqual(expected);
  });

  it('should call the handleClick prop with the forms information when clicked', () => {
    // Setup
    const wrapper = shallow(<LoginForm />);
    wrapper.instance().handleClick = jest.fn();

    // Execution
    wrapper.find('button').simulate('click');

    // Expectation
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });

  it('should call the onChange method when user types', () => {
    // Setup
    const wrapper = shallow(<LoginForm />);
    const NameEvent = { target: { name: 'name', value: 'A' } };
    const QuoteEvent = { target: { name: 'quote', value: 'B' } };
    const SkillEvent = { target: { name: 'quote', value: 'B' } };
    wrapper.instance().handleChange = jest.fn();

    // Execution
    wrapper.find('[name="name"]').simulate('change', NameEvent);
    wrapper.find('[name="quote"]').simulate('change', QuoteEvent);
    wrapper.find('[name="skillLevel"]').simulate('change', SkillEvent);

    // Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(NameEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(QuoteEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(SkillEvent);
  });

})

