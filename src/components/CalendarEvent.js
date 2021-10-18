import React from "react";
import css from "styled-components";

class CalendarEvent extends React.Component {
    render () {
        const {duid, summary, location, description, contexts, projects, dtstart, dtend} = this.props.details;

        // for now not edited since only one day is shown at a time.
        var startCol = "2";
        var endCol = "3";

        // need to get the date; should be filtered to the dates on the screen.
        // given a time (e.g. 1315)
        // take the hour part (e.g. 13) and multiply it by 4 (e.g. 52) and add 1 (e.g. 53)
        // and that's the grid offset.
        // take the minute part (e.g. 15) and divide it by 15 (e.g. 1) and that's the offset
        // add that to the grid offset already computed

        var startDate   = new Date(dtstart);
        var endDate     = new Date(dtend);

        var startHour   = startDate.getHours();   
        var startMinute = startDate.getMinutes();
        var endHour     = endDate.getHours();
        var endMinute   = endDate.getMinutes();

        var eventStart  = ((startHour * 4)) + (startMinute / 15) + 1;
        var eventEnd    = ((endHour * 4)) + (endMinute / 15) + 1;

        var eventGridArea = eventStart + " / " + startCol + "  / " + eventEnd + " / " + endCol;

        var totallyADuid = "duid" & duid;
        var duration = eventEnd - eventStart;
        var contextClasses = contexts; // todo: remove "@"s from the string of contexts
        var projectClasses = projects; // todo: remove "@"s from the string of projects

        return (
            <div className={'event duration' + duration + ' ' + contextClasses + ' ' + projectClasses} id={totallyADuid} style={{gridArea: eventGridArea}}>
                <div className="title">{summary}</div>
                <div className="location">{location}</div>
                <div className="context">{contexts}</div>           
            </div>
        )

    }
}

export default CalendarEvent;