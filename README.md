##React Event Calendar
A React based event calendar with simple API with the purpose to simplify the booking of hourly events.

DEMO

##Getting started

###Installation
```npm i rt-event-calendar```

### Usage
```ecmascript 6
import Calendar from 'rt-event-calendar';
....
 <CalendarWeek
    workingTime={this.state.workingTime}
    weekDays={this.state.weekDays}
    weekStart={this.state.weekStart}
    busyHours={this.state.busyHours}
    daysOff={this.state.daysOff}
    onClick={this.handleClickEvent}
 />
```

###API

Name | Type | Default | isRequired | Description
--- | --- | --- | --- |--- 
workingTime | arrayOf(number) | --- | Yes | The array of two numbers for defining the start and end hours
weekDays | PropTypes.object | 'Monday' .... 'Sunday' | No | Object with Names for the days in week
weekStart | PropTypes.bool | true | No | Boolean to define the day when week should start. true - Monday, false - Sunday
busyHours | PropTypes.object | {} | No | Object with index of days as keys and arrays of checked hours as values
daysOff | PropTypes.array | [] | No | Array with days off
onClick | PropTypes.func | () => {} | No | Callback handler the hour click event. (clickedDay /*index*/, clickedHour /*value from workingTime array */

