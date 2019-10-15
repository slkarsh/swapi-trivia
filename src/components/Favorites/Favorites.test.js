import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <Favorites favorites={[{ favorite1: 'some name' }]} />
    )
    expect(wrapper).toMatchSnapshot();
  });
})