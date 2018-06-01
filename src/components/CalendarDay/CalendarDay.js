import React from 'react';
import PropTypes from 'prop-types';
import DayHeader from './DayHeader/DayHeader';
import CalendarHour from '../CalendarHour/CalendarHour';

import './CalendarDay.css';

const CalendarDay = ({
  dayName,
  workingTime,
  busyHours = [],
  isOff = false,
  onClick
}) => {
  const workingHours = [];
  for (let h = workingTime[0]; h < workingTime[1]; h++) {
    workingHours.push(h);
  }

  const hours = workingHours.map(hour => (
    <CalendarHour
      key={hour}
      hour={hour}
      dayOff={isOff}
      isBusy={!!busyHours.length && busyHours.includes(hour)}
      onClick={onClick}
    />
  ));
  return (
    <div className="rt-calendar-day">
      <DayHeader name={dayName} />
      {hours}
    </div>
  );
};

CalendarDay.propTypes = {
  dayName: PropTypes.string.isRequired,
  workingTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  busyHours: PropTypes.arrayOf(PropTypes.number),
  isOff: PropTypes.bool,
  onClick: PropTypes.func
};

export default CalendarDay;
