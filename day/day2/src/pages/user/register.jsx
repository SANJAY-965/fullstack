// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '/src/assets/css/register.css'
// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) {
//       setError('Please enter your email.');
//       return;
//     }
//     if (!password.trim()) {
//       setError('Please enter your password.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }
//     // Add your signup logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);

//     // Clear form fields and error message
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setError('');
//   };

//   return (
//     <div className="card1">
//       <h2>Signup Form</h2>

//       {/* LOGIN / REGISTER LINKS */}
//       <div className="login_register1">
//         {/* <nav> */}
//           <Link to="/">Login</Link>
         
//           <Link to="" className='link2'>Register</Link>
//           {/* </nav> */}
//       </div>

//       {/* FORM */}
//       <form className="form1" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="pass"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="confirm_pass"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button type="submit" className="login_btn">Signup</button>
//       </form>

//       {/* ERROR MESSAGE */}
//       {error && <div className="error">{error}</div>}

//       {/* FORGOT PASSWORD LINK */}
//       {/* <a href="#" className="fp">Forgot password?</a> */}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Clear form fields and error message
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div
      style={{
        // backgroundImage: "url('src/assets/images/i4.jpg')",
        backgroundColor:'black',
        backgroundRepeat: 'no-repeat',
        
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="card1"
        style={{
          width: '90%',
          maxWidth: '400px',
         background:"white",
                   display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <h2>Signup Form</h2>

        {/* LOGIN / REGISTER LINKS */}
        <div
          className="login_register1"
          style={{
            display: 'flex',
            width: '100%',
            border: '1px solid rgba(221, 221, 221, 1)',
            borderRadius: '15px',
            margin: '20px 0',
          }}
        >
          <Link
            to="/"
            className="login"
            style={{
              fontSize: '1em',
              padding: '10px 55px',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              color: 'black',
              width: '50%',
              textDecoration: 'none',
            }}
          >
            Login
          </Link>
          <Link
            to=""
            className="link2"
            style={{
              fontSize: '1em',
              padding: '10px 55px',
              borderRadius: '15px',
              background: "rgb(0,0,33)",
              color: 'white',
              width: '50%',
              textDecoration: 'none',
            }}
          >
            Register
          </Link>
        </div>

        {/* FORM */}
        <form
          className="form1"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="confirm_pass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <button
            type="submit"
            className="login_btn"
            style={{
              fontSize: '20px',
              color: 'white',
              borderRadius: '15px',
              border: 'none',
              backgroundColor: '#003A74',
              width: '100%',
              padding: '10px',
              marginTop: '15px',
              marginBottom: '15px',
              background: "rgb(0,0,33)",
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .9)',
            }}
          >
            Signup
          </button>
        </form>

        {error && (
          <div className="error" style={{ color: 'red', marginBottom: '15px' }}>
            {error}
          </div>
        )}

      </div>
    </div>
  );
};

export default Register;
