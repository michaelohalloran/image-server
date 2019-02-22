const express = require('express');
const router = express.Router();
const { signup } = require('../handlers/auth');

// ROUTE: /api/auth/signup
router.post('/signup', signup);

module.exports = router;
