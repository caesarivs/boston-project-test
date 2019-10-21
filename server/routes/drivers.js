var express = require('express')
var router = express.Router()
const driverController = require('../controllers/driver')

router.post('/', driverController.createDriver)
router.get('/', driverController.getAllDrivers)
router.get('/:driverId', driverController.getDriverById)
router.put('/:driverId', driverController.updateDriver)
router.delete('/:driverId', driverController.deleteDriver)

module.exports = router
