import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <NavBar
        name={'Darth Vader'}
        quote={'I am your father.'}
        skill={'Expert'}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})