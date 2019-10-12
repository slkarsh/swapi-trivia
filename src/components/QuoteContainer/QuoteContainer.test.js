import React from 'react';
import { shallow } from 'enzyme';
import QuoteContainer from './QuoteContainer';

describe('QuoteContainer', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <QuoteContainer movie={{ object: 'info' }} />
    )
    expect(wrapper).toMatchSnapshot();
  });
})