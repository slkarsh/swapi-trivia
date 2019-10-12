import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <MovieCard
        key={3}
        title={'The Phantom Menace'}
        episode={3}
        releaseYear={2099}
        filmId={3}
        getDetails={'A long description goes here..'}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})