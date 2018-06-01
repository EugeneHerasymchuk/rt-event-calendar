import React from 'react';
import CalendarHour from './CalendarHour';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CalendarHour', () => {
  it('should render the hour', () => {
    const hour = 9;
    const wrapper = shallow(<CalendarHour hour={hour} />);

    expect(wrapper.text()).toEqual(`${hour}:00 - ${hour + 1}:00`);
  });

  it('should render X if the day is Off', () => {
    const dayOff = true;
    const wrapper = shallow(<CalendarHour hour={9} dayOff={dayOff} />);

    expect(wrapper.text()).toEqual('x');
  });

  it('should render the hour if the hour is busy', () => {
    const isBusy = true;
    const hour = 9;
    const wrapper = shallow(<CalendarHour hour={hour} isBusy={isBusy} />);

    expect(wrapper.text()).toEqual(`${hour}:00 - ${hour + 1}:00`);
  });

  it('should render X if the day is Off and if the hour is busy', () => {
    const isBusy = true;
    const dayOff = true;
    const hour = 9;
    const wrapper = shallow(
      <CalendarHour hour={hour} isBusy={isBusy} dayOff={dayOff} />
    );

    expect(wrapper.text()).toEqual('x');
  });

  it('should trigger the click event', () => {
    const hour = 9;
    const onClick = jest.fn();
    const wrapper = shallow(<CalendarHour hour={hour} onClick={onClick} />);

    wrapper.find('.rt-calendar-hour').simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });

  it("shouldn't trigger the click event if the day is Off", () => {
    const dayOff = true;
    const onClick = jest.fn();
    const wrapper = shallow(
      <CalendarHour hour={9} dayOff={dayOff} onClick={onClick} />
    );

    wrapper.find('.rt-calendar-hour').simulate('click');
    expect(onClick.mock.calls.length).toEqual(0);
  });

  it("shouldn't trigger the click event if the hour is busy", () => {
    const isBusy = true;
    const onClick = jest.fn();
    const wrapper = shallow(
      <CalendarHour hour={9} isBusy={isBusy} onClick={onClick} />
    );

    wrapper.find('.rt-calendar-hour').simulate('click');
    expect(onClick.mock.calls.length).toEqual(0);
  });
});
