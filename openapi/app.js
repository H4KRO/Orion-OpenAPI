
const SERVER = 'localhost'
const PORT = 3000

const OPENAPI_HOST = 'localhost:1026'
const OPENAPI_BASE_PATH = '/'

const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');

var options = {
  swaggerOptions: {
    url: 'http://' + SERVER + ':' + PORT + '/openapi/ngsiv2-openapi.json'
  }
}

app.use('/orion', swaggerUi.serve, swaggerUi.setup(null, options));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/openapi/ngsiv2-openapi.json', (req, res) => {
    var openapi = require('./ngsiv2-openapi.json')
    openapi.host = OPENAPI_HOST
    openapi.basePath = OPENAPI_BASE_PATH
    res.send(openapi)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://${SERVER}:${PORT}`)
})
