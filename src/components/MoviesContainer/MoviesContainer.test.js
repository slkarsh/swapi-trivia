import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  const getDetails = jest.fn();
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <MoviesContainer
        films={[]}
        getDetails={getDetails}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})