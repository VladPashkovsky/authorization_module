const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  res.send('LOGIN');
});

router.post('/register', function(req, res, next) {
  res.send('REGISTER');
});

router.post('/current', function(req, res, next) {
  res.send('CURRENT');
});

module.exports = router;
