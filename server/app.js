global.fetch = require('node-fetch')
var express = require('express')
var logger = require('morgan')
var cors = require('cors')
var models = require('./models')
var Amplify = require('@aws-amplify/core').default
var aws_exports = require('./aws-exports')

var indexRouter = require('./routes/index')
var carRouter = require('./routes/cars')
var driverRouter = require('./routes/drivers')

Amplify.configure(aws_exports)

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
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
