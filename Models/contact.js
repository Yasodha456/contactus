const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  phone: String,
  topic: { type: String, enum: ['Support', 'Sales', 'Feedback', 'Other'], default: 'Other' },
  message: { type: String, required: true, maxlength: 1000 },
  submittedAt: { type: Date, default: Date.now },
  isResolved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Contact', contactSchema);
