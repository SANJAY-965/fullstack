import React, { useState } from 'react';
import '/src/assets/css/reply.css'

import Side from '/src/pages/user/sidebar.jsx'; 
const QueryReplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send reply to user)
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='relpy'>
    <center>
        <br/>

     <h1>Query</h1>
     <br/>
     <br/>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <p style={{border:'2px solid', width:"30%",height:'40px'}}>Ram</p>
      </div>
      <div>
        <label htmlFor="To email">Email:</label>
        <p style={{border:'2px solid', width:"30%",height:'40px'}}>abc@gmail.com</p>
        {/* <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        /> */}
      </div>
      <div>
        <Side/>
        <label htmlFor="subject">Query</label>
        <p style={{border:'2px solid', width:"30%",height:'40px'}}>How does Google protect user data?</p>
        {/* <input 
          type="text" 
          id="subject" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        /> */}
      </div>
      <div>
        <label htmlFor="message">Answer:</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          style={{border:'2px solid'}}
          required 
        />
      </div>
      <button type="submit">Send_Reply</button>
    </form>
       
    </center>
    </div>
  );
};

export default QueryReplyForm;
