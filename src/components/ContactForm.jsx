import React from 'react'
import { useState } from 'react';
import './Contact.css'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        comment: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading
        console.log("Form data:", formData);
        alert("Form submitted (but not sent anywhere)");
    };
    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
                <div>
                    {/* <label htmlFor="name">Full Name</label> */}
                    <input
                        type="text"
                        placeholder='Enter Name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    {/* <label>Email:</label> */}
                    <input
                        type="email"
                        placeholder='Enter Email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    {/* <label>Number:</label> */}
                    <input
                        type="tel"
                        placeholder='Enter Mobile Number'
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    {/* <label>Comment:</label> */}
                    <textarea
                        name="comment"
                        placeholder='Type your message here...'
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Lets Talk <i class='bx bx-chevrons-right' ></i></button>
            </form>

        </>

    )
}

export default ContactForm