import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should update userInfo state when addUserInfo gets invoked', () => {
    // Setup
    const wrapper = shallow(<App />);
    const expected = [{ name: 'Darth Vader', quote: 'I am your father.', skillLevel: 'Expert' }];

    expect(wrapper.state('userInfo')).toEqual([]);

    // Execution
    wrapper.instance().addUserInfo(expected)

    // Expectation
    expect(wrapper.state('userInfo')).toEqual(expected);
  });

  it('should return true when checkFavorites is called with the name of a character in the favorites array', () => {
    const wrapper = shallow(<App />)
    const mockFaves = [
      {name: 'Leia', homeworld: 'here'},
      {name: 'C3PO', homeworld: 'there'}
    ]
    wrapper.instance().setState({ favorites: mockFaves })

    expect(wrapper.instance().checkFavorites({name: 'Leia', homeworld: 'here'})).toEqual(true)
  })
  it('should return false when checkFavorites is called with the name of a character not in the favorites array', () => {
    const wrapper = shallow(<App />)
    const mockFaves = [
      {name: 'Leia', homeworld: 'here'},
      {name: 'C3PO', homeworld: 'there'}
    ]

    wrapper.instance().setState({ favorites: mockFaves})

    expect(wrapper.instance().checkFavorites({ name: 'Darth Vader', homeworld: 'hell'})).toEqual(false)
  })

  it('should reset currentCharacters to an empty array in state when handleMovieChange is called', () => {
    const wrapper = shallow(<App />)
    const mockCharacters = [
      {name: 'Leia', homeworld: 'earth'},
      {name: 'C3PO', homeworld: 'not earth'}
    ]

    wrapper.instance().setState({currentCharacters: mockCharacters})
      
    wrapper.instance().handleMovieChange()

    expect(wrapper.state('currentCharacters')).toEqual([])
  })

  it('should add a new character to favorites in state if that character is not already in favorites', () => {
    const mockCheckFaves = jest.fn();
    const mockFaves = [
      {name: 'Leia', homeworld: 'earth'},
      {name: 'C3PO', homeworld: 'not earth'}
    ]
    const wrapper = shallow(<App />)

    const expected = [
      {name: 'Leia', homeworld: 'earth'},
      {name: 'C3PO', homeworld: 'not earth'},
      {name: 'Darth Vader', homeworld: 'hell'}
    ]

    wrapper.instance().setState({favorites: mockFaves})

    wrapper.instance().handleFavorite({name: 'Darth Vader', homeworld: 'hell'})

    expect(wrapper.state('favorites')).toEqual(expected)
  })

  it('should remove a character from favorites if handleFavorite is called and the character is already in state', () => {
    const mockCheckFaves = jest.fn();
    const mockFaves = [
      {name: 'Leia', homeworld: 'earth'},
      {name: 'C3PO', homeworld: 'not earth'},
      {name: 'Darth Vader', homeworld: 'hell'}
    ]
    const wrapper = shallow(<App />)

    const expected = [
      {name: 'Leia', homeworld: 'earth'},
      {name: 'C3PO', homeworld: 'not earth'}
    ]

    wrapper.instance().setState({favorites: mockFaves})

    wrapper.instance().handleFavorite({name: 'Darth Vader', homeworld: 'hell'})

    expect(wrapper.state('favorites')).toEqual(expected)
  })
})