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
})