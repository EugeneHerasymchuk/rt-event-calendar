import React from 'react';
import PropTypes from 'prop-types';

import './DayHeader.css';

const DayHeader = ({ name }) => {
  return <div className="rt-calendar-day-header">{name}</div>;
};

DayHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default DayHeader;
