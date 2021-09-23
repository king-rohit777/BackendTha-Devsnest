var express = require('express');
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerChecks');
var register = require('../controllers/register')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email , password , cofirm password} -req.body
 * @description
 * Security , Performances , Edge Cases
 * Lv -1
 * email validate -string
 * password validation 
 * password == confirm password
 * Lv -2
 * JS/SQL injection
 * Lv-3
 * Check if email already exists
 * password hashing - security
 * email lowercase
 * save
 */

router.post("/register", (registerInitialChecks, register));
module.exports = router;


