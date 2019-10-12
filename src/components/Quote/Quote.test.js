import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <Quote
        episode={3}
        title={'Phantom Menace'}
        description={'Long description goes here..'}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})