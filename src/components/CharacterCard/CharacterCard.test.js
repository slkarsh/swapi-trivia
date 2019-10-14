import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  it('component should match the snapshot', () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();
    const mockHandleFavorite = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        key={3}
        name={'Darth Vader'}
        species={['Human']}
        homeworldName={'Death Star'}
        homeworldPop={'3'}
        relatedFilms={[]}
        handleFavorite={mockHandleFavorite}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})