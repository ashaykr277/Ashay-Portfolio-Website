import React from 'react'
import 'boxicons'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer-section'>
                <div className="links">
                    <a href="https://www.linkedin.com/in/shreya-mishra-619629287/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                    <a href="https://github.com/shreya276" target='_blank'><i class='bx bxl-github' ></i></a>
                    <a href="https://www.instagram.com/1316__shreya?igsh=eHZhNng3dHFjcmlr" target='_blank'><i class='bx bxl-instagram' ></i></a>
                </div>
                {/* <hr /> */}
                <p>Copyright © Shreya Mishra. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer