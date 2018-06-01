import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../CalendarDay/CalendarDay';
import './CalendarWeek.css';

const defaultDays = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday'
};

const CalendarWeek = ({
  workingTime,
  weekDays,
  weekStart = true,
  busyHours = {},
  daysOff = [],
  onClick = () => {}
}) => {
  const weekKeys = [0, 1, 2, 3, 4, 5, 6];

  const userKeys = [weekStart ? weekKeys.shift() : weekKeys.pop(), ...weekKeys];

  const userDays = userKeys.map(key => {
    return (
      <CalendarDay
        key={key}
        workingTime={workingTime}
        dayName={
          {
            ...defaultDays,
            ...weekDays
          }[key]
        }
        busyHours={busyHours[key]}
        isOff={daysOff.includes(key)}
        onClick={clickedHour => onClick(key, clickedHour)}
      />
    );
  });
  return <div className="rt-calendar-week">{userDays}</div>;
};

/*
  workingTime - The array of two numbers for defining the start and end hours
  weekDays (not Required) - Object with Names for the days in week.
  weekStart: (not Required) - Bool of the day when week should start.
  busyHours: (not Required) - Object with index of days as keys and arrays of checked hours as values
  daysOff: (not Required) - Array with days off
 */

CalendarWeek.propTypes = {
  workingTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  weekDays: PropTypes.object,
  weekStart: PropTypes.bool,
  busyHours: PropTypes.object,
  daysOff: PropTypes.array,
  onClick: PropTypes.func
};

export default CalendarWeek;
