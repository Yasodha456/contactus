const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { submitContactForm } = require('../Controllers/authController');

router.post(
  '/contact',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('message').isLength({ min: 1, max: 1000 }).withMessage('Message must be 1-1000 characters'),
    body('name').optional().isLength({ max: 100 }),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
    body('topic').optional().isIn(['Support', 'Sales', 'Feedback', 'Other'])
  ],
  submitContactForm
);

module.exports = router;
