const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8000
const hostname = process.env.HOST_NAME

configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

connection.query(
  'SELECT * FROM Users',
  function (err, results) {
    console.log(results); // results contains rows returned by server
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})