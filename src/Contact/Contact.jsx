import React, { useState } from 'react';
import './contact.css';
import vg from '../Images/pics/organic-flat-customer-support_52683-58714.jpg';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Text', text)
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setText('');
    };
    return (
        <div className='page'>
            <div className="phonepage">
                <div className="contact">
                    Contact us
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit} className="form-control">

                        <input className=" inputs-1 poppins" type="text" placeholder='Full Name'
                            name='user_name' value={name} onChange={(e) => setName(e.target.value)} required />

                        <input className=" inputs-1 poppins" type="email" placeholder='Email'
                            name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <input className=" inputs-1 poppins" type="text" placeholder='Subject'
                            name='subject' value={message} onChange={(e) => setMessage(e.target.value)} required />

                        <textarea className=" inputs-1 poppins" name="message" cols="20" rows="10"
                            value={text} onChange={(e) => setText(e.target.value)} required>
                        </textarea>

                        <button type="submit" className='btn poppins'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
           <div className="image-container">
                <img className='image' src={vg} alt="" />

            </div>
        </div>
    )
}
export default Contact;