var express = require('express')
var logger = require('morgan')
var models = require('./models')

var indexRouter = require('./routes/index')
var carRouter = require('./routes/cars')
var driverRouter = require('./routes/drivers')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/cars', carRouter)
app.use('/drivers', driverRouter)

models.sequelize.sync().then(function() {
  console.log('DB OK')
}).catch(function(err) {
  console.log(err)
})

module.exports = app
