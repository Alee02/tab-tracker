const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
//  status logs
app.use(bodyParser.json())
app.use(cors())

//  get request for the 'status' endpoint
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

app.listen(process.env.PORT || 8081)
//  asdfasdf
