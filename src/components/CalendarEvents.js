import React, {useState} from "react";
import CalendarEvent from "./CalendarEvent";

function addDays(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}

class CalendarEvents extends React.Component {

    movePrev = () => {
        this.props.changeDate(addDays(this.props.currentDate, -1));
    };

    moveNext = () => {
        this.props.changeDate(addDays(this.props.currentDate, 1));
    };

    moveToToday = () => {
        this.props.changeDate(new Date);
    };

    createEvent = (startDateTime, duration) => {
        this.props.createEvent(startDateTime);
    };

    addEvent = () => {
        console.log("CalendarEvent newEvent");
        this.props.addEvent();
    };

    render() {

        var currentDateEvents = this.props.calendarEvents;
        var eventList = Object.keys(currentDateEvents).map((key) => currentDateEvents[key]);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = this.props.currentDate.toLocaleDateString("en-US", options); 
        
        return (
            
            <div>
                <h2>
                    <span className="dateNav">
                        <button className="todayNav" onClick={this.moveToToday} title="Go to Today">Today</button>
                        <button className="previousNav" onClick={this.movePrev} title="Previous day">&lt;</button>
                        <button className="nextNav" onClick={this.moveNext} title="Next day">&gt;</button>
                    </span> 
                    <span>{formattedDate}</span>   
                    <span className="temp">
                        <button className="addEvent t1316" onClick={() => {this.createEvent(this.props.currentDate, 30);}}>+</button>
                    </span>
                </h2> 
                <div className="day">
          
                    {/* divs for the hour increments */}
                    <div className="hour h0000"></div>
                    <div className="hour h0100"></div>
                    <div className="hour h0200"></div>
                    <div className="hour h0300"></div>
                    <div className="hour h0400"></div>
                    <div className="hour h0500"></div>
                    <div className="hour h0600"></div>
                    <div className="hour h0700"></div>
                    <div className="hour h0800"></div>
                    <div className="hour h0900"></div>
                    <div className="hour h1000"></div>
                    <div className="hour h1100"></div>
                    <div className="hour h1200"></div>
                    <div className="hour h1300"></div>
                    <div className="hour h1400"></div>
                    <div className="hour h1500"></div>
                    <div className="hour h1600"></div>
                    <div className="hour h1700"></div>
                    <div className="hour h1800"></div>
                    <div className="hour h1900"></div>
                    <div className="hour h2000"></div>
                    <div className="hour h2100"></div>
                    <div className="hour h2200"></div>
                    <div className="hour h2300"></div>

                    {/* divs for the hour titles */}
                    <div className="htitle ht00">12am</div>
                    <div className="htitle ht01">1am</div>
                    <div className="htitle ht02">2am</div>
                    <div className="htitle ht03">3am</div>
                    <div className="htitle ht04">4am</div>
                    <div className="htitle ht05">5am</div>
                    <div className="htitle ht06">6am</div>
                    <div className="htitle ht07">7am</div>
                    <div className="htitle ht08">8am</div>
                    <div className="htitle ht09">9am</div>
                    <div className="htitle ht10">10am</div>
                    <div className="htitle ht11">11am</div>
                    <div className="htitle ht12">12pm</div>
                    <div className="htitle ht13">1pm</div>
                    <div className="htitle ht14">2pm</div>
                    <div className="htitle ht15">3pm</div>
                    <div className="htitle ht16">4pm</div>
                    <div className="htitle ht17">5pm</div>
                    <div className="htitle ht18">6pm</div>
                    <div className="htitle ht19">7pm</div>
                    <div className="htitle ht20">8pm</div>
                    <div className="htitle ht21">9pm</div>
                    <div className="htitle ht22">10pm</div>
                    <div className="htitle ht23">11pm</div>

                    {/*<!-- divs for the 15-minute increments -->*/}
                    <div className="time t0000"></div>
                    <div className="time t0015"></div>
                    <div className="time t0030"></div>
                    <div className="time timelast t0045"></div>
                    <div className="time t0100"></div>
                    <div className="time t0115"></div>
                    <div className="time t0130"></div>
                    <div className="time timelast t0145"></div>
                    <div className="time t0200"></div>
                    <div className="time t0215"></div>
                    <div className="time t0230"></div>
                    <div className="time timelast t0245"></div>
                    <div className="time t0300"></div>
                    <div className="time t0315"></div>
                    <div className="time t0330"></div>
                    <div className="time timelast t0345"></div>
                    <div className="time t0400"></div>
                    <div className="time t0415"></div>
                    <div className="time t0430"></div>
                    <div className="time timelast t0445"></div>
                    <div className="time t0500"></div>
                    <div className="time t0515"></div>
                    <div className="time t0530"></div>
                    <div className="time timelast t0545"></div>
                    <div className="time t0600"></div>
                    <div className="time t0615"></div>
                    <div className="time t0630"></div>
                    <div className="time timelast t0645"></div>
                    <div className="time t0700"></div>
                    <div className="time t0715"></div>
                    <div className="time t0730"></div>
                    <div className="time timelast t0745"></div>
                    <div className="time first t0800"></div>
                    <div className="time t0815"></div>
                    <div className="time t0830"></div>
                    <div className="time timelast t0845"></div>
                    <div className="time t0900"></div>
                    <div className="time t0915"></div>
                    <div className="time t0930"></div>
                    <div className="time timelast t0945"></div>
                    <div className="time t1000"></div>
                    <div className="time t1015"></div>
                    <div className="time t1030"></div>
                    <div className="time timelast t1045"></div>
                    <div className="time t1100"></div>
                    <div className="time t1115"></div>
                    <div className="time t1130"></div>
                    <div className="time timelast t1145"></div>
                    <div className="time t1200"></div>
                    <div className="time t1215"></div>
                    <div className="time first t1230"></div>
                    <div className="time timelast t1245"></div>
                    <div className="time t1300"></div>
                    <div className="time t1315"></div>
                    <div className="time t1330"></div>
                    <div className="time timelast t1345"></div>
                    <div className="time t1400"></div>
                    <div className="time t1415"></div>
                    <div className="time t1430"></div>
                    <div className="time timelast t1445"></div>
                    <div className="time t1500"></div>
                    <div className="time t1515"></div>
                    <div className="time t1530"></div>
                    <div className="time timelast t1545"></div>
                    <div className="time t1600"></div>
                    <div className="time t1615"></div>
                    <div className="time t1630"></div>
                    <div className="time timelast t1645"></div>
                    <div className="time t1700"></div>
                    <div className="time t1715"></div>
                    <div className="time t1730"></div>
                    <div className="time timelast t1745"></div>
                    <div className="time t1800"></div>
                    <div className="time t1815"></div>
                    <div className="time t1830"></div>
                    <div className="time timelast t1845"></div>
                    <div className="time t1900"></div>
                    <div className="time t1915"></div>
                    <div className="time t1930"></div>
                    <div className="time timelast t1945"></div>
                    <div className="time t2000"></div>
                    <div className="time t2015"></div>
                    <div className="time t2030"></div>
                    <div className="time timelast t2045"></div>
                    <div className="time t2100"></div>
                    <div className="time t2115"></div>
                    <div className="time t2130"></div>
                    <div className="time timelast t2145"></div>
                    <div className="time t2200"></div>
                    <div className="time t2215"></div>
                    <div className="time t2230"></div>
                    <div className="time timelast t2245"></div>
                    <div className="time t2300"></div>
                    <div className="time t2315"></div>
                    <div className="time t2330"></div>
                    <div className="time timelast t2345"></div>

                    {eventList.filter(daEvent => (new Date(daEvent.dtstart)).toDateString() == this.props.currentDate.toDateString()).map(filteredEvent => (
                        <CalendarEvent key={filteredEvent.duid} id={filteredEvent.key} selectedEvent={filteredEvent} showModal={this.props.showModal} />
                    ))}
             
                </div>
            </div>
        );
    }
}
    
export default CalendarEvents;