import React, { useState } from 'react';
import '/src/assets/css/enroll.css'
const CourseEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
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
    // You can perform validation here before submitting the form
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      course: ''
    });
  };

  return (
    <div className='enroll'>
    <center>
<br/><br/>
    <h1>Course Enrollment</h1><br/>
    <br/>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="course">Select Course:</label>
        <select 
          id="course" 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          required 
        >
          <option value="">Select a course</option>
          <option value="React Basics">React Basics</option>
          <option value="React Advanced">React Advanced</option>
          <option value="React Hooks">React Hooks</option>
        </select>
      </div>
      <button type="submit">Enroll</button>
    </form>
    </center>
    </div>
  );
};

export default CourseEnrollmentForm;
