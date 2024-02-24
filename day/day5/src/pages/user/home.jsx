import React from 'react';
import Footer from '/src/pages/user/footer.jsx';
import Header from '/src/pages/user/header.jsx';
import Side from '/src/pages/user/sidebar.jsx';
import { Link } from 'react-router-dom';
import imageSrc from '/src/assets/images/i8.jpg'; // Import the image source
import { blueGrey, grey } from '@mui/material/colors';

const HomePage = () => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  };

  const contentStyle = {
    textAlign: 'left',
    width: '50%',
    padding: '0 20px',
  };

  const imageStyle = {
    width: '40%',
    height: '50%',
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '30px', // Rounded corners for the image
  };

  const enrollButtonStyle = {
    padding: '12px 24px', // Increased padding for the button
    // backgroundColor: '#007bff',
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px', // Increased font size for the button text
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '20px',
    // transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  // Hover effect for the button
  const handleEnrollHover = (e) => {
    // e.target.style.backgroundColor = '#0056b3'; // Darker shade of blue on hover
  };

  const handleEnrollLeave = (e) => {
    // e.target.style.backgroundColor = '#007bff'; // Revert back to original color on hover out
  };

  const handleEnrollClick = () => {
    console.log('Enroll button clicked!');
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div style={backgroundStyle}>
        <div style={contentStyle}>
          <p style={{ fontSize: '43px', fontFamily: "Times New Roman", marginBottom: '20px', color: '#333' }}>Welcome to Our Learning Platform!</p><br/>
          <p style={{ fontSize: '19px', marginBottom: '20px', color: '#666' }}>Welcome to our learning platform! We are thrilled to have you join us on this educational journey. Whether you are here to explore new topics, enhance your skills, or pursue a specific goal, we are here to support you every step of the way.</p>
          <Link to='/course'>
            <button
              style={enrollButtonStyle}
              onClick={handleEnrollClick}
              onMouseEnter={handleEnrollHover}
              onMouseLeave={handleEnrollLeave}
            >
              Enroll
            </button>
          </Link>
        </div>
        <div style={imageStyle}></div>
      </div>
      <div>
     
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
