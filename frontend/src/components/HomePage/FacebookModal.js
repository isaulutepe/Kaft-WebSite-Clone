import React, { useState } from "react";
import "../../Css/FGmodal.css";
import axios from 'axios';

//405729372433341

function FacebookModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

   

    return (
        <>
            <button onClick={toggleModal} className="facebookbutton">
                Facebook ile giriş
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span><br /><br />
                        <h2>Facebook ile giriş</h2>
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default FacebookModal;