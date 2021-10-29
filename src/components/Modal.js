import React, {Component} from "react";
import xClose from "../img/times-solid.svg"

const Modal = ({body, close, show, title}) => {

    return (
        <> {
            show ?
            <div className="modalContainer" onClick={close}>    
                <div className="modal">
                    <header className="modal_header">
                        <h2>{title}</h2>
                        <button className="close" onClick={close}><img src={xClose} alt="close" /></button>
                    </header>   
                    <main className="modal_content">
                        {body}
                    </main>
                    <footer className="modal_footer">
                        <button className="modalClose" onClick={close}>Cancel</button>
                    </footer>    
                </div>
            </div>
            : null
        }
        </>
    );
};

export default Modal;   