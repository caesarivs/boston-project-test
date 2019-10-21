var express = require('express')
var router = express.Router()
const { Auth } = require('aws-amplify')

router.get('/', (req, res) => res.send('Nothing to see here ;)'))

/* Signup */
router.post('/signup', (req, res) => {
  Auth.signUp({
    username: req.body.email,
    password: req.body.password,
    attributes: {
        email: req.body.email,
        name: req.body.name,
        'custom:account_type': req.body.account_type
    },
  })
  .then(data => res.status(201).send(data))
  .catch(err => res.status(500).send(err))
})

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
