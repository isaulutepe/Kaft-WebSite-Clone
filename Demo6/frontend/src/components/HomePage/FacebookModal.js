import React, { useState } from "react";
import "../../Css/FGmodal.css";
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

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

    const responseFacebook = async (response) => {
        console.log(response);
        try {
            const result = await axios.post("http://localhost:4000/facebooklogin", {
                accessToken: response.accessToken,
                userID: response.userID
            });
            console.log("Facebook login success, client side", result);
        } catch (error) {
            console.error("Facebook login error, client side", error);
        }
    };

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
                        <FacebookLogin
                            appId="405729372433341"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook} />
                    </div>
                </div>
            )}
        </>
    );
}

export default FacebookModal;