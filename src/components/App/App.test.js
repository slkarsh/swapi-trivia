import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('component should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  // it('should update state currentTopic when selectTopic is invoked', () => {
  //   const wrapper = shallow(<App />);
  //   const mockSelectTopic = 'local'
  //   const expected = 'local';

  //   wrapper.instance().selectNews(mockSelectTopic)
  //   expect(wrapper.state('currentTopic')).toEqual(expected);
  // })
})