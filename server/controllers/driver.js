const Driver = require('../models').Driver

const createDriver = async (req, res) => {
  try {
    const driver = await Driver.create({
      name: req.body.name,
      birthdate: req.body.birthdate
    })
    return res.status(201).json({
      driver
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll()
    return res.status(200).json({
      drivers
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getDriverById = async (req, res) => {
  try {
    const { driverId } = req.params
    const driver = await Driver.findOne({
      where: {
        id: driverId
      }
    })
    if (driver) {
      return res.status(200).json({
        driver
      })
    }
    return res.status(404).send('Driver with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateDriver = async (req, res) => {
  try {
    const { driverId } = req.params
    const [ updated ] = await Driver.update({
      name: req.body.name,
      birthdate: req.body.birthdate
    }, {
      where: {
        id: driverId
      }
    })
    if (updated) {
      const updatedDriver = await Driver.findOne({
        where: {
          id: driverId
        }
      })
      return res.status(200).json({
        driver: updatedDriver
      })
    }
    throw new Error('Driver not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteDriver = async (req, res) => {
  try {
    const { driverId } = req.params
    const deleted = await Driver.destroy({
      where: {
        id: driverId
      }
    })
    if (deleted) {
      return res.status(204).send("Driver deleted")
    }
    throw new Error("Driver not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createDriver,
  getAllDrivers,
  getDriverById,
  updateDriver,
  deleteDriver
}
