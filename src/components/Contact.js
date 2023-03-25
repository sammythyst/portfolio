import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { validateEmail } from '../utils/helpers';


function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmMessage, setConfirmMessage] = useState('');
    const [toSend, setToSend] = useState({
      from_name: '',
      reply_to: '',
      subject: '',
      message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!toSend.from_name) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!validateEmail(toSend.reply_to)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!toSend.subject) {
            setErrorMessage('Please enter a subject heading.');
            return;
        }
        if (!toSend.message) {
            setErrorMessage('Please enter a message.');
            return;
        }
        if (toSend.from_name && toSend.reply_to && toSend.subject && toSend.message) {
            send(
                'service_iyw0bi9',
                'template_thpcycl',
                toSend,
                'CuyhleZXSVTjworC3'
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setErrorMessage('');
                    setConfirmMessage('Message sent!');
                    return;
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    setErrorMessage('Something went wrong...');
                    setConfirmMessage('');
                });
        }
        setToSend({
            from_name: '',
            reply_to: '',
            subject: '',
            message: '',
        });
    };
  
  
    return (
        <div className='my-5 d-md-flex'>
        <div className='w-100 d-md-block'>
                <h3>Contact Me</h3>
                <p>Want to reach out? Send a message in the form provided or email me directly at <a className="email" href="mailto:samswain.dev@gmail.com">samswain.dev@gmail.com</a>. I'd love to hear from you and will get back to you within 24 hours.</p>
        </div>
        <div className='w-100 d-md-block'>
            <form className='d-flex flex-column mx-2' onSubmit={onSubmit}>
                <input className='mb-3 px-2'
                    type='text'
                    name='from_name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input className='mb-3 px-2'
                    type='text'
                    name='reply_to'
                    placeholder='Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <input className='mb-3 px-2'
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={toSend.subject}
                    onChange={handleChange}
                />
                <textarea className='mb-3 px-2'
                    type='text'
                    name='message'
                    placeholder='Message'
                    value={toSend.message}
                    onChange={handleChange}
                    rows="5"
                />
                <button className='mb-2' type='submit'>Submit</button>

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