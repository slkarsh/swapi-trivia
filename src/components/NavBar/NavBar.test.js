import React from 'react';
import { shallow, mount } from 'enzyme';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom'

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    const mockHandleMovieChange = jest.fn()
    wrapper = shallow(<NavBar 
      name={'Darth Vader'}
      quote={'I am your father.'}
      skill={'Expert'}
      favorites={0}
      handleMovieChange={mockHandleMovieChange}
    />)
  })
  it('component should match the snapshot', () => {
   
    expect(wrapper).toMatchSnapshot();
  });

  //attempted test but this is a Router issue
  // it('should call handleMovieChange when the movies link is clicked', () => {
  //   const mockHandleMovieChange = jest.fn()
  //   const wrapper = mount(<NavBar
  //     name={'Darth Vader'}
  //     quote={'I am your father.'}
  //     skill={'Expert'}
  //     favorites={0}
  //     handleMovieChange={mockHandleMovieChange} 
  //     />)

  //   wrapper.find(NavLink).first().simulate('click')

  //   expect(wrapper.props.handleMovieChange).toHaveBeenCalled();
  // })


})