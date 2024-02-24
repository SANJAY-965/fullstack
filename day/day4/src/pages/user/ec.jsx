import React from 'react';
import '/src/assets/css/ec.css'; 
import Head from '/src/pages/user/header.jsx';
import { Link } from 'react-router-dom';
const PageWithCards = () => {
  return (
    <>
    <Head/>
    <div className="page">

      <h1>Enrolled Courses</h1>
      <div className="card-container">
        <div className="card">
          <img src="/src/assets/images/cyber.jpg" alt="Google Cybersecurity" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Google Cybersecurity</p>
          </center>
          <br/>
          <Link to='/gc' style={{textDecoration:'none'}}>
          <button >In Progress</button></Link>
        </div>
        {/* <div className="card">
          <img src="/src/assets/images/aws.png" alt="AWS" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>AWS</p>
          </center> 
          <br/>
          <button>Enroll</button>
        </div> */}
        

      </div>
    </div>
    {/* <Foot/> */}
    </>
  );
};

export default PageWithCards;
