import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {

  it('component should match the snapshot', () => {
    const checkFavorites = jest.fn();
    const handleFavorite = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        key={3}
        name={'Darth Vader'}
        species={['Human']}
        homeworldName={'Death Star'}
        homeworldPop={'3'}
        relatedFilms={[]}
        handleFavorite={handleFavorite}
        checkFavorites={checkFavorites}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the handleFavorite prop when the favorite button is clicked', () => {
    const handleFavorite = jest.fn();
    const checkFavorites = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        key={3}
        name={'Darth Vader'}
        species={['Human']}
        homeworldName={'Death Star'}
        homeworldPop={'3'}
        relatedFilms={[]}
        handleFavorite={handleFavorite}
        checkFavorites={checkFavorites}
      />
    )

    wrapper.find('button').simulate('click')

    expect(handleFavorite).toHaveBeenCalled();
    expect(checkFavorites).toHaveBeenCalled();
  })
})