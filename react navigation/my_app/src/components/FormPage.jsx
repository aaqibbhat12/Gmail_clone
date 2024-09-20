
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../components/Css/FormPage.css";

const FormPage = ({ formEntries, setFormEntries }) => {
  const navigate = useNavigate();
  const location = useLocation();


  const [formData, setFormData] = useState(location.state?.entry || { name: '', email: '', address: '' });
  const index = location.state?.index;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntries = [...formEntries];
    updatedEntries[index] = formData; 
    setFormEntries(updatedEntries);

    
    setFormData({ name: '', email: '', address: '' });
    navigate('/display');
  };

  return (
    <div>
      <h2>Edit Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Address: </label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;











