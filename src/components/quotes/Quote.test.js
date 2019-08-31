import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders Quote', () => {
    const wrapper = shallow(<Quote characterName={'name'} characterImage={'url'} quote={'wit'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
