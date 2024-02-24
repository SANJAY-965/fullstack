// import React from 'react';
// import googleCybersecurityImage from '../../assets/images/DA.jpg';
// import '/src/assets/css/gcyber.css'
// function App() {
//   return (
//     <div className="App1">
//       <header className="App-header1">
//         <img src={googleCybersecurityImage} className="App-logo" alt="Google Cybersecurity" />
//         <h1>Google Cybersecurity</h1>
//         <p>
//           Google is committed to cybersecurity and ensuring user data remains safe and secure.
//         </p>
//         <p>
//           Whether it's protecting your Gmail account or securing cloud infrastructure, Google employs advanced cybersecurity measures to safeguard its users.
//         </p>
//         <p>
//           Stay updated with the latest cybersecurity developments from Google to keep your digital life protected.
//         </p>
      
//         <br/><br/>
      
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import googleCybersecurityImage from '../../assets/images/DA.jpg';
// import '/src/assets/css/gcyber.css';
// import { Link } from 'react-router-dom';
// import Header from '/src/pages/user/header.jsx';
// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission (e.g., sending data to backend)
//     console.log("Form submitted:", { name, email, message });
//     // Clear form fields
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <>
//     <div>
//       <Header/>
//     </div>
//     <div className="App1">
      
//       <header className="App-header1">
//     <br/><br/>
//         <img src={googleCybersecurityImage} className="App-logo" alt="Google Cybersecurity" /><br/>
//         <h1>Google Cybersecurity</h1><br/>
//         <p>
//           Google is committed to cybersecurity and ensuring user data remains safe and secure.
//         {/* </p> */}
//         {/* <p> */}
//           Whether it's protecting your Gmail account or securing cloud infrastructure, Google employs advanced cybersecurity measures to safeguard its users.
//         {/* </p>
//         <p> */}
//           Stay updated with the latest cybersecurity developments from Google to keep your digital life protected.
//         </p>

//         <br />

//             {/* <Link to='/faq'>
//           <button style={{fontSize:'30px'}}>click</button>
//             </Link> */}
          // <h2>Have a question? Send us a message!</h2>
//         <div className='formm'>
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         </div>
//         <br /><br />
//         <h2>FAQ</h2>
//         <p><strong>Q:</strong> How does Google protect user data?</p>
//         <p><strong>A:</strong> Google utilizes robust encryption techniques and secure infrastructure to protect user data both in transit and at rest.</p>
//         <p><strong>Q:</strong> What measures does Google take for incident response?</p>
//         <p><strong>A:</strong> Google employs sophisticated monitoring tools and incident response procedures to detect and mitigate security incidents in real-time.</p>
//         <p><strong>Q:</strong> How does Google address security vulnerabilities?</p>
//         <p><strong>A:</strong> Google proactively identifies and addresses security vulnerabilities through rigorous vulnerability management programs.</p>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import googleCybersecurityImage from '../../assets/images/DA.jpg';

import '/src/assets/css/gcyber.css';
import { Link } from 'react-router-dom';
import Header from '/src/pages/user/header.jsx';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App1">
        <header className="App-header1">
          <br /><br />
          <img src={googleCybersecurityImage} className="App-logo" alt="Google Cybersecurity" /><br />
          <h1>Google Cybersecurity</h1><br />
          <p>
            Google is committed to cybersecurity and ensuring user data remains safe and secure.
         
            Whether it's protecting your Gmail account or securing cloud infrastructure, Google employs advanced cybersecurity measures to safeguard its users.
       
            Stay updated with the latest cybersecurity developments from Google to keep your digital life protected.
          </p><br/>
          
        <p>1.Data Encryption: Google utilizes robust encryption techniques to protect data both in 
        transit and at rest. This includes encrypting user data stored in its data 
        centers, as well as data transmitted between users and Google services. Encryption ensures that 
        even if unauthorized parties gain access to the data, they cannot decipher it without the proper 
        encryption keys.</p><br />
        <p>2.Data Encryption: Google utilizes robust encryption techniques to protect data
             both in transit and at rest. This includes encrypting user data stored in its data centers, as 
             well as data transmitted between users and Google services. Encryption ensures that even if 
            unauthorized parties gain access to the data, they cannot decipher it without the proper encryption keys.</p>
            <p><br />
            3.Secure Infrastructure: Google operates a globally distributed infrastructure comprising data centers, 
            networks, and servers. These infrastructure components are designed with security in mind, incorporating 
            measures such as physical security controls, network segmentation, and access controls to prevent unauthorized
             access and ensure the integrity and availability of services.
            </p><br />
            <p>
                4.Continuous Monitoring and Incident Response: Google employs sophisticated monitoring tools
                
                 and techniques to detect and respond to security incidents in real-time. This includes monitoring
                  network traffic, analyzing system logs, and employing advanced threat detection algorithms to identify 
                  suspicious behavior or anomalies. In the event of a security incident, Google has established incident
                   response procedures and teams of security experts to promptly investigate, contain, and mitigate the 
                   impact of the incident.
            </p><br />
            <p>
                5.Vulnerability Management: Google proactively identifies and addresses security vulnerabilities in 
                its software, systems, and infrastructure through rigorous vulnerability management programs. This 
                includes conducting regular security assessments, penetration testing, and code reviews to identify 
                and remediate potential security weaknesses before they can be exploited by attackers.
            </p><br />
            <p>
                6.Security Awareness and Training: Google invests in security awareness and training programs 
                to educate its employees, partners, and users about cybersecurity best practices and the importance
                 of security hygiene. This includes providing training on topics such as phishing awareness, password 
                 security, and safe browsing habits to empower individuals to protect themselves against common cyber 
                 threats.
            </p><br />
            <p>
                7.Collaboration and Information Sharing: Google actively collaborates with industry partners,
                 government agencies, and security researchers to share threat intelligence, collaborate on security 
                 research, and address emerging cybersecurity challenges collectively. This collaborative approach helps
                  Google stay ahead of evolving threats and strengthens the broader cybersecurity ecosystem.
            </p><br/>
            <p>
              8.Privacy Protection: In addition to cybersecurity measures, Google also prioritizes user privacy 
              and data protection. This includes adhering to strict privacy policies, providing users with transparency
               and control over their data, and implementing privacy-enhancing 
              technologies such as differential privacy and data anonymization to minimize the risk of data
               exposure and misuse.
            </p><br/>
            <p>
            Overall, Google's approach to cybersecurity is characterized by a combination of advanced technologies, proactive
             security measures, continuous innovation, and a commitment to protecting users' privacy and data.
              By investing in cybersecurity across its products, services, and infrastructure, Google aims to build 
              trust with its users and maintain the security and integrity of its platforms in the face of evolving cyber
               threats.
            </p>
            <br/>
          <br />
          <p>Have a question?</p>
          <Link style={{textDecoration:"none"}} to='/faq'>

          <button>click me</button>
          </Link>
          
        </header>
      </div>
    </>
  );
}

export default App;
