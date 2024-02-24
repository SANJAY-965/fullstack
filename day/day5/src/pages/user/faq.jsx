import React, { useState } from 'react';

import Header from '/src/pages/user/header.jsx';
import '/src/assets/css/faq.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to backend)
    console.log("Form submitted:", { name, email, message });
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
   <div>
    <Header/>
   </div>
   <br/>
        <h2 style={{textAlign:'center',fontSize:'40px'}}>Query form</h2> <br/> <br/>
      <div className="formm">
        {/* <div className='formm'> */}

      <form onSubmit={handleFormSubmit} >
        <div>
          <label htmlFor="name">Course Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      <br/>
      <br/>
      <div className='pp'>
      
     <h2> &nbsp;FAQ</h2>
      <br/>
          <p><strong>Q:</strong> How does Google protect user data?</p>
          <p><strong>A:</strong> Google utilizes robust encryption techniques and secure infrastructure
           to protect user data both in transit and at rest.</p>
          <p><strong>Q:</strong> What measures does Google take for incident response?</p>
          <p><strong>A:</strong> Google employs sophisticated monitoring tools and incident response
           procedures to detect and mitigate security incidents in real-time.</p>
          <p><strong>Q:</strong> How does Google address security vulnerabilities?</p>
          <p><strong>A:</strong> Google proactively identifies and addresses security vulnerabilities
           through rigorous vulnerability management programs.</p>
          <p><strong>Q:</strong> What is data science?</p>
          <p><strong>A:</strong>  Data science is a multidisciplinary field that involves extracting insights and
 knowledge from structured and unstructured data using 
various techniques such as statistics, machine learning, and data mining.</p>

          <p><strong>Q:</strong> What measures does Google take for incident response?</p>
          <p><strong>A:</strong> Popular tools in data science include Python programming language,
 R programming language, SQL databases, and various libraries and frameworks such as pandas, 
 scikit-learn, TensorFlow, and PyTorch.</p>
          {/* Q: What is IT support? */}
          <p><strong>Q:</strong> What is IT support?</p>
          <p><strong>A:</strong> IT support refers to the services provided to help individuals and 
organizations with technical issues related to computer hardware, software, 
networks, and other IT infrastructure.
</p>
          <p><strong>Q:</strong> What are common IT support tasks?</p>
          <p><strong>A:</strong> Common IT support tasks include troubleshooting hardware 
and software issues, setting up and configuring computer systems,
 installing and updating software, and providing technical assistance to users.</p>
          {/* <p><strong>Q:</strong> What measures does Google take for incident response?</p>
          <p><strong>A:</strong> Google employs sophisticated monitoring tools and incident response</p>
          <p><strong>Q:</strong> What measures does Google take for incident response?</p>
          <p><strong>A:</strong> Google employs sophisticated monitoring tools and incident response</p> */}

      </div> 
    
    </>
  );
}

export default ContactForm;
