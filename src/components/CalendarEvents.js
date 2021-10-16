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
        var date = Date.now();
        return (
            <div>
                

                <h2>Monday 11 Oct 2022 {date}</h2>
                <div class="day">

                    {/*<!-- divs for the 15-minute increments -->*/}
                    <div class="time t0000"></div>
                    <div class="time t0015"></div>
                    <div class="time t0030"></div>
                    <div class="time timelast t0045"></div>
                    <div class="time t0100"></div>
                    <div class="time t0115"></div>
                    <div class="time t0130"></div>
                    <div class="time timelast t0145"></div>
                    <div class="time t0200"></div>
                    <div class="time t0215"></div>
                    <div class="time t0230"></div>
                    <div class="time timelast t0245"></div>
                    <div class="time t0300"></div>
                    <div class="time t0315"></div>
                    <div class="time t0330"></div>
                    <div class="time timelast t0345"></div>
                    <div class="time t0400"></div>
                    <div class="time t0415"></div>
                    <div class="time t0430"></div>
                    <div class="time timelast t0445"></div>
                    <div class="time t0500"></div>
                    <div class="time t0515"></div>
                    <div class="time t0530"></div>
                    <div class="time timelast t0545"></div>
                    <div class="time t0600"></div>
                    <div class="time t0615"></div>
                    <div class="time t0630"></div>
                    <div class="time timelast t0645"></div>
                    <div class="time t0700"></div>
                    <div class="time t0715"></div>
                    <div class="time t0730"></div>
                    <div class="time timelast t0745"></div>
                    <div class="time work first t0800"><div class="contextWork">@work</div></div>
                    <div class="time work t0815"></div>
                    <div class="time work t0830"></div>
                    <div class="time work timelast t0845"></div>
                    <div class="time work t0900"><div class="contextWork">@work</div></div>
                    <div class="time work t0915"></div>
                    <div class="time work t0930"></div>
                    <div class="time work timelast t0945"></div>
                    <div class="time work t1000"></div>
                    <div class="time work t1015"></div>
                    <div class="time work t1030"></div>
                    <div class="time work timelast t1045"></div>
                    <div class="time work t1100"></div>
                    <div class="time work t1115"></div>
                    <div class="time work t1130"></div>
                    <div class="time work timelast t1145"></div>
                    <div class="time t1200"></div>
                    <div class="time t1215"></div>
                    <div class="time work first t1230"><div class="contextWork">@work</div></div>
                    <div class="time work timelast t1245"></div>
                    <div class="time work t1300"></div>
                    <div class="time work t1315"></div>
                    <div class="time work t1330"></div>
                    <div class="time work timelast t1345"></div>
                    <div class="time work t1400"></div>
                    <div class="time work t1415"></div>
                    <div class="time work t1430"></div>
                    <div class="time work timelast t1445"></div>
                    <div class="time work t1500"></div>
                    <div class="time work t1515"></div>
                    <div class="time work t1530"></div>
                    <div class="time work timelast t1545"></div>
                    <div class="time work t1600"></div>
                    <div class="time work t1615"></div>
                    <div class="time work t1630"></div>
                    <div class="time work timelast t1645"></div>
                    <div class="time work t1700"></div>
                    <div class="time work t1715"></div>
                    <div class="time work t1730"></div>
                    <div class="time timelast t1745"></div>
                    <div class="time t1800"></div>
                    <div class="time t1815"></div>
                    <div class="time t1830"></div>
                    <div class="time timelast t1845"></div>
                    <div class="time t1900"></div>
                    <div class="time t1915"></div>
                    <div class="time t1930"></div>
                    <div class="time timelast t1945"></div>
                    <div class="time t2000"></div>
                    <div class="time t2015"></div>
                    <div class="time t2030"></div>
                    <div class="time timelast t2045"></div>
                    <div class="time t2100"></div>
                    <div class="time t2115"></div>
                    <div class="time t2130"></div>
                    <div class="time timelast t2145"></div>
                    <div class="time t2200"></div>
                    <div class="time t2215"></div>
                    <div class="time t2230"></div>
                    <div class="time timelast t2245"></div>
                    <div class="time t2300"></div>
                    <div class="time t2315"></div>
                    <div class="time t2330"></div>
                    <div class="time timelast t2345"></div>

                    {/* divs for the hour increments */}
                    <div class="hour h0000"></div>
                    <div class="hour h0100"></div>
                    <div class="hour h0200"></div>
                    <div class="hour h0300"></div>
                    <div class="hour h0400"></div>
                    <div class="hour h0500"></div>
                    <div class="hour h0600"></div>
                    <div class="hour h0700"></div>
                    <div class="hour h0800"></div>
                    <div class="hour h0900"></div>
                    <div class="hour h1000"></div>
                    <div class="hour h1100"></div>
                    <div class="hour h1200"></div>
                    <div class="hour h1300"></div>
                    <div class="hour h1400"></div>
                    <div class="hour h1500"></div>
                    <div class="hour h1600"></div>
                    <div class="hour h1700"></div>
                    <div class="hour h1800"></div>
                    <div class="hour h1900"></div>
                    <div class="hour h2000"></div>
                    <div class="hour h2100"></div>
                    <div class="hour h2200"></div>
                    <div class="hour h2300"></div>

                    {/* divs for the hour titles */}
                    <div class="htitle ht00">12am</div>
                    <div class="htitle ht01">1am</div>
                    <div class="htitle ht02">2am</div>
                    <div class="htitle ht03">3am</div>
                    <div class="htitle ht04">4am</div>
                    <div class="htitle ht05">5am</div>
                    <div class="htitle ht06">6am</div>
                    <div class="htitle ht07">7am</div>
                    <div class="htitle ht08">8am</div>
                    <div class="htitle ht09">9am</div>
                    <div class="htitle ht10">10am</div>
                    <div class="htitle ht11">11am</div>
                    <div class="htitle ht12">12pm</div>
                    <div class="htitle ht13">1pm</div>
                    <div class="htitle ht14">2pm</div>
                    <div class="htitle ht15">3pm</div>
                    <div class="htitle ht16">4pm</div>
                    <div class="htitle ht17">5pm</div>
                    <div class="htitle ht18">6pm</div>
                    <div class="htitle ht19">7pm</div>
                    <div class="htitle ht20">8pm</div>
                    <div class="htitle ht21">9pm</div>
                    <div class="htitle ht22">10pm</div>
                    <div class="htitle ht23">11pm</div>
                    
                    <div class="event d14" id="e19152245">
                        <div class="title">This is an event</div>
                        <div class="location">Mom's house</div>
                        <div class="context">@home</div>
                    </div>

                    <div class="event d5" id="e15151630">
                        <div class="title">Pesky work meeting</div>
                        <div class="location">Conference room C</div>    
                        <div class="context">@work</div>
                    </div>
                    
                <EventList>
                    {/* loop through state.events' keys and map that */}
                    {Object.keys(this.props.calendarEvents).map((key) => (
                        <CalendarEvent key={key} id={key} details={this.props.calendarEvents[key]} />
                    ))}
                </EventList>
                </div>
            </div>
        );
    }
}
    
export default CalendarEvents;