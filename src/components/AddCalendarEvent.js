import React, {Component} from "react";
import {format} from "date-fns";
import xClose from "../img/cross-circle.svg"
import DisplayList from "./DisplayList";
import TimeSelect from "./TimeSelect";

class AddCalendarEvent extends React.Component {


    titleRef = React.createRef();
    starttimeRef = React.createRef();

    createEvent = (event) => {

        event.preventDefault();
        console.log(this.titleRef.current.value);
        const newEvent = {
            id: Date.now(),
            summary: this.titleRef.current.value,
            start: this.starttimeRef.current.value,
            
        }
        this.props.addEvent(newEvent);
        event.currentTarget.reset();
        close = true;
     
    };  

    render() {

        let show = this.props.show;
        let close = this.props.close;
    
        return (
            <React.Fragment> {
                show ?
                <div className="modalContainer">    
                        <div className="modal">
                        <form className="addEventForm" onSubmit={this.createEvent}>
                            <header className="modal_header">
                                <button className="close" onClick={close} title="Close"><img src={xClose} alt="close" /></button>
                                <h2>
                                    Create Event</h2>
                            </header>
                            <main className="modal_content">
                                <div>
                                    <input className="headerInput" name="title" type="text" placeholder="Event title" ref={this.titleRef}></input>
                                </div>
                                <div>
                                    <input name="date" type="date" ref={this.starttimeRef}></input>
                                    &nbsp;
                                    <TimeSelect id="startTime" />
                                    &nbsp; to &nbsp;
                                    <TimeSelect id="endTime"     />

                                </div>
                                    <div><label htmlFor="contexts">@Contexts: </label>
                                    <input id="contexts" name="contexts" type="text" placeholder="@Contexts"></input>
                                </div>
                                <div>
                                    <label htmlFor="projects">+Projects: </label>
                                    <input name="projects" type="text" placeholder="+Projects"></input>
                                </div>
                                {/*
                                <div><label for="description">Description: </label>
                                    <textarea id="description" className="fullWidth" name="description" type="text" placeholder="Description"></textarea>
                                </div>
                                <div>
                                    <label for="location">Location: </label>
                                    <input id="location" name="location" type="text" placeholder="Location"></input>
                                </div>*/}
                            </main>
                            <footer className="modal_footer">
                                <button className="modalSave primary" type="submit">Save</button>
                                <button className="modalClose" onClick={close}>Cancel</button>
                            </footer>    
                        </form>
                        </div>
                </div>
                : null
            }
            </React.Fragment>
        );
    };
}


export default AddCalendarEvent;   




