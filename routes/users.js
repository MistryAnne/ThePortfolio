/**
 * Name: Anne Mistry
 * ID: 301340972
 * Course: Comp 229 Sec 402
 * Date: Oct 4 2023
 * File name: users.js
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
