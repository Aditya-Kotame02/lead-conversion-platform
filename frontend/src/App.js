// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div>
        <h1>AI-Driven Lead Conversion Platform</h1>
        <Routes>
          <Route path="/add-lead" element={<LeadForm />} />
          <Route path="/lead-list" element={<LeadList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LeadList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
