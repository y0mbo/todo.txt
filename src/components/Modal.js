import React from "react";

const Modal = ({show, close}) => {
    return (
        <> {
            show ?
            <div className="modalContainer" onClick={close}>
                <div className="modal">
                    <header>
                        <h2>Modal Title</h2>
                        <button className="close" onClick={close}><img alt="close" /></button>
                    </header>   
                    <main>
                        Main
                    </main>
                    <footer>
                        Footer
                    </footer>    
                </div>
                <button className="modalClose" onClick={close}>Close me</button>
            </div>
            : null
        }
        </>
    );
};

export default Modal;   