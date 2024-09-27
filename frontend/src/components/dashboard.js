import React, { useState, useEffect } from 'react';
import { fetchLeads } from '../services/api'; // API service to fetch lead data
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch all leads from backend
    fetchLeads()
      .then((response) => setLeads(response.data))
      .catch((error) => console.error("Error fetching leads:", error));
  }, []);

  // Data for charts
  const engagementLevels = leads.reduce((acc, lead) => {
    if (lead.engagementLevel) {
      acc[lead.engagementLevel] = (acc[lead.engagementLevel] || 0) + 1;
    }
    return acc;
  }, {});

  const conversionRates = leads.reduce((acc, lead) => {
    acc.converted = acc.converted || 0;
    acc.notConverted = acc.notConverted || 0;
    lead.conversionLikelihood > 50 ? acc.converted++ : acc.notConverted++;
    return acc;
  }, { converted: 0, notConverted: 0 });

  // Bar chart for engagement levels
  const engagementData = {
    labels: Object.keys(engagementLevels),
    datasets: [
      {
        label: 'Leads Engagement Levels',
        data: Object.values(engagementLevels),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Pie chart for conversion rate
  const conversionData = {
    labels: ['Converted', 'Not Converted'],
    datasets: [
      {
        data: [conversionRates.converted, conversionRates.notConverted],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div>
      <h2>Lead Dashboard</h2>
      
      <div>
        <h3>Engagement Levels</h3>
        <Bar data={engagementData} />
      </div>
      
      <div>
        <h3>Conversion Rates</h3>
        <Pie data={conversionData} />
      </div>
    </div>
  );
}

export default Dashboard;
