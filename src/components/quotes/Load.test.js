import React from 'react';
import { shallow } from 'enzyme';
import Load from './Load';

describe('Load component', () => {
  it('renders Load', () => {
    const wrapper = shallow(<Load handleOnClick={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
