import React from 'react';
import CalendarDay from './CalendarDay';
import CalendarHour from '../CalendarHour/CalendarHour';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CalendarDay', () => {
  it('should render exact amount of CalendarHours', () => {
    const workingTime = [9, 10];
    const wrapper = shallow(
      <CalendarDay dayName={'Test'} workingTime={workingTime} />
    );

    expect(wrapper.find(CalendarHour)).toHaveLength(1);
  });

  it("shouldn't render CalendarHours if there is no workingHours", () => {
    const workingTime = [];
    const wrapper = shallow(
      <CalendarDay dayName={'Test'} workingTime={workingTime} />
    );

    expect(wrapper.find(CalendarHour)).toHaveLength(0);
  });
});
