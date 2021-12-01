import React, {Component} from "react";
import xClose from "../img/times-solid.svg"

const Modal = ({body, close, show, title, selectedEvent}) => {

    return (
        <> {
            show ?
            <div className="modalContainer" onClick={close}>    
                <div className="modal">
                    <header className="modal_header">
                        <h2>{selectedEvent ? selectedEvent.summary : title}</h2>
                        <button className="close" onClick={close}><img src={xClose} alt="close" /></button>
                    </header>
                    <main className="modal_content">
                        {body}
                        <div>{selectedEvent ? selectedEvent.location : null} {selectedEvent.dtstart}</div>
                        <div>{selectedEvent.contexts ? selectedEvent.contexts : null}</div>
                        
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