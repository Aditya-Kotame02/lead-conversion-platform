// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const leadRoutes = require('./routes/leadRoutes'); // Lead API routes
const connectDB = require('./config/db'); // Import the database connection function
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// API Routes
app.use('/api/leads', leadRoutes); // All lead-related routes will be prefixed with /api/leads

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Lead Conversion Platform API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something broke!'); // Send a generic error message
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
