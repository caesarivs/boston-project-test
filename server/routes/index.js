var express = require('express')
var router = express.Router()
const userController = require('../controllers/user')

router.get('/', (req, res) => res.send('Nothing to see here ;)'))

/* Signup */
router.post('/signup', userController.createUser)

/* Login */
router.post('/login', function(req, res, next) {
  res.send({
    message: `${req.body.email} has logged in`
  })
})

/* Password recovery */
router.post('/password-recovery', function(req, res, next) {
  res.send({
    message: `Check ${req.body.email} for password recovery instructions`
  })
})

module.exports = router
