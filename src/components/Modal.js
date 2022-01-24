import React, {Component} from "react";
import {format} from "date-fns";
import xClose from "../img/cross-circle.svg"
import xeditImage from "../img/pencil.svg"
import deleteImage from "../img/trash.svg"
import markDoneImage from "../img/checkbox.svg"
import copyNextImage from "../img/copy.svg"
import copyTomorrowImage from "../img/arrow-right.svg"

const Modal = ({body, close, show, title, selectedEvent}) => {

    return (
        <> {
            show ?
            <div className="modalContainer">    
                <div className="modal">
                    <header className="modal_header">
                        <button className="edit" onClick={close} title="Edit"><img src={xeditImage} alt="edit" /></button>
                        <button className="delete" title="Delete"><img src={deleteImage} alt="delete" /></button>
                        <button className="markDone" title="Mark Completed"><img src={markDoneImage} alt="mark done" /></button>
                        <button className="copyNext" title="Copy to Next"><img src={copyNextImage} alt="copy next" /></button>
                        <button className="copyTomorrow" title="Copy to Tomorrow"><img src={copyTomorrowImage} alt="copy tomorrow" /></button>
                        <button className="close" onClick={close} title="Close"><img src={xClose} alt="close" /></button>
                        <h2>{selectedEvent ? selectedEvent.summary : title}</h2>
                    </header>
                    <main className="modal_content">
                        {body}
                        <div>{selectedEvent ? format(new Date(selectedEvent.dtstart), "MMM d, yyyy") : null} </div>
                        <div>{selectedEvent ? format(new Date(selectedEvent.dtstart), "h:mm bbb") : null} - {format(new Date(selectedEvent.dtend), "h:mm bbb")}</div>
                        <div>Projects: {selectedEvent.projects ? selectedEvent.projects : null}</div>
                        <div>Contexts: {selectedEvent.contexts ? selectedEvent.contexts : null}</div>
                    </main>
                    <footer className="modal_footer">
                        {/*<button className="modalClose" onClick={close}>Cancel</button>*/}
                    </footer>    
                </div>
            </div>
            : null
        }
        </>
    );
};

export default Modal;   