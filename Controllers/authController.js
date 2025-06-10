const Contact = require('../Models/contact');
const { validationResult } = require('express-validator');

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, phone, topic, message } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, topic, message });
    await newContact.save();
    res.status(200).json({ message: 'Message received successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};
