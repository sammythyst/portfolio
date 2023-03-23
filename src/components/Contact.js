import { useState } from 'react';
import { send } from 'emailjs-com';


function Contact() {
    const [toSend, setToSend] = useState({
      from_name: '',
      subject: '',
      message: '',
      reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_iyw0bi9',
          'template_thpcycl',
          toSend,
          'CuyhleZXSVTjworC3'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <div className='contact'>
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='Name'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={toSend.subject}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
  export default Contact;