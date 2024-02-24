import React from 'react';
import '/src/assets/css/course.css'; 
import Foot from '/src/pages/user/footer.jsx';
import Head from '/src/pages/user/header.jsx';
import { Link } from 'react-router-dom';
const PageWithCards = () => {
  return (
    <>
    <Head/>
    <div className="page">

      <h1>Available Courses</h1>
      <div className="card-container">
      <div className="card">
          <img src="/src/assets/images/DA.jpg" alt="Data Analytics" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Data Analytics</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div><div className="card">
          <img src="/src/assets/images/dm.png" alt="Digital Marketing" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Digital Marketing</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div><div className="card">
          <img src="/src/assets/images/its.png" alt="It support" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>It support</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div>
        <div className="card">
          <img src="/src/assets/images/ux.jpg" alt="UX Design" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>UX Design</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div><div className="card">
          <img src="/src/assets/images/ml.jpg" alt="Machine Learning" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Machine Learning</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div><div className="card">
          <img src="/src/assets/images/ds.jpg" alt="Data Science" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Data Science</p>
          </center>
          <br/>
          <Link to='/enroll' style={{textDecoration:'none'}}>

          <button>Enroll</button>
          </Link>
        </div>
        </div>
      </div>
  
    {/* <Foot/> */}
    </>
  );
};

export default PageWithCards;
