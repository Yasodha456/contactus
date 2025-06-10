const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Auth Copy Route is working!');
});

module.exports = router;