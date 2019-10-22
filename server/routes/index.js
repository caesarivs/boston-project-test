var express = require('express')
var router = express.Router()
const Auth = require('@aws-amplify/auth').default

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

/* Confirm signup */
router.post('/confirm', (req, res)  => {
  Auth.confirmSignUp(req.body.email, req.body.code, {
    forceAliasCreation: true
  })
  .then(data => res.status(200).send(data))
  .catch(err => res.status(500).send(err))
})
router.post('/resend', (req, res) => {
  Auth.resendSignUp(req.body.email)
    .then(() => res.status(200).send('code resent successfully'))
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
router.post('/recover-password', (req, res) => {
  Auth.forgotPassword(req.body.email)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
router.post('/reset-password', (req, res) => {
  Auth.forgotPasswordSubmit(req.body.email, req.body.code, req.body.password)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(200).send(err))
})

module.exports = router
