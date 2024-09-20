import React from 'react';
import "../components/Css/DisplayPage.css";
import { useNavigate } from 'react-router-dom';


const DisplayPage = ({ formEntries }) => {
    const navigate= useNavigate()
    const handleEditClick = (entry, index) => {
        navigate('/', { state: { entry, index } });  
      };

  return (
    <>
    <div className='container'>
      <h2 className='heading'>Submitted Details</h2>
      {formEntries.length === 0 ? (
        <p>No details submitted yet.</p>
      ) : (
        formEntries.map((entry, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Address:</strong> {entry.address}</p>
            <button onClick={() => handleEditClick(entry, index)}>Edit</button>
            <hr />
          </div>
        ))
      )}
      
    </div>
    <button className='btn'onClick={()=>{navigate('/')}}>Go to back Page</button>
    </>
  );
};

export default DisplayPage;

