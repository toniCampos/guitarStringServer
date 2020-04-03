const express = require('express')
const app = express()
const chords = require('./chords')
const port = process.env.PORT || 3000 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.get('/chords', function (req, res) {
  console.log('enviado')
  res.json(chords.chords)
})

app.listen(port, function () {
  console.log(`'Example app listening on port ${port}!'`)
})