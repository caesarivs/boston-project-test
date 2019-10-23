const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
// const authControllerPolicy = require('../policies/auth')

router.get('/', (req, res) => res.send('Nothing to see here )'))

router.post('/register', authController.register)
router.post('/confirm', authController.confirm)
router.post('/resend', authController.resend)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/recover-password', authController.recoverPassword)
router.post('/reset-password', authController.resetPassword)

module.exports = router
