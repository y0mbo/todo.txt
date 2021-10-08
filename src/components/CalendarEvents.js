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
                <div class="calContainer">
                    <div class="item item-8am">8</div>
                    <div class="item item-9am">9</div>
                    <div class="item item-10am">10</div>
                </div>
            </div>
        );
    }
}
    
export default CalendarEvents;