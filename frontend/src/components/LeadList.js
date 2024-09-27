import React, { useState, useEffect } from 'react';
import { fetchLeads } from '../services/api';  // API service to fetch lead data

function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch all leads from backend
    fetchLeads()
      .then((response) => setLeads(response.data))
      .catch((error) => console.error("Error fetching leads:", error));
  }, []);

  return (
    <div>
      <h2>Leads</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Email</th>
            <th>Engagement Level</th>
            <th>Conversion Likelihood</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.industry}</td>
              <td>{lead.email}</td>
              <td>{lead.engagementLevel}</td>
              <td>{lead.conversionLikelihood}%</td> {/* Assume conversionLikelihood is part of the response */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;
