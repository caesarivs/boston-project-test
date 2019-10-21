var express = require('express')
var router = express.Router()
const driverController = require('../controllers/driver')

router.get('/', driverController.getAllDrivers)
router.post('/create', driverController.createDriver)
router.get('/:driverId', driverController.getDriverById)
router.put('/:driverId', driverController.updateDriver)
router.delete('/:driverId', driverController.deleteDriver)

module.exports = router
