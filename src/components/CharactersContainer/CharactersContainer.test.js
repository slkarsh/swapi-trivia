import React from 'react';
import { shallow } from 'enzyme';
import CharactersContainer from './CharactersContainer';

describe('CharacterContainer', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(
      <CharactersContainer characters={[
        { name: 'Name1', homeworld: 'NameWorld' }
      ]} />
    )
    expect(wrapper).toMatchSnapshot();
  });
})