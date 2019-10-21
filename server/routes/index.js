var express = require('express')
var router = express.Router()
const { Auth } = require('aws-amplify')

router.get('/', (req, res) => res.send('Nothing to see here )'))

/* Sign Up */
router.post('/register', (req, res) => {
  Auth.signUp({
    username: req.body.email,
    password: req.body.password,
    attributes: {
        email: req.body.email,
        name: req.body.name,
        'custom:account_type': req.body.account_type
    },
  })
  .then(data => res.status(200).send(data))
  .catch(err => res.status(500).send(err))
})

/* Sign In */
router.post('/login', (req, res) => {
  Auth.signIn({
    username: req.body.email,
    password: req.body.password
  })
  .then(user => res.status(200).send(user))
  .catch(err => res.status(500).send(err))
})

/* Sign Out */
router.post('/logout', (req, res) => {
  Auth.signOut()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})

/* Password recovery */
router.post('/forgot-password', (req, res) => {
  Auth.forgotPassword(req.body.email)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})

module.exports = router
