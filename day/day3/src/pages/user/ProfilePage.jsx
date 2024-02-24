import React, { useState } from 'react';
// import SearchAppBar from '../../components/UI/Navbar';
// import Footer from '../../components/UI/Footer';
import '/src/assets/css/profile.css'; 
// import Footer from '/src/pages/user/footer.jsx';
import { Link } from 'react-router-dom';
import Header from '/src/pages/user/header.jsx';

// import image from '/src/assets/images/pro1.jpg';
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState('John Doe'); // Initial name
  const [tempEmail, setTempEmail] = useState('john@example.com'); // Initial email
  const [tempPhoneNumber, setTempPhoneNumber] = useState('1234567890'); // Initial phone number
  const [tempDOB, setTempDOB] = useState('1990-01-01'); // Initial date of birth
  const [tempBio, setTempBio] = useState('Lorem ipsum dolor sit amet'); // Initial bio

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset temporary values to the original values
    setTempName('John Doe');
    setTempEmail('john@example.com');
    setTempPhoneNumber('1234567890');
    setTempDOB('1990-01-01');
    setTempBio('Computer Science Engineer');
  };

  const handleSave = () => {
    // Handle saving the changes (Not included in this example)
    setIsEditing(false);
    // Save tempName, tempEmail, tempPhoneNumber, tempDOB, and tempBio to the database or wherever you are managing the state
  };

  return (
    <>
      {/* <SearchAppBar /> */}
      <div>
        <Header/>
      </div>
      <div className="profile-page">
        <div className="profile-header">
          <img src="/src/assets/images/pro.png" alt="Profile" />
          {isEditing ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="tel"
                value={tempPhoneNumber}
                onChange={(e) => setTempPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
              <input
                type="date"
                value={tempDOB}
                onChange={(e) => setTempDOB(e.target.value)}
                placeholder="Date of Birth"
              />
              <textarea
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                placeholder="Bio"
              />
            </>
          ) : (
            <>
              <h2>{tempName}</h2><br/>
              <p>Email: {tempEmail}</p><br/>
              <p>Phone Number: {tempPhoneNumber}</p><br/>
              <p>Date of Birth: {tempDOB}</p><br/>
              <p>Bio: {tempBio}</p><br/>
              <Link to="/ec" style={{textDecoration:'none',color:'black'}}>
              <p>See Enroller Courses</p></Link>
            </>
          )}
          {isEditing ? (
            <>
              <button onClick={handleSave} style={{backgroundColor:'black',borderRadius:'5px'}}>Save</button>&nbsp;&nbsp;
              <button onClick={handleCancel} style={{backgroundColor:'black',borderRadius:'5px'}}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit} style={{backgroundColor:'black',borderRadius:'5px'}}>Edit</button>
            
          )}&nbsp;&nbsp;<Link to='/' style={{textDecoration:'none'}}><button style={{backgroundColor:'black',borderRadius:'5px'}}>Logout</button></Link>
        </div>
      </div>
      <div>

      {/* <Footer/> */}
      </div>
    </>
  );
};

export default Profile;