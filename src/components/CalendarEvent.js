import React from "react";

class CalendarEvent extends React.Component {

    handleClick = () => {
        this.props.showModal(this.props.selectedEvent);
    }

    render () {
        const {duid, summary, location, description, contexts, projects, dtstart, dtend} = this.props.selectedEvent;

        // for now not edited since only one day is shown at a time.
        let startCol = "2";
        let endCol = "3";

        // need to get the date; should be filtered to the dates on the screen.
        // given a time (e.g. 1315)
        // take the hour part (e.g. 13) and multiply it by 4 (e.g. 52) and add 1 (e.g. 53)
        // and that's the grid offset.
        // take the minute part (e.g. 15) and divide it by 15 (e.g. 1) and that's the offset
        // add that to the grid offset already computed (e.g. 54)

        let startDate   = new Date(dtstart);
        let endDate     = new Date(dtend);

        let startHour   = startDate.getHours();   
        let startMinute = startDate.getMinutes();
        let endHour     = endDate.getHours();
        let endMinute   = endDate.getMinutes();

        let eventStart  = ((startHour * 4)) + (startMinute / 15) + 1;
        let eventEnd    = ((endHour * 4)) + (endMinute / 15) + 1;

        let eventGridArea = eventStart + " / " + startCol + "  / " + eventEnd + " / " + endCol;

        let totallyADuid = "duid" & duid;
        let duration = eventEnd - eventStart;
        let contextClasses = contexts.replace(/@/g, ""); 
        let projectClasses = projects.replace(/\+/g, '');
        
        return (
            <div onClick={this.handleClick} className={'event duration' + duration + ' ' + contextClasses + ' ' + projectClasses} id={totallyADuid} style={{gridArea: eventGridArea}}>
                <div className="title">{summary}</div>
                <div className="project">{projects}</div>
                <div className="context">{contexts}</div>   
            </div>
        )
    }
}

export default CalendarEvent;