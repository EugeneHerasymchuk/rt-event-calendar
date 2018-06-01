import React from 'react';
import CalendarWeek from './CalendarWeek';
import CalendarDay from '../CalendarDay/CalendarDay';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CalendarWeek', () => {
  it('should render component with min inputs', () => {
    const wrapper = shallow(<CalendarWeek workingTime={[]} />);
    expect(wrapper.find(CalendarDay)).toHaveLength(7);
  });
});
