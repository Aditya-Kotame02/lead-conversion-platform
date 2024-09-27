// src/components/LeadForm.jsx
import React, { useState } from "react";

const LeadForm = () => {
  const [lead, setLead] = useState({
    name: "",
    industry: "",
    engagementLevel: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead submitted:", lead);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Lead Name" onChange={handleChange} />
      <input type="text" name="industry" placeholder="Industry" onChange={handleChange} />
      <input type="text" name="engagementLevel" placeholder="Engagement Level" onChange={handleChange} />
      <button type="submit">Submit Lead</button>
    </form>
  );
};

export default LeadForm;
