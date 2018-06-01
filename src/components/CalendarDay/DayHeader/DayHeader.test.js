import React from 'react';
import DayHeader from './DayHeader.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DayHeader', () => {
  it('should render the title of the Day', () => {
    const title = 'myDayName';
    const wrapper = shallow(<DayHeader name={title} />);

    expect(wrapper.text()).toEqual(title);
  });
});
