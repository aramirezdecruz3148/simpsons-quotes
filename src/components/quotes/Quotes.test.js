import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders Quotes', () => {
    const wrapper = shallow(<Quotes quotes={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
