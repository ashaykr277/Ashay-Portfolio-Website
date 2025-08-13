import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <div className='about-section'>
                <div className='contact-container'>
                <h1> Contact Me </h1>

                <div className='form-container'>
                    <div className="left-img">
                        <img src="contact.png" alt="" width="400px" />
                        <div className='contact-details'>

                            <div className="mail">
                                <i class='bx bxs-envelope' ></i><span>shreyamishratulip@gmail.com</span>
                            </div>
                            <div className="num">
                                <i class='bx bxs-phone-call' ></i><span>+91 ******7867</span>

                            </div>
                            <div className="loc">
                                <i class='bx bxs-home' ></i><span>Gurugram</span>
                            </div>

                        </div>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/shreya-mishra-619629287/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                            <a href="https://github.com/shreya276" target='_blank'><i class='bx bxl-github' ></i></a>
                            <a href="https://www.instagram.com/1316__shreya?igsh=eHZhNng3dHFjcmlr" target='_blank'><i class='bx bxl-instagram' ></i></a>
                        </div>
                    </div>


                    <div className="form-details">
                        <h2>Lets connect</h2>
                        <p>Always open for projects, feel free to reach out to me.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
                
            </div>
        </>
    )
}

export default Contact