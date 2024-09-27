const mongoose = require('mongoose');

// Define the lead schema
const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['New', 'In Progress', 'Converted', 'Closed'],
        default: 'New'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the lead model based on the schema
const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
