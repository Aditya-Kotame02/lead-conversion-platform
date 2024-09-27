// Import required packages
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead'); // Import the Lead model

// @route   POST /api/leads
// @desc    Create a new lead
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, status } = req.body;
        
        // Create a new lead instance
        const newLead = new Lead({
            name,
            email,
            phone,
            status
        });

        // Save lead to database
        const lead = await newLead.save();
        res.json(lead);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create lead' });
    }
});

// @route   GET /api/leads
// @desc    Get all leads
// @access  Public
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve leads' });
    }
});

// @route   GET /api/leads/:id
// @desc    Get a lead by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.json(lead);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve lead' });
    }
});

// @route   PUT /api/leads/:id
// @desc    Update a lead by ID
// @access  Public
router.put('/:id', async (req, res) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.json(updatedLead);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update lead' });
    }
});

// @route   DELETE /api/leads/:id
// @desc    Delete a lead by ID
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        const deletedLead = await Lead.findByIdAndDelete(req.params.id);
        if (!deletedLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.json({ message: 'Lead deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete lead' });
    }
});

module.exports = router;
