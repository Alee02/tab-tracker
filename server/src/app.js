const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

//  assuming that we have a models folder
//  Which has index.js file that returns object called sequlize attribute
const {sequelize} = require('./models')

const app = express()
app.use(morgan('combined'))
//  status logs
app.use(bodyParser.json())
app.use(cors())

//  requires a a file tha returns an 'app' function
//  that attaches all the endpoints in the routes
require('./routes')(app)

//  connect sequelize to whatever database you have configured
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server Started on port ${config.port}`)
  })
