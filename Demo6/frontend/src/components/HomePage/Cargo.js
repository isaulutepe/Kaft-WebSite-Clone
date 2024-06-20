import React, { useState } from "react";
import "../../Css/FGmodal.css";

function Cargo() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="kargo">
                Kargom Nerede
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span><br></br><br></br>
                        
                        

                    </div>
                </div>
            )}

        </>
    );
}
export default Cargo;