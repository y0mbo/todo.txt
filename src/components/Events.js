import React from "react";
import css from "styled-components";

const EventList = css.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

class Events extends React.Component {
render(){
    return(
        <div><h2>Events go here.</h2>
        <EventList>
            {/* loop through state.events' keys and map that */}
            {Object.keys(this.props.events).map((key) => (
                <Event key={key} id={key} details={this.props.events[key]} />
            ))}
        </EventList>
        </div>
    );
}


    
}
    
    
    
    
export default Events;