import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmMessage, setConfirmMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!message) {
            setErrorMessage('Please enter a message.');
            return;
        }
        if (name && email && message) {
            setErrorMessage('');
            setConfirmMessage('Message sent!');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    
    return (
        <div className='m-5 d-md-flex'>
            <div className='w-100 d-md-block'>
                <h3>Contact Me</h3>
                <p className='p-2'>Have a question or comment for me? Send a message in the form provided or email me directly at <a class="email" href="mailto:samswain.dev@gmail.com">samswain.dev@gmail.com</a>. I'd love to hear from you and will get back to you as soon as I can.</p>
                </div>
            <div className='w-100 d-md-block'>
                <form className='d-flex flex-column'>
                    <input className='mb-3 mx-1 px-2'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"/>
                    <input className='mb-3 mx-1 px-2'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"/>
                    <textarea className='mb-3 mx-1 px-2'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="message"
                        placeholder="Message"
                        rows="5"/>
                    <button className='mb-2 px-4' type="button" onClick={handleFormSubmit}>Submit</button>

                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                {confirmMessage && (
                    <div>
                        <p>{confirmMessage}</p>
                    </div>
                )}
                </form>
            </div>
        </div>
    );
}

export default Contact;