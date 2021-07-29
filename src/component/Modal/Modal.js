import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Resume from "../../assets/harish_kumar_resume.pdf"

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1> Annoucement!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section text-center'>
                    <h3>Take a moment to look into my resume</h3>
                    <a  className='modal-btn btn-red' href={Resume} download="harish_resume.pdf">
                        Click here  
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;