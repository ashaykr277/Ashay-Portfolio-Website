import React from 'react'
import 'boxicons'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer-section'>
                <div className="links">
                    <a href="https://www.linkedin.com/in/ashay-kumar-830411221/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                    <a href="https://github.com/ashaykr277" target='_blank'><i class='bx bxl-github' ></i></a>
                    <a href="https://www.instagram.com/_astrobeatz_/" target='_blank'><i class='bx bxl-instagram' ></i></a>
                </div>
                {/* <hr /> */}
                <p>Copyright 2025 © Ashay Kumar. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer