var express = require('express')
var router = express.Router()
const carController = require('../controllers/car')

router.post('/', carController.createCar)
router.get('/', carController.getAllCars)
router.get('/:carId', carController.getCarById)
router.put('/:carId', carController.updateCar)
router.delete('/:carId', carController.deleteCar)

module.exports = router
