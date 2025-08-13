import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bottom = () => {
    const navigate = useNavigate();
    function goToContact(){
        navigate('./contact');
    }
    return (
        <div>
            <div className="footer-content">
                <h1>Liked my Portfolio? Get Connected with me</h1>
                <div className="btn">
                    <button className="contact-btn" onClick={goToContact}>Contact Me</button>
                </div>

            </div>
        </div>
    )
}

export default Bottom