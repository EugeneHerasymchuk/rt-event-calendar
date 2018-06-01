import React from 'react';
import PropTypes from 'prop-types';

import './CalendarHour.css';

const CalendarHour = ({ hour, isBusy = false, dayOff = false, onClick }) => {
  const classes = [
    'rt-calendar-hour',
    dayOff ? 'rt-day-off' : isBusy ? 'rt-busy-hour' : 'rt-working-hour'
  ];
  return (
    <div
      onClick={() => {
        if (!dayOff && !isBusy) {
          onClick(hour);
        }
      }}
      className={classes.join(' ')}
    >
      {dayOff ? 'x' : `${hour}:00 - ${hour + 1}:00`}
    </div>
  );
};

CalendarHour.propTypes = {
  hour: PropTypes.number.isRequired,
  isBusy: PropTypes.bool,
  dayOff: PropTypes.bool,
  onClick: PropTypes.func
};

export default CalendarHour;
