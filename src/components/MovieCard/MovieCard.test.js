import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  const getDetails = jest.fn();
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <MovieCard
        key={3}
        title={'The Phantom Menace'}
        episode={3}
        releaseYear={'2099'}
        filmId={3}
        getDetails={getDetails}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the getDetails prop when clicked', () => {
    const mockGetDetails = jest.fn();
    const wrapper = shallow(<MovieCard
        key={3}
        title={'The Phantom Menace'}
        episode={3}
        releaseYear={'2009'}
        filmId={3}
        getDetails={mockGetDetails}
      />)

    wrapper.find('section').simulate('click')

    expect(mockGetDetails).toHaveBeenCalled();
  })
})