import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your submit logic here (e.g., send data to an API endpoint)
        console.log(name, email, message);
      };
    
      return (
        <div id='Contact' className="contact-section">
          <div className="contact-details">
            <h1>Contact Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
               qui ipsum suscipit, architecto nulla dolor? Quo et quaerat
                provident, nisi laborum facere doloremque error minima maiores
                 dolor ullam blanditiis!</p>
            <p>0612324546</p>
            <p>Somali / Bandir / C/caziiz</p>
            <p>ZakiBashir@gmail.com</p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="user_email"className="form-Contact" />
                <label>message</label>
                <textarea name="message" rows="6"className="form-Contact"/>
                <input type="submit" value="send" />
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;
    