const Car = require('../models').Car

const createCar = async (req, res) => {
  try {
    const car = await Car.create({
      car_plate: req.body.car_plate,
      car_model: req.body.car_model
    })
    return res.status(201).json({
      car
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll()
    return res.status(200).json({
      cars
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCarById = async (req, res) => {
  try {
    const { carId } = req.params
    const car = await Car.findOne({
      where: {
        id: carId
      }
    })
    if (car) {
      return res.status(200).json({
        car
      })
    }
    return res.status(404).send('Car with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCar = async (req, res) => {
  try {
    const { carId } = req.params
    const [ updated ] = await Car.update({
      car_plate: req.body.car_plate,
      car_model: req.body.car_model
    }, {
      where: {
        id: carId
      }
    })
    if (updated) {
      const updatedCar = await Car.findOne({
        where: {
          id: carId
        }
      })
      return res.status(200).json({
        car: updatedCar
      })
    }
    throw new Error('Car not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCar = async (req, res) => {
  try {
    const { carId } = req.params
    const deleted = await Car.destroy({
      where: {
        id: carId
      }
    })
    if (deleted) {
      return res.status(204).send("Car deleted")
    }
    throw new Error("Car not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar
}
