import React from "react";
import css from "styled-components";

const EventStyle = css.div`

    font-size: 1rem;
    margin-bottom: 10px;
`;

const Summary = css.div``;

class CalendarEvent extends React.Component {
    render () {
        const {summary, location, description} = this.props.details;

        return (
            <EventStyle>

                {summary && <Summary>{summary}</Summary>}
                {location}
                {description}
            </EventStyle>
        )

    }
}

export default CalendarEvent;