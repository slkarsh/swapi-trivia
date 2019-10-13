import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <CharacterCard
        key={3}
        name={'Darth Vader'}
        species={['Human']}
        homeworldName={'Death Star'}
        homeworldPop={'3'}
        relatedFilms={[]}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });
})