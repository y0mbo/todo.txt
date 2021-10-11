import React from "react";
import CalendarEvent from "./CalendarEvent";
import css from "styled-components";

const EventList = css.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;



class CalendarEvents extends React.Component {
    render() {
        return (
            <div>
                <h2>Events go here.</h2>
            
                <EventList>
                    {/* loop through state.events' keys and map that */}
                    {Object.keys(this.props.calendarEvents).map((key) => (
                        <CalendarEvent key={key} id={key} details={this.props.calendarEvents[key]} />
                    ))}
                </EventList>
                <h2>Test calendar</h2>
                <div class="day">
                    {/*<!-- divs for the 15-minute increments -->*/}
                    <div class="time t0000"></div>
                    <div class="time t0015"></div>
                    <div class="time t0030"></div>
                    <div class="time t0045"></div>
                    <div class="time t0100"></div>
                    <div class="time t0115"></div>
                    <div class="time t0130"></div>
                    <div class="time t0145"></div>
                    <div class="time t0200"></div>
                    <div class="time t0215"></div>
                    <div class="time t0230"></div>
                    <div class="time t0245"></div>
                    <div class="time t0300"></div>
                    <div class="time t0315"></div>
                    <div class="time t0330"></div>
                    <div class="time t0345"></div>
                    <div class="time t0400"></div>
                    <div class="time t0415"></div>
                    <div class="time t0430"></div>
                    <div class="time t0445"></div>
                    <div class="time t0500"></div>
                    <div class="time t0515"></div>
                    <div class="time t0530"></div>
                    <div class="time t0545"></div>
                    <div class="time t0600"></div>
                    <div class="time t0615"></div>
                    <div class="time t0630"></div>
                    <div class="time t0645"></div>
                    <div class="time t0700"></div>
                    <div class="time t0715"></div>
                    <div class="time t0730"></div>
                    <div class="time t0745"></div>
                    <div class="time t0800"></div>
                    <div class="time t0815"></div>
                    <div class="time t0830"></div>
                    <div class="time t0845"></div>
                    <div class="time t0900"></div>
                    <div class="time t0915"></div>
                    <div class="time t0930"></div>
                    <div class="time t0945"></div>
                    <div class="time t1000"></div>
                    <div class="time t1015"></div>
                    <div class="time t1030"></div>
                    <div class="time t1045"></div>
                    <div class="time t1100"></div>
                    <div class="time t1115"></div>
                    <div class="time t1130"></div>
                    <div class="time t1145"></div>
                    <div class="time t1200"></div>
                    <div class="time t1215"></div>
                    <div class="time t1230"></div>
                    <div class="time t1245"></div>
                    <div class="time t1300"></div>
                    <div class="time t1315"></div>
                    <div class="time t1330"></div>
                    <div class="time t1345"></div>
                    <div class="time t1400"></div>
                    <div class="time t1415"></div>
                    <div class="time t1430"></div>
                    <div class="time t1445"></div>
                    <div class="time t1500"></div>
                    <div class="time t1515"></div>
                    <div class="time t1530"></div>
                    <div class="time t1545"></div>
                    <div class="time t1600"></div>
                    <div class="time t1615"></div>
                    <div class="time t1630"></div>
                    <div class="time t1645"></div>
                    <div class="time t1700"></div>
                    <div class="time t1715"></div>
                    <div class="time t1730"></div>
                    <div class="time t1745"></div>
                    <div class="time t1800"></div>
                    <div class="time t1815"></div>
                    <div class="time t1830"></div>
                    <div class="time t1845"></div>
                    <div class="time t1800"></div>
                    <div class="time t1915"></div>
                    <div class="time t1930"></div>
                    <div class="time t1945"></div>
                    <div class="time t2000"></div>
                    <div class="time t2015"></div>
                    <div class="time t2030"></div>
                    <div class="time t2045"></div>
                    <div class="time t2100"></div>
                    <div class="time t2115"></div>
                    <div class="time t2130"></div>
                    <div class="time t2145"></div>
                    <div class="time t2200"></div>
                    <div class="time t2215"></div>
                    <div class="time t2230"></div>
                    <div class="time t2245"></div>
                    <div class="time t2300"></div>
                    <div class="time t2315"></div>
                    <div class="time t2330"></div>
                    <div class="time t2345"></div>


                </div>
            </div>
        );
    }
}
    
export default CalendarEvents;