import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import DisplayPage from './components/DisplayPage';

function App() {
  const [formEntries, setFormEntries] = useState([]);

  
  const editEntry = (index, updatedData) => {
    const updatedEntries = formEntries.map((entry, i) =>
      i === index ? updatedData : entry
    );
    setFormEntries(updatedEntries);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage formEntries={formEntries} setFormEntries={setFormEntries} />} />
        <Route path="/display" element={<DisplayPage formEntries={formEntries} />}   editEntry={editEntry}/>
      </Routes>
    </Router>
  );
}

export default App;


