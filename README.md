## React Event Calendar

A React based event calendar with simple API with the purpose to simplify the booking of hourly events.

[DEMO]()

![image](https://user-images.githubusercontent.com/16426867/40840222-119e2c4c-65a6-11e8-893e-8847ea026b2b.png)


### Installation

```npm i rt-event-calendar```

### API

Name | Type | Default | isRequired | Description
--- | --- | --- | --- |--- 
workingTime | arrayOf(PropTypes.number) | --- | Yes | The array of two numbers for defining the start and end hours
weekDays | PropTypes.object | 'Monday' .... 'Sunday' | No | Object with Names for the days labels in week
weekStart | PropTypes.bool | true | No | Boolean to define the day when week should start. true - Monday, false - Sunday
busyHours | PropTypes.object | {} | No | Object with index of days as keys and arrays of checked hours as values
daysOff | PropTypes.array | [] | No | Array of indexes of days which are off
onClick | PropTypes.func | () => {} | No | Callback handler the hour click event. (clickedDay /*index*/, clickedHour /*value from workingTime array */

#### workingTime [Array] (**required**)
```workingTime: [8, 18]```  The hours will be rendered from (08.00 - 09.00) to the last one as (17.00 - 18.00)

#### weekDays [Object]
```
weekDays: {
      0: 'Mon',
      1: 'Tue',
      2: 'Wed',
      3: 'Thu',
      4: 'Fri',
      5: 'Sat',
      6: 'Sun'
    }
```

#### weekStart [Boolean]

```weekStart: true``` The week will start from the Monday

```weekStart: false``` The week will start from the Sunday

#### busyHours [Object]

```
busyHours: {
      0: [9, 10],
      4: [13, 14]
    }
```
The hours (09.00 - 10.00) and (10.00 - 11.00) will be disabled on the Monday     
The hours (13.00 - 14.00) and (14.00 - 15.00) will be disabled on the Friday

#### daysOff [Array]

```daysOff: [1, 6]``` Tuesday and Sunday will be off

#### onClick [Function] (clickedDayIndex, clickedHour)

```
handleClickEvent = (clickedDayIndex, clickedHour) => {
  alert(`clicked ${clickedHour} in ${this.state.weekDays[clickedDayIndex]}`);
};
```


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
