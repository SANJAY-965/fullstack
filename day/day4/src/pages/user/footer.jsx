import React from 'react';
import '/src/assets/css/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p >Our platform offers a wide range of courses taught by industry experts, 
              covering topics such as technology, business, arts, languages, and more.
              </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: sss@gmail.com</p>
            <p>Phone: 9765348765</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
